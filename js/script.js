window.addEventListener('load', () => {

    var swiper = new Swiper('.swiper-container', {
        autoHeight: true, //enable auto height
        spaceBetween: 20,
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });


      // Typed initializing
      $(document).ready(function () {
          $(".typed").typed({
              strings: ['Профессия массажиста<br>с нуля – всего за<br>1 месяц!']
          });
      });
});