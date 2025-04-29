window.addEventListener('load', windowLoad);
const html = document.documentElement;

function windowLoad() {
  if (992 >= window.innerWidth) {
    document.addEventListener('click', documentActions);
  }
  html.classList.add('loaded');
  scrollActions();
  slidersInit();
}
function documentActions(e) {
  const targetElement = e.target;

  if (targetElement.closest('.icon-menu')) {
    html.classList.toggle('menu-open');
  }
  targetElement.closest('.menu__link') && html.classList.contains('menu-open')
    ? html.classList.remove('menu-open')
    : null;
}
function scrollActions() {
  window.addEventListener('scroll', scrollAction);

  function scrollAction() {
    // Робота з шапкою
    const header = document.querySelector('.header');
    header.classList.toggle('header--scroll', scrollY > 20);
  }
}
function slidersInit() {
  const sliderListFiveItems = new Swiper('.enjoy__swiper', {
    slidesPerGroup: 1,
    slidesPerView: 4,
    spaceBetween: 18,
    loop: true,
    autoHeight: true,
    breakpoints: {
      // when window width is >= 480px
      320: {
        spaceBetween: 18,
      },
      // when window width is >= 1200px
      1200: {
        slidesPerView: 4,
        spaceBetween: 17.333,
      },
    },
  });
}
