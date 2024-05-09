// Lenis smooth scroll
const lenis = new Lenis();

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// Animations
gsap.registerPlugin(ScrollTrigger);

// horizontal scroll
const sections = gsap.utils.toArray(".slide");
gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".horizontal-scroll",
    pin: true,
    scrub: 1,
    end: "+=" + window.innerWidth * sections.length,
    start: "top top",
    onEnter: () =>
      gsap.to(".horizontal-scroll", {
        backgroundColor: "#f58220",
        duration: 1,
      }),
    onLeave: () =>
      gsap.to(".horizontal-scroll", {
        backgroundColor: "#d8d8d8",
        duration: 1,
      }),
    onLeaveBack: () =>
      gsap.to(".horizontal-scroll", {
        backgroundColor: "#d8d8d8",
        duration: 1,
      }),
    onEnterBack: () =>
      gsap.to(".horizontal-scroll", {
        backgroundColor: "#f58220",
        duration: 1,
      }),
  },
});

// animate big text
gsap.to(".big-text", {
  xPercent: -10 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".horizontal-scroll",
    scrub: 1,
    end: "+=" + window.innerWidth * sections.length,
    start: "top top",
  },
});

// animate main text
const splitTypes = document.querySelectorAll(".with-animation");

splitTypes.forEach((char, i) => {
  const text = new SplitType(char, { types: "chars" });
  gsap.from(text.chars, {
    scrollTrigger: {
      trigger: char,
      start: "top 80%",
      end: "top 20%",
      scrub: true,
      markers: false,
    },
    opacity: 0.2,
    stagger: 0.1,
  });
});

// Slider
const swiper = new Swiper(".swiper", {
  loop: true,
  slidesPerView: 1.5,
  autoplay: {
    delay: 3000,
  },
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
  breakpoints: {
    1519: {
      slidesPerView: 2.5,
    },
  },
});

const wrapper = document.querySelector(".slider-container");
const container = document.querySelector(".container");
const desktopBreakpoint = 1519;

function updateWrapperPadding() {
  const viewportWidth = window.innerWidth;
  const containerWidth = container.offsetWidth;
  const paddingLeft = (viewportWidth - containerWidth) / 2;

  if (viewportWidth > desktopBreakpoint) {
    wrapper.style.paddingLeft = `${paddingLeft}px`;
  } else {
    wrapper.style.paddingLeft = "20px";
  }

  swiper.update();
}

window.addEventListener("load", updateWrapperPadding);
window.addEventListener("resize", updateWrapperPadding);
// End Slider

const navToggle = document.querySelector(".toggle");
const navLinks = document.querySelector(".nav-links");
const navbar = document.querySelector(".navbar");

navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  navbar.classList.toggle("active");
});
