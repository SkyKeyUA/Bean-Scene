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
    const header = document.querySelector('.header');
    header.classList.toggle('header--scroll', scrollY > 20);
  }
  scrollAction();
}
function slidersInit() {
  const sliderListFourItems = new Swiper('.enjoy__swiper', {
    slidesPerGroup: 1,
    slidesPerView: 1,
    spaceBetween: 17.333,
    loop: true,
    autoHeight: true,
    breakpoints: {
      479: {
        slidesPerView: 2,
      },
      600: {
        slidesPerView: 3,
      },
      900: {
        slidesPerView: 4,
      },
    },
  });
  const sliderListFeedback = new Swiper('.feedback__swiper', {
    autoHeight: true,
    spaceBetween: 20,
    navigation: {
      nextEl: '.feedback__swiper-button-next',
      prevEl: '.feedback__swiper-button-prev',
    },
  });
}
