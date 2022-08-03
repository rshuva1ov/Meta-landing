// swiper1
var swiper = new Swiper(".swiper-container.one", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    initialSlide: 1,
    coverflowEffect: {
        rotate: 10,
        stretch: 0,
        depth: 650,
        modifier: 1,
        slideShadows: true
    },
});

// swiper2
var swiper = new Swiper(".swiper-container.two", {
    slidesPerView: '1',
    centeredSlides: true,
    speed: 40000,
    autoplay: {
        enabled: true,
        delay: 0,
    },
    allowTouchMove: false,
});

// swiper3
var swiper = new Swiper(".swiper-container.three", {
  slidesPerView: '2',
  centeredSlides: true,
  loop: true,
  speed: 40000,
  autoplay: {
      enabled: true,
      delay: 0,
  },
  allowTouchMove: false,
});

// swiper4
var swiper = new Swiper(".swiper-container.four", {
  slidesPerView: '3',
  centeredSlides: true,
  loop: true,
  speed: 40000,
  autoplay: {
      enabled: true,
      delay: 0,
  },
  allowTouchMove: false,
});

//tabs
window.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.story__list-btn').forEach(function (tabsBtn) {
      tabsBtn.addEventListener('click', function (event) {
        const path = event.currentTarget.dataset.path
  
        document.querySelectorAll('.tab-content').forEach(function (tabContent) {
          tabContent.classList.remove('tab-content-active')
        })
        document.querySelector(`[data-target="${path}"]`).classList.add('tab-content-active')
      })
    })

    document.querySelectorAll('.story__list-btn').forEach(function (colorBtn) {
      colorBtn.addEventListener('click', function (event) {
        const path = event.currentTarget.dataset.path
  
        document.querySelectorAll('.story__list-btn').forEach(function (tabContent) {
          tabContent.classList.remove('story__list-btn-active')
        })
        document.querySelector(`[data-path="${path}"]`).classList.add('story__list-btn-active')
      })
    })
  })