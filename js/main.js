function getSlideCount(selector) {
  const container = document.querySelector(selector);
  if (!container) return 0;
  return container.querySelectorAll('.swiper-slide').length;
}

function shouldLoop(selector, minSlides = 5) {
  return getSlideCount(selector) >= minSlides + 1;
}
function applySimplyScroll(selector, speed = 9, direction = 'forwards') {
  $(selector).simplyScroll({
    speed,
    direction,
    pauseOnHover: false,
    pauseOnTouch: false,
  })
}
document.addEventListener("DOMContentLoaded", function () {
  // DOM 준비 후 한 프레임 뒤 실행
  requestAnimationFrame(() => {
    /* 메인비주얼 스와이퍼 */
    new Swiper(".main_visual", {
      spaceBetween: 0,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      loop: shouldLoop('.main_visual', 1),
      simulateTouch: true,
    });

    new Swiper(".mon_skincare", {
      loop: shouldLoop('.mon_skincare', 2),
      slidesPerView: 'auto',
      spaceBetween: 30,
      centeredSlides: false,
      initialSlide: 0,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    });

    new Swiper('.store_top', {
      loop: shouldLoop('.store_top', 5),
      autoplay: {
        delay: 1000,
      },
      slidesPerView: 5,
      spaceBetween: 36,
      speed: 2000,
    });

    new Swiper('.store_bottom', {
      loop: shouldLoop('.store_bottom', 5),
      autoplay: {
        delay: 1000,
        reverseDirection: true,
      },
      speed: 2000,
      slidesPerView: 5,
      spaceBetween: 36,
    });
  });

  // 심플리 스크롤 적용
  applySimplyScroll('.interaction .txtAniBox');
});
