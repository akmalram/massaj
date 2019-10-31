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
});