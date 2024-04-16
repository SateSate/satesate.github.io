document.addEventListener("DOMContentLoaded", (event) => {
  const sections = document.querySelectorAll(".section");

  sections.forEach((section) => {
    const swiperContainer = section.querySelector(".swiper");
    const nextEl = section.querySelector(".swiper-button-next");
    const prevEl = section.querySelector(".swiper-button-prev");

    new Swiper(swiperContainer, {
      loop: true,
      slidesPerView: 3,
      spaceBetween: 8,
      navigation: {
        nextEl: nextEl,
        prevEl: prevEl,
      },
    });
  });
});
