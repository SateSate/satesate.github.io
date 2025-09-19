document.addEventListener('DOMContentLoaded', function () {
  const testimonialSwiper = new Swiper('.testimonialSwiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    },
    speed: 1000,
  });

  const teamSwiper = new Swiper('.teamSwiper', {
    slidesPerView: 3,
    centeredSlides: true,
    loop: true,
    initialSlide: 3,
    navigation: {
      nextEl: '.team-button-next',
      prevEl: '.team-button-prev',
    },
    effect: 'coverflow',
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 0,
      slideShadows: false,
    },
    breakpoints: {
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      676: {
        slidesPerView: 1,
        spaceBetween: 20,
        centeredSlides: false,
        initialSlide: 1,
        effect: 'slide',
      },
    },
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
