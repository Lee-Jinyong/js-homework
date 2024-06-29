const data = [
  {
    id: 1,
    src: "sun.svg",
    alt: "태양",
  },
  {
    id: 2,
    src: "mercury.svg",
    alt: "수성",
  },
  {
    id: 3,
    src: "venus.svg",
    alt: "금성",
  },
  {
    id: 4,
    src: "earth.svg",
    alt: "지구",
  },
  {
    id: 5,
    src: "mars.svg",
    alt: "화성",
  },
  {
    id: 6,
    src: "jupiter.svg",
    alt: "목성",
  },
  {
    id: 7,
    src: "saturn.svg",
    alt: "토성",
  },
  {
    id: 8,
    src: "uranus.svg",
    alt: "천왕성",
  },
  {
    id: 9,
    src: "neptune.svg",
    alt: "해왕성",
  },
];

new Swiper(".solar-system-swiper", {
  speed: 1000,
  parallax: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    bulletClass: 'bullet',
    bulletActiveClass: 'is-active',
    renderBullet: function(index, className) {
      return `
        <span class="${className}">
          <img src="./assets/${data[index].src}" alt="${data[index].alt}" />
        </span>
      `
    }
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});