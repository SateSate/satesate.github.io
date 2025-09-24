document.addEventListener('DOMContentLoaded', function () {
  const $team = $('.team-slider');

  $team.on('init', function () {
    setTimeout(() => $team.slick('setPosition'), 0);

    setTimeout(() => {
      $('.team-slide').css('opacity', '1');
    }, 100);
  });

  $team.slick({
    infinite: true,
    speed: 800,
    autoplay: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0',
    arrows: true,
    prevArrow: $('.team-button-prev'),
    nextArrow: $('.team-button-next'),
    dots: false,
    focusOnSelect: true,
    swipeToSlide: true,
    variableWidth: false,
    edgeFriction: 0.5,
    touchThreshold: 10,
    cssEase: 'cubic-bezier(0.33, 1, 0.68, 1)',
    waitForAnimate: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          centerMode: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          centerMode: true,
        },
      },
    ],
  });

  $('.testimonial-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 1000,
    infinite: true,
    arrows: true,
    prevArrow: $('.legal-slider-prev'),
    nextArrow: $('.legal-slider-next'),
    pauseOnHover: false,
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const hamburgerMenu = document.querySelector('.hamburger-menu');
  const navWrapper = document.querySelector('.nav-wrapper');
  const body = document.body;

  const menuOverlay = document.createElement('div');
  menuOverlay.classList.add('menu-overlay');
  body.appendChild(menuOverlay);

  hamburgerMenu.addEventListener('click', function () {
    hamburgerMenu.classList.toggle('active');
    navWrapper.classList.toggle('active');
    menuOverlay.classList.toggle('active');
    body.classList.toggle('no-scroll');
  });

  menuOverlay.addEventListener('click', function () {
    hamburgerMenu.classList.remove('active');
    navWrapper.classList.remove('active');
    menuOverlay.classList.remove('active');
    body.classList.remove('no-scroll');
  });

  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach((link) => {
    link.addEventListener('click', function () {
      hamburgerMenu.classList.remove('active');
      navWrapper.classList.remove('active');
      menuOverlay.classList.remove('active');
      body.classList.remove('no-scroll');
    });
  });

  if (!document.getElementById('no-scroll-style')) {
    const style = document.createElement('style');
    style.id = 'no-scroll-style';
    style.textContent = 'body.no-scroll { overflow: hidden; }';
    document.head.appendChild(style);
  }
});
