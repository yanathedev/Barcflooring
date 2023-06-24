window.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".timeline").forEach(function (e) {
    let btn = e.querySelectorAll(".btn"),
      i = e.querySelectorAll(".slider-item");

    btn.forEach(function (click) {
      click.addEventListener("click", function () {
        var active = click,
          datatab = active.getAttribute("data-tab"),
          selectData = e.querySelector(datatab);

        active.classList.contains("btn--active") ||
          (btn.forEach(function (e) {
            e.classList.remove("btn--active");
          }),
          i.forEach(function (e) {
            e.classList.remove("item--active");
          }),
          active.classList.add("btn--active"),
          selectData.classList.add("item--active")),
          console.log(selectData);
      });
    }),
      e.querySelector(".btn").click();
  });
});
