/*
 * Canvas LMS Math Accessibility Pre-Load (Future-Proof)
 * -----------------------------------------------------
 * - Works for MathJax v2 (current Canvas) and v3+ (future Canvas updates)
 * - Logs unknown future versions (v4+)
 * - Sets accessible renderer: HTML-CSS (v2) or CHTML (v3+)
 * - Safe for global theme upload
 */

(function () {
  // Only set pre-config if MathJax not already initialized
  if (window.MathJax) {
    console.warn("[MathJax Accessibility] MathJax already present. Pre-config skipped.");
    return;
  }

  window.MathJax = {
    // v2 pre-init hook
    AuthorInit: function () {
      MathJax.Hub.Register.StartupHook("End Config", function () {
        try {
          // Set accessible renderer
          MathJax.Hub.Config({
            menuSettings: { renderer: "HTML-CSS" },
            messageStyle: "none"
          });
          console.log("[MathJax Accessibility] HTML-CSS renderer applied for v2.");
        } catch (e) {
          console.error("[MathJax Accessibility] Error applying v2 config:", e);
        }
      });
    },

    // v3+ default options
    options: {
      renderActions: {
        // Disable menu actions that might conflict
        addMenu: []
      }
    },

    // v3+ startup
    startup: {
      typeset: true,
      ready: function () {
        try {
          console.log("[MathJax Accessibility] MathJax v3+ detected, using CHTML renderer.");
          // Proceed with normal startup
          MathJax.startup.defaultReady();
        } catch (e) {
          console.error("[MathJax Accessibility] Error during v3+ startup:", e);
        }
      }
    }
  };

  // Optional: monitor for future unknown versions (v4+)
  setTimeout(function () {
    if (window.MathJax && !window.MathJax.Hub && !window.MathJax.startup) {
      console.warn(
        "[MathJax Accessibility] MathJax loaded but unknown version detected. " +
          "No renderer changes applied. Inspect object:", window.MathJax
      );
    }
  }, 2000);

  console.log("[MathJax Accessibility] Preload configuration set. Ready for MathJax initialization.");
})();
