document.addEventListener("DOMContentLoaded", function () {
/* 메인비주얼 스와이퍼 */
  let main = new Swiper(".main_visual", {
    spaceBetween: 0,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    loop: true,
    simulateTouch: true,
/*     pagination: {
      el: ".main-pagination",
      clickable: true,
    }, */
  });

  let swiper = new Swiper(".mon_skincare", {
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 30,
    centeredSlides: false,
    initialSlide: 0,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });

  function applySimplyScroll(selector, speed = 9, direction = 'forwards') {
    $(selector).simplyScroll({
      speed,
      direction,
      pauseOnHover: false,
      pauseOnTouch: false,
    })
  }

  applySimplyScroll('.interaction .txtAni');

  let store_top = new Swiper('.store_top', {
    loop: true,
    autoplay: {
      delay: 1000,
    },
    slidesPerView: 5,
    spaceBetween: 36,
    speed: 2000, // 전환 속도 (ms 단위, 부드럽게 조절)
  });

  let store_bottom = new Swiper('.store_bottom', {
    loop: true,
    autoplay: {
      delay: 1000,
      reverseDirection: true, // ★ 오른쪽 → 왼쪽
    },
    speed: 2000, // 전환 속도 (ms 단위, 부드럽게 조절)
    slidesPerView: 5,
    spaceBetween: 36,
  });
});




