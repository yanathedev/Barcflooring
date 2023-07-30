window.addEventListener("DOMContentLoaded", function () {

  const timeline = document.querySelector(".timeline");
  const btns = timeline.querySelectorAll(".btn");
  const slider = timeline.querySelectorAll(".slider-item");

  btns.forEach(function (btn) {
    btn.addEventListener("click", function(){
      const active = btn;
      const datatab = active.getAttribute("data-tab");
      const selectData = timeline.querySelector(datatab);

      btns.forEach(function (btn){
        btn.classList.remove("btn--active");
      });

      slider.forEach(function(item){
        item.classList.remove("item--active");
      });

      active.classList.add("btn--active");
      selectData.classList.add("item--active");

      console.log(selectData);
    });
  });
  btns[0].click();

});






  
