/*
 * Canvas LMS Math Accessibility Enhancement
 * -----------------------------------------
 * This script configures MathJax v2.7.7 in Canvas LMS to use the "HTML-CSS" renderer
 * instead of the default "SVG" output. This change improves accessibility,
 * particularly for screen readers like ReadSpeaker, NVDA, and VoiceOver.
 *
 * Why this matters:
 * - The default "SVG" renderer is not reliably accessible to screen readers.
 * - The "HTML-CSS" renderer outputs math in a way that can be interpreted by assistive technology.
 * - This change preserves visual fidelity and does not alter the appearance of math for most users.
 *
 * Safe to use:
 * - Non-destructive
 * - Only affects MathJax rendering behavior
 * - Can be removed at any time by deleting the script from the Canvas Theme Editor
 */

(function () {

  /**
   * Configuration: Define the expected MathJax version and polling behavior
   */
  const VERSION_EXPECTED = "2.7.7";
  const POLL_INTERVAL_MS = 100;
  const MAX_WAIT_TIME_MS = 10000;

  /**
   * Step 1: Remove any saved user preference for MathJax renderer
   * MathJax stores previous renderer settings in localStorage, which overrides defaults.
   * We clear that so the configured "HTML-CSS" renderer will take effect globally.
   */
  localStorage.removeItem("MathJax-Menu-Settings");

  /**
   * Step 2: Wait for MathJax to load and verify that it's the correct version (v2.7.7).
   * MathJax loads asynchronously in Canvas, so we poll until it's ready or time out.
   */
  function waitForMathJax(callback, startTime = Date.now()) {
    var mj = window.MathJax;

    if (
      mj &&
      mj.Hub &&
      mj.Hub.Queue &&
      typeof mj.version === "string" &&
      mj.version === VERSION_EXPECTED
    ) {
      callback(); // MathJax is ready and version is correct
    } else if (Date.now() - startTime > MAX_WAIT_TIME_MS) {
      console.warn(
        "[MathJax Accessibility Script] MathJax not found or unsupported version. Expected v2.7.7."
      );
    } else {
      setTimeout(function () {
        waitForMathJax(callback, startTime);
      }, POLL_INTERVAL_MS); // retry after delay
    }
  }

  /**
   * Step 3: Apply the configuration and re-render math content.
   */
  waitForMathJax(function () {
    console.log(
      "[MathJax Accessibility Script] MathJax v2.7.7 detected. Applying HTML-CSS renderer configuration..."
    );

    // Set the default renderer to HTML-CSS (screen-reader friendly)
    MathJax.Hub.Config({
      menuSettings: {
        renderer: "HTML-CSS"
      }
    });

    // Re-render the existing math on the page
    MathJax.Hub.Queue(["Rerender", MathJax.Hub]);

    console.log(
      "[MathJax Accessibility Script] Math content re-rendered using HTML-CSS renderer."
    );
  });

})();
