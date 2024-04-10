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
// End Animations

// Slider
const swiper = new Swiper(".swiper", {
  loop: true,
  slidesPerView: 2.5,
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
});

const wrapper = document.querySelector(".slider-container");
const container = document.querySelector(".container");

function updateWrapperPadding() {
  const viewportWidth = window.innerWidth;
  const containerWidth = container.offsetWidth;
  const paddingLeft = (viewportWidth - containerWidth) / 2;

  wrapper.style.paddingLeft = `${paddingLeft}px`;

  swiper.update();
}

window.addEventListener("load", updateWrapperPadding);
window.addEventListener("resize", updateWrapperPadding);
// End Slider
