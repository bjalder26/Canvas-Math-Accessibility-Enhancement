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

(function() {

  /**
   * Step 1: Remove any saved user preference for MathJax renderer
   * MathJax stores previous renderer settings in localStorage, which overrides defaults.
   * We clear that so the configured "HTML-CSS" renderer will take effect globally.
   */
  localStorage.removeItem("MathJax-Menu-Settings");

  /**
   * Step 2: Wait for MathJax to load before applying the configuration.
   * MathJax loads asynchronously in Canvas, so we poll until it's ready.
   */
  function waitForMathJax(callback) {
    if (window.MathJax && MathJax.Hub && MathJax.Hub.Queue) {
      callback(); // MathJax is ready
    } else {
      setTimeout(function() {
        waitForMathJax(callback);
      }, 100); // retry in 100ms
    }
  }

  /**
   * Step 3: Apply the configuration and re-render math content.
   */
  waitForMathJax(function() {
    // Set the default renderer to HTML-CSS (screen-reader friendly)
    MathJax.Hub.Config({
      menuSettings: {
        renderer: "HTML-CSS"
      }
    });

    // Re-render the existing math on the page
    MathJax.Hub.Queue(["Rerender", MathJax.Hub]);
  });

})();
