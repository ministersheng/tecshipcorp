/**
 * Character-by-character typing effect (optional classes: .typing-effect, .typing-effect-2, .typing-effect-small).
 * .typing-effect-once runs once on load (no loop) — use for short headlines.
 * Respects prefers-reduced-motion — full text stays static when reduced motion is requested.
 */
(function () {
  var selectors = [".typing-effect", ".typing-effect-2", ".typing-effect-small"];

  function prefersReducedMotion() {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }

  function applyTypingEffectOnce(el) {
    if (!el || el.getAttribute("data-typing-init") === "true") return;
    el.setAttribute("data-typing-init", "true");

    var originalText = el.textContent.trim();
    if (!originalText) return;

    if (prefersReducedMotion()) {
      el.textContent = originalText;
      return;
    }

    var charIndex = 0;
    var typingSpeed = 38;

    el.textContent = "";

    function type() {
      if (charIndex < originalText.length) {
        el.textContent += originalText.charAt(charIndex);
        charIndex += 1;
        setTimeout(type, typingSpeed);
      }
    }

    type();
  }

  function applyTypingEffect(el) {
    if (!el || el.getAttribute("data-typing-init") === "true") return;
    el.setAttribute("data-typing-init", "true");

    var originalText = el.textContent.trim();
    if (!originalText) return;

    if (prefersReducedMotion()) {
      el.textContent = originalText;
      return;
    }

    var charIndex = 0;
    var typingSpeed = 25;
    var pauseAfterMs = 4000;

    function type() {
      if (charIndex < originalText.length) {
        el.textContent += originalText.charAt(charIndex);
        charIndex += 1;
        setTimeout(type, typingSpeed);
      } else {
        setTimeout(function () {
          el.textContent = "";
          charIndex = 0;
          type();
        }, pauseAfterMs);
      }
    }

    el.textContent = "";
    type();
  }

  function init() {
    document.querySelectorAll(".typing-effect-once").forEach(applyTypingEffectOnce);
    selectors.forEach(function (sel) {
      document.querySelectorAll(sel).forEach(applyTypingEffect);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
