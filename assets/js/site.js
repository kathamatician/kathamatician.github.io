(function () {
  var KEY = "theme";
  var root = document.documentElement;
  var prefersDark = window.matchMedia("(prefers-color-scheme: dark)");

  function systemTheme() {
    return prefersDark.matches ? "dark" : "light";
  }

  function current() {
    return root.getAttribute("data-theme") || systemTheme();
  }

  function syncToggle() {
    var btn = document.querySelector("[data-theme-toggle]");
    if (!btn) return;
    var dark = current() === "dark";
    btn.setAttribute("aria-pressed", dark ? "true" : "false");
    btn.textContent = dark ? "Day" : "Night";
    btn.setAttribute(
      "aria-label",
      dark ? "Switch to day (light) theme" : "Switch to evening (dark) theme"
    );
  }

  function apply(theme, persist) {
    if (theme === "light" || theme === "dark") {
      root.setAttribute("data-theme", theme);
      if (persist) {
        try {
          localStorage.setItem(KEY, theme);
        } catch (e) {
          /* ignore */
        }
      }
    }
    syncToggle();
  }

  document.addEventListener("DOMContentLoaded", function () {
    syncToggle();
    var btn = document.querySelector("[data-theme-toggle]");
    if (btn) {
      btn.addEventListener("click", function () {
        apply(current() === "dark" ? "light" : "dark", true);
      });
    }

    document.querySelectorAll(".portrait-photo").forEach(function (img) {
      function fallback() {
        var slot = document.createElement("div");
        slot.className = "portrait-slot";
        slot.setAttribute("role", "img");
        slot.setAttribute("aria-label", "Portrait reserved; photograph to be added");
        img.replaceWith(slot);
      }
      img.addEventListener("error", fallback);
      if (img.complete && img.naturalWidth === 0) fallback();
    });
  });

  prefersDark.addEventListener("change", function () {
    try {
      if (!localStorage.getItem(KEY)) {
        root.removeAttribute("data-theme");
        syncToggle();
      }
    } catch (e) {
      root.removeAttribute("data-theme");
      syncToggle();
    }
  });
})();
