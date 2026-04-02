/**
 * Topbar mobile drawer — vanilla JS
 */
(function () {
  var toggle = document.querySelector("[data-topbar-toggle]");
  var drawer = document.querySelector("[data-topbar-drawer]");
  var topbar = document.querySelector(".topbar");
  if (!toggle || !drawer) return;

  function syncTopbarOffset() {
    if (!topbar) return;
    document.documentElement.style.setProperty(
      "--topbar-offset",
      topbar.offsetHeight + "px"
    );
  }

  function setOpen(open) {
    if (open) syncTopbarOffset();
    drawer.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    document.body.classList.toggle("topbar-open", open);
  }

  syncTopbarOffset();

  toggle.addEventListener("click", function () {
    setOpen(!drawer.classList.contains("is-open"));
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && drawer.classList.contains("is-open")) {
      setOpen(false);
    }
  });

  drawer.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      setOpen(false);
    });
  });

  window.addEventListener("resize", function () {
    syncTopbarOffset();
    if (window.matchMedia("(min-width: 769px)").matches) {
      setOpen(false);
    }
  });

  window.addEventListener("orientationchange", syncTopbarOffset);
})();
