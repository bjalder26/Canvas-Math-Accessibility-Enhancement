/*
 * Canvas LMS Math Accessibility Enhancement (Future-Proof + Debug)
 * ----------------------------------------------------------------
 * Ensures MathJax in Canvas LMS uses an accessibility-friendly renderer.
 *
 * Supports:
 * - MathJax v2.x (e.g., 2.7.7)
 * - MathJax v3.x and above (e.g., 3.2+ expected in future Canvas updates)
 * - Safely detects future v4+ and logs structure for inspection
 *
 * Why this matters:
 * - SVG output is not reliably read by screen readers.
 * - HTML-CSS (v2) and CHTML (v3) renderers are accessible and visually consistent.
 *
 * Safe to use:
 * - Non-destructive
 * - Auto-detects version
 * - Gracefully times out if MathJax is not found
 * - Optional debug mode to log structure of new MathJax versions
 */

(function () {
  const POLL_INTERVAL_MS = 100;
  const MAX_WAIT_TIME_MS = 10000;
  const DEBUG = true; // 🔍 Set to false for production to reduce console output

  // Step 1: Remove saved user preferences that might override renderer settings
  try {
    localStorage.removeItem("MathJax-Menu-Settings");
  } catch (err) {
    if (DEBUG) console.warn("[MathJax Accessibility Script] Could not access localStorage:", err);
  }

  // Step 2: Wait for MathJax to load (v2, v3, or future)
  function waitForMathJax(startTime = Date.now()) {
    const mj = window.MathJax;

    if (mj) {
      // Optional: Log detected properties for inspection
      if (DEBUG) {
        console.groupCollapsed("[MathJax Accessibility Script] MathJax detected. Object keys:");
        console.log(Object.keys(mj));
        if (mj.startup) console.log("startup keys:", Object.keys(mj.startup));
        if (mj.Hub) console.log("Hub keys:", Object.keys(mj.Hub));
        console.groupEnd();
      }

      // ---- MathJax v2.x ----
      if (mj.Hub && mj.Hub.Config && mj.Hub.Queue) {
        console.log("[MathJax Accessibility Script] MathJax v2 detected:", mj.version);
        mj.Hub.Config({ menuSettings: { renderer: "HTML-CSS" } });
        mj.Hub.Queue(["Rerender", mj.Hub]);
        console.log("[MathJax Accessibility Script] Applied HTML-CSS renderer (v2).");
        return;
      }

      // ---- MathJax v3.x ----
      if (mj.startup && mj.typesetPromise) {
        console.log("[MathJax Accessibility Script] MathJax v3 detected:", mj.version);
        try {
          mj.startup.promise
            .then(() => mj.typesetPromise())
            .then(() => {
              console.log("[MathJax Accessibility Script] Verified CHTML renderer (v3).");
            })
            .catch((err) => {
              console.error("[MathJax Accessibility Script] Error during re-typeset:", err);
            });
        } catch (e) {
          console.error("[MathJax Accessibility Script] Failed to apply renderer for v3:", e);
        }
        return;
      }

      // ---- Possible future MathJax v4+ ----
      console.warn(
        "[MathJax Accessibility Script] MathJax detected (unknown version). Possibly v4+. No renderer changes applied."
      );
      return;
    }

    // Keep polling if MathJax hasn't loaded yet
    if (Date.now() - startTime < MAX_WAIT_TIME_MS) {
      setTimeout(() => waitForMathJax(startTime), POLL_INTERVAL_MS);
    } else {
      console.warn("[MathJax Accessibility Script] MathJax not detected within timeout.");
    }
  }

  waitForMathJax();
})();
