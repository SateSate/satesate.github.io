document.addEventListener('DOMContentLoaded', function () {
  if (typeof $ === 'undefined' || typeof $.fn.slick !== 'function') return;

  const $team = $('.team-slider');
  const $testimonial = $('.testimonial-slider');

  // Maintain a stable custom class on the centered slide AND its clones,
  // so the size/styling stays correct even during Slick's silent
  // track-repositioning at infinite-mode wrap.
  function syncCenterMarker(slick, targetIndex) {
    const $slider = slick.$slider;
    const slideCount = slick.slideCount;
    $slider
      .find('.slick-slide')
      .removeClass('is-current-center is-prev-center is-next-center');

    const normalize = (i) => ((i % slideCount) + slideCount) % slideCount;
    const target = targetIndex !== undefined
      ? normalize(targetIndex)
      : normalize(slick.slickCurrentSlide());

    // Tag every slide whose normalized index matches the target as the
    // current center (covers the original and all of its clones, so the
    // size/styling is stable through slick's silent track wrap).
    $slider.find('.slick-slide').each(function () {
      const idx = parseInt($(this).attr('data-slick-index'), 10);
      if (!isNaN(idx) && normalize(idx) === target) {
        $(this).addClass('is-current-center');
      }
    });

    // Tag the visually adjacent slides via DOM siblings of the active one.
    // We pick the .slick-active match so we land on the slide that's actually
    // being rendered at the visible center, not an off-screen clone.
    const $active = $slider
      .find('.slick-slide.is-current-center.slick-active')
      .first();
    const $center = $active.length
      ? $active
      : $slider.find('.slick-slide.is-current-center').first();
    if ($center.length) {
      $center.prevAll('.slick-slide').first().addClass('is-prev-center');
      $center.nextAll('.slick-slide').first().addClass('is-next-center');
    }
  }

  if ($team.length) {
    $team.on('init', function (event, slick) {
      setTimeout(() => $team.slick('setPosition'), 0);
      setTimeout(() => $('.team-slide').css('opacity', '1'), 100);
      syncCenterMarker(slick);
    });

    $team.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
      syncCenterMarker(slick, nextSlide);
    });

    $team.on('afterChange', function (event, slick) {
      syncCenterMarker(slick);
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
    cssEase: 'cubic-bezier(0.22, 1, 0.36, 1)',
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
  }

  if ($testimonial.length) {
    $testimonial.slick({
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
  }
});

document.addEventListener('DOMContentLoaded', function () {
  const hamburgerMenu = document.querySelector('.hamburger-menu');
  const navWrapper = document.querySelector('.nav-wrapper');
  const body = document.body;

  if (!hamburgerMenu || !navWrapper) return;

  // A11y: announce the hamburger as an interactive control.
  hamburgerMenu.setAttribute('role', 'button');
  hamburgerMenu.setAttribute('tabindex', '0');
  hamburgerMenu.setAttribute('aria-label', 'Toggle navigation menu');
  hamburgerMenu.setAttribute('aria-expanded', 'false');
  hamburgerMenu.setAttribute('aria-controls', 'site-nav');
  navWrapper.id = navWrapper.id || 'site-nav';

  const menuOverlay = document.createElement('div');
  menuOverlay.classList.add('menu-overlay');
  body.appendChild(menuOverlay);

  function openMenu() {
    hamburgerMenu.classList.add('active');
    navWrapper.classList.add('active');
    menuOverlay.classList.add('active');
    body.classList.add('no-scroll');
    hamburgerMenu.setAttribute('aria-expanded', 'true');
  }

  function closeMenu() {
    hamburgerMenu.classList.remove('active');
    navWrapper.classList.remove('active');
    menuOverlay.classList.remove('active');
    body.classList.remove('no-scroll');
    hamburgerMenu.setAttribute('aria-expanded', 'false');
  }

  function toggleMenu() {
    if (hamburgerMenu.classList.contains('active')) {
      closeMenu();
    } else {
      openMenu();
    }
  }

  hamburgerMenu.addEventListener('click', toggleMenu);

  hamburgerMenu.addEventListener('keydown', function (event) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggleMenu();
    }
  });

  menuOverlay.addEventListener('click', closeMenu);

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && hamburgerMenu.classList.contains('active')) {
      closeMenu();
      hamburgerMenu.focus();
    }
  });

  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  if (!document.getElementById('no-scroll-style')) {
    const style = document.createElement('style');
    style.id = 'no-scroll-style';
    style.textContent = 'body.no-scroll { overflow: hidden; }';
    document.head.appendChild(style);
  }
});
