// burger menu
let body = document.querySelector('body');

function fadePopup(el) {
  el.classList.toggle('popup_fade')
}
function showPopup(popup) {
  popup.classList.add('popup_active');
  setTimeout(fadePopup, 2, popup);
  body.classList.add('no-scroll');
}
function hidePopup(popup) {
  fadePopup(popup);
  popup.classList.remove('popup_active');
  body.classList.remove('no-scroll');
}


let burgerBtn = document.querySelector('.burger-menu');
let headerCloseBtn = document.querySelector('.header-close');
let headerNav = document.querySelector('.header-nav');

burgerBtn.onclick = function() {
  showPopup(headerNav);
  headerNav.onclick = function() {
    hidePopup(headerNav);
  }
}

// projects swiper
let projectsSwiper = new Swiper('.projects-swiper-container', {
  loop: true,
  centeredSlides: true,
  breakpoints: {
    300: {
      slidesPerView: 1,
    },
    780: {
      slidesPerView: 2,
    },
    1273: {
      slidesPerView: 3,
    }
  }, 
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})

// reviews swiper

let reviewsSwiper = new Swiper('.reviews-swiper-container', {
  spaceBetween: 30,
  effect: 'fade',
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  
});

// smooth scroll

const anchors = document.querySelectorAll('a[href*="#"]')
for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const sectionId = anchor.getAttribute('href').substr(1);
        if (sectionId) {
            document.getElementById(sectionId).scrollIntoView( {
                behavior: 'smooth',
                block: 'start'
            });
        }
  });
}


// accordion

function accordion() {
  let accordionList = document.querySelector('.accordion-list');
  let accordionItems = [...accordionList.querySelectorAll('.accordion-list__item')];
  for(item of accordionItems) {
    let servicesList = item.querySelector('.services-list');
    let servicesListMobile = item.querySelector('.services-list_mobile');
    let itemBtn = item.querySelector('.accordion-list-btn');
    if(item.classList.contains('accordion-list__item_active')) {
      servicesList.style.maxHeight = servicesList.scrollHeight + "px";
      servicesListMobile.style.maxHeight = servicesListMobile.scrollHeight + "px";
      itemBtn.style.maxHeight = itemBtn.scrollHeight + "px";
    } else {
      servicesList.style.maxHeight = null;
      servicesListMobile.style.maxHeight = null;
      itemBtn.style.maxHeight = null;
    }
  }
  for(let i = 0; i < accordionItems.length; i++) {
    accordionItems[i].onclick = function() {
      accordionItems.forEach(el => {
        el.classList.remove('accordion-list__item_active');
      })
      this.classList.add('accordion-list__item_active');
      for(item of accordionItems) {
        let servicesList = item.querySelector('.services-list');
        let servicesListMobile = item.querySelector('.services-list_mobile');
        let itemBtn = item.querySelector('.accordion-list-btn');
        if(item.classList.contains('accordion-list__item_active')) {
          servicesList.style.maxHeight = servicesList.scrollHeight + "px";
          servicesListMobile.style.maxHeight = servicesListMobile.scrollHeight + "px";
          itemBtn.style.maxHeight = itemBtn.scrollHeight + "px";
        } else {
          servicesList.style.maxHeight = null;
          servicesListMobile.style.maxHeight = null;
          itemBtn.style.maxHeight = null;
        }
      }
    }
  }
}
accordion();


// form popup

let formPopup = document.querySelector('.form-popup');
let formPopupTitle = formPopup.querySelector('.form-popup__title');
let formPopupLinks = [...document.querySelectorAll('.form-popup-link')];
let formPopupcCloseBtn = formPopup.querySelector('.form-popup-close');

formPopupLinks.forEach(el => {
  el.onclick = function(event) {
    event.preventDefault();
    let ItemTitle = el.dataset.title;
    formPopupTitle.textContent = ItemTitle;
    showPopup(formPopup);
    window.onclick = function(event) {
      if(event.target == formPopup) {
        hidePopup(formPopup);
      }
    }
  }
})
formPopupcCloseBtn.onclick = function() {
  hidePopup(formPopup);
}

// video popup

let videoPopup = document.querySelector('.video-popup');
let videoPopupLinks = document.querySelectorAll('.reviews-card__link');
let videoPopupCloseBtn = videoPopup.querySelector('.video-popup-close');
let videoPopupIframe = videoPopup.querySelector('.responsive-iframe');

videoPopupLinks.forEach(el => {
  el.onclick = function(event) {
    event.preventDefault();
    let ItemSrc = el.dataset.src;
    videoPopupIframe.setAttribute('src', ItemSrc);
    showPopup(videoPopup);
    window.onclick = function(event) {
      if(event.target == videoPopup) {
        hidePopup(videoPopup);
      }
    }
  }
})
videoPopupCloseBtn.onclick = function() {
  hidePopup(videoPopup);
}