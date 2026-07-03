/* Bitcoin Whitepaper · Bilingual Edition */
(function () {
  "use strict";

  var root = document.documentElement;
  var body = document.body;

  /* ————— theme ————— */
  var stored = null;
  try { stored = localStorage.getItem("btc-theme"); } catch (e) {}
  var prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  setTheme(stored || (prefersDark ? "dark" : "light"), false);

  document.getElementById("theme-toggle").addEventListener("click", function () {
    var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    setTheme(next, true);
  });

  function setTheme(mode, persist) {
    root.setAttribute("data-theme", mode);
    if (persist) {
      try { localStorage.setItem("btc-theme", mode); } catch (e) {}
    }
  }

  /* ————— scroll progress + topbar ————— */
  var progress = document.getElementById("progress");
  var topbar = document.getElementById("topbar");
  var ticking = false;

  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function () {
      var doc = document.documentElement;
      var max = doc.scrollHeight - doc.clientHeight;
      var y = window.scrollY || doc.scrollTop;
      progress.style.width = (max > 0 ? (y / max) * 100 : 0) + "%";
      topbar.classList.toggle("scrolled", y > window.innerHeight * 0.55);
      ticking = false;
    });
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ————— TOC active highlight ————— */
  var tocLinks = document.querySelectorAll("#toc-list a");
  var map = {};
  tocLinks.forEach(function (a) {
    var id = a.getAttribute("href").slice(1);
    map[id] = a.parentElement;
  });

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          tocLinks.forEach(function (a) { a.parentElement.classList.remove("active"); });
          var li = map[entry.target.id];
          if (li) li.classList.add("active");
        }
      });
    },
    { rootMargin: "-15% 0px -70% 0px" }
  );
  document.querySelectorAll(".section[id]").forEach(function (sec) { observer.observe(sec); });

  /* ————— mobile language switch ————— */
  document.querySelectorAll(".lang-switch button").forEach(function (btn) {
    btn.addEventListener("click", function () {
      document.querySelectorAll(".lang-switch button").forEach(function (b) {
        b.classList.remove("active");
      });
      btn.classList.add("active");
      var mode = btn.getAttribute("data-lang");
      if (mode === "both") {
        body.removeAttribute("data-lang");
      } else {
        body.setAttribute("data-lang", mode);
      }
    });
  });
})();
