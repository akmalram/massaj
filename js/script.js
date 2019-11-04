window.addEventListener('DOMContentLoaded', () => {

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


  // Form submit animation

  const formSubmitAnimation = (animationDuration) => {
    let btn = document.querySelector('.contact-form .form-submit');

    document.querySelector('.contact-form').addEventListener('submit', (e) => {
      e.preventDefault();

      btn.style.cssText = `animation-duration: ${animationDuration}s`;
      btn.classList.add('animate');
      setTimeout( () => {
        btn.classList.remove('animate');
      }, animationDuration * 1000);
    })
  }

  formSubmitAnimation(3);
});