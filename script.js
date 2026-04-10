(function () {
  var header = document.querySelector(".header");
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");
  if (!header || !toggle || !nav) return;

  function setOpen(open) {
    header.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  }

  toggle.addEventListener("click", function () {
    setOpen(!header.classList.contains("is-open"));
  });

  nav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      setOpen(false);
    });
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") setOpen(false);
  });

  var form = document.querySelector(".form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Спасибо! Форма не отправляет данные — для связи напишите в WhatsApp +7 (931) 521-39-55 или позвоните по этому номеру.");
    });
  }
})();
