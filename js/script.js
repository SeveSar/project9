document.addEventListener("DOMContentLoaded", () => {

   // check mobile screen then add class
   if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
    document.body.classList.remove('isPc');
  } else  {
    if (!document.body.classList.contains('compareBody')) {
      document.body.classList.add('isPc');
    }
  }
  // /end check mobile screen
     // main -slider
 (function () {
  const mainSliders = document.querySelectorAll('.main-slider .swiper-container');
  if (mainSliders.length) {
    mainSliders.forEach(el => {
      new Swiper(el, {
        spaceBetween: 30,
        autoplay: {
          delay: 5000,
        },
        effect: 'fade',
        fadeEffect: {
          crossFade: true
        },
        loop: true,
        navigation: {
          nextEl: el.closest('.main-slider__block').querySelector('.swiper-button-next'),
          prevEl: el.closest('.main-slider__block').querySelector('.swiper-button-prev'),
        },
        pagination: {
          el: el.closest('.main-slider__block').querySelector(".swiper-pagination"),
          clickable: true,
        },
      })
    })
  }

  // .../end main-slider

  // productsSlider
  const productsSliders = document.querySelectorAll('.products-slider__container');
  if (productsSliders.length) {
    productsSliders.forEach(el => {
      new Swiper(el, {
        loop: true,
        // spaceBetween: 30,
        navigation: {
          nextEl: el.closest('.products-slider__inner').querySelector('.products-slider__button-next') ,
          prevEl: el.closest('.products-slider__inner').querySelector('.products-slider__button-prev'),
        },
        breakpoints: {
          320: {
            slidesPerView: 1.8,
            spaceBetween: 17
          },
          451: {
            slidesPerView: 2,
            spaceBetween: 15
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 2
          },
          1215: {
            slidesPerView: 4,
          },
          1350: {
            slidesPerView: 5,
            spaceBetween: 7
          },
          // when window width is >= 640px
          1500: {
            slidesPerView: 6,
            spaceBetween: 1
          }
        }
      })
    })
  }
  //.../end products-slider

  // brands-slider
  const brandsSliderContainer = document.querySelector('.brands-slider__container')
  if (brandsSliderContainer) {
    const brandsSlider = new Swiper(brandsSliderContainer, {
      loop: true,
      // spaceBetween: 30,
      navigation: {
        nextEl: '.brands-slider__button-next',
        prevEl: '.brands-slider__button-prev',
      },
      breakpoints: {
        320: {
          slidesPerView: 1.7,
          spaceBetween: 3
        },
        451: {
          slidesPerView: 2,
          spaceBetween: 7
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 2
        },
        1215: {
          slidesPerView: 4,
        },
        1350: {
          slidesPerView: 5,
          spaceBetween: 7
        },
        1500: {
          slidesPerView: 6,
          spaceBetween: 7
        }
      }
    });
  }
  // /end brands-slider

  // slider-banner
  const bannerSliderContainer = document.querySelector('.slider-banner__container')
  if (bannerSliderContainer) {
    const bannerSlider = new Swiper(bannerSliderContainer, {
      loop: true,
      autoplay: {
        delay: 5000,
      },
      effect: 'fade',
        fadeEffect: {
          crossFade: true
      },
      pagination: {
        el: ".slider-banner__pagination",
        clickable: true,
      },
    });
  }

  // newsSlider
  const slider = document.querySelector('.news__container');
  if (slider) {
    let newsSlider;
    function mobileSlider() {
      if (document.documentElement.clientWidth <= 991 && slider.dataset.mobile === 'false') {
        newsSlider = new Swiper(slider, {
          slidesPerView: 2,
          loop: true,
          // preloadImages: false,
          spaceBetween: 15,
          breakpoints: {
            320: {
              slidesPerView: 1.8,
              spaceBetween: 9,
            },
            451: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 17,
            },
          },
          navigation: {
            nextEl: '.news__button-next',
            prevEl: '.news__button-prev',
          }
        })
        slider.dataset.mobile = 'true'
      } else if (document.documentElement.clientWidth > 991) {
        slider.dataset.mobile = 'false'
        if (slider.classList.contains('swiper-container-initialized')) {
          newsSlider.destroy()
        }
      }
    }
    mobileSlider()
    window.addEventListener('resize', mobileSlider);
  }

  // /end newsSlider



 })()
;
  // menu-catalog
  const btnCatalog = document.querySelector('[btn-catalog]');
  console.log(btnCatalog)
  const overlayCatalog = document.querySelector('.catalog-overlay')
  const catalogItem = document.querySelector('.catalog-menu');
  const headerNavItem = document.querySelector('.header__nav');
  function showCatalog() {
    catalogItem.classList.toggle('catalog-menu--active');
    btnCatalog.classList.toggle('active');
    headerNavItem.classList.toggle('hide');
    toggleBodyClass()
    overlayCatalog.classList.toggle('active');
  }
  function toggleBodyClass() {
    document.body.classList.toggle('no-scroll');
  }
  btnCatalog.addEventListener('click', showCatalog);
  overlayCatalog.addEventListener('click', showCatalog)
  // /end menu-catalog


  // fixed header
  const headerBottom = document.querySelector('.header__bottom');
  const header = document.querySelector('.header');
  let headerBottomH = headerBottom.scrollHeight;
  let scrollPosition = window.scrollY;
  fixedHeader(headerBottomH, scrollPosition)
  window.addEventListener('resize', (e) => {
    scrollPosition = window.scrollY;
    headerBottomH = headerBottom.scrollHeight;
    fixedHeader(headerBottomH, scrollPosition)
  })
  window.addEventListener('scroll', (e) => {
    scrollPosition = window.scrollY;
    headerBottomH = headerBottom.scrollHeight;
    fixedHeader(headerBottomH, scrollPosition)

  })
  function fixedHeader(headerBottomH, scrollPosition) {
    if (scrollPosition >= headerBottomH) {
      headerBottom.classList.add('fixed')
      header.classList.add('change-pt');
    } else {
      headerBottom.classList.remove('fixed')
      header.classList.remove('change-pt');
    }
  }
  // /end fiexd header

  // catalog-menu__nav-item
  const cataLogMenuBody = document.querySelectorAll('.catalog-menu__body');
  const catalogMenuNavLinks = document.querySelectorAll('.catalog-menu__nav-link');
  catalogItem.addEventListener('click',function(e) {
    const target = e.target;
    if (target.classList.contains('catalog-menu__nav-link')) {
      e.preventDefault()
      const activeItemLink = catalogItem.querySelector('.catalog-menu__nav-link.active');
      activeItemLink.classList.remove('active');
      target.classList.add('active')
      for (let i = 0; i < catalogMenuNavLinks.length; i++) {
        if (target === catalogMenuNavLinks[i]) {
          showCatalogBody(i)
        }
      }
    }
  })
  function showCatalogBody(i) {
    for (let i = 0; i < cataLogMenuBody.length; i++) {
      cataLogMenuBody[i].classList.remove('catalog-menu__body--show')
    }
    cataLogMenuBody[i].classList.add('catalog-menu__body--show')
  }
  // /end catalog-menu__nav-item

  // mobile-menu
  const mobileMenu = document.querySelector('.mobile-menu');
  const burgerBtn = document.querySelector('.burger');
  burgerBtn.addEventListener('click', (e) => {
    mobileMenu.classList.toggle('show');
    burgerBtn.classList.toggle('active');
    toggleBodyClass()
  })
  function animationHeight(bodyContent, button, isVisible = false) {
    if (bodyContent.style.maxHeight) {
      if (isVisible && bodyContent.classList.contains('visible')) {
        bodyContent.style.overflow = 'hidden'
      }
      bodyContent.style.maxHeight = null
      button.classList.remove('opened')
    } else {
      if (isVisible && bodyContent.classList.contains('visible')) {
        setTimeout(() => {
          bodyContent.style.overflow = 'visible'
        }, 100)
      }
      bodyContent.style.maxHeight = bodyContent.scrollHeight + "px";
      button.classList.add('opened')
    }
  }
  function openBodyHeight(bodyContent, button, isVisible = false) {
    if (bodyContent.style.maxHeight) {
      if (isVisible && bodyContent.classList.contains('visible')) {
        bodyContent.style.overflow = 'hidden'
      }
      bodyContent.style.maxHeight = null
      button.classList.remove('opened')
    } else {
      if (isVisible && bodyContent.classList.contains('visible')) {
        bodyContent.style.overflow = 'visible'
      }
      bodyContent.style.maxHeight = '100%';
      button.classList.add('opened')
    }
  }
  mobileMenu.addEventListener('click', function(e) {
    const target = e.target;
    const menuItem = target.closest('.mobile-menu__list-item');
    if (menuItem) {
      const menuCatalogBody = menuItem.querySelector('.mobile-menu__catalog-body');
      animationHeight(menuCatalogBody,menuItem, false)
    }
  })
    // /end mobile-menu

    // valid-form
  /*!
 * maska v1.4.5
 * (c) 2019-2021 Alexander Shabunevich
 * Released under the MIT License.
 */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).Maska={})}(this,(function(e){"use strict";function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var o={"#":{pattern:/[0-9]/},X:{pattern:/[0-9a-zA-Z]/},S:{pattern:/[a-zA-Z]/},A:{pattern:/[a-zA-Z]/,uppercase:!0},a:{pattern:/[a-zA-Z]/,lowercase:!0},"!":{escape:!0},"*":{repeat:!0}};function s(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:o,a=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];return u(t).length>1?l(t)(e,t,n,a):c(e,t,n,a)}function u(e){try{return JSON.parse(e)}catch(t){return[e]}}function l(e){var t=u(e).sort((function(e,t){return e.length-t.length}));return function(e,a,r){var i=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],o=t.map((function(t){return c(e,t,r,!1)})),s=o.pop();for(var u in t)if(n(s,t[u],r))return c(e,t[u],r,i);return""};function n(e,t,n){for(var a in n)n[a].escape&&(t=t.replace(new RegExp(a+".{1}","g"),""));return t.split("").filter((function(e){return n[e]&&n[e].pattern})).length>=e.length}}function c(e,t,n){for(var a=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],r=0,i=0,o="",s="";r<t.length&&i<e.length;){var u=t[r],l=e[i],c=n[u];if(c&&c.pattern)c.pattern.test(l)&&(o+=p(l,c),r++,a&&t[r]&&(n[t[r]]?n[t[r]]&&n[t[r]].escape&&(o+=t[r+1],r+=2):(o+=t[r],r++))),i++;else if(c&&c.repeat){var f=n[t[r-1]];f&&!f.pattern.test(l)?r++:r--}else c&&c.escape&&(u=t[++r]),a&&(o+=u),l===u&&i++,r++}for(;a&&r<t.length;){var v=t[r];if(n[v]){s="";break}s+=v,r++}return o+s}function p(e,t){return t.transform&&(e=t.transform(e)),t.uppercase?e.toLocaleUpperCase():t.lowercase?e.toLocaleLowerCase():e}function f(e){return e instanceof HTMLInputElement?e:e.querySelector("input")||e}function v(e){return"[object String]"===Object.prototype.toString.call(e)}var d=function(){function e(n){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(t(this,e),!n)throw new Error("Maska: no element for mask");if(a.tokens)for(var r in a.tokens)a.tokens[r]=i({},a.tokens[r]),a.tokens[r].pattern&&v(a.tokens[r].pattern)&&(a.tokens[r].pattern=new RegExp(a.tokens[r].pattern));this._opts={mask:a.mask,tokens:i(i({},o),a.tokens)},this._el=v(n)?document.querySelectorAll(n):n.length?n:[n],this.init()}var a,r,u;return a=e,(r=[{key:"init",value:function(){for(var e=this,t=0;t<this._el.length;t++){var n=f(this._el[t]);!this._opts.mask||n.dataset.mask&&n.dataset.mask===this._opts.mask||(n.dataset.mask=this._opts.mask),this.updateValue(n),n.dataset.maskInited||(n.dataset.maskInited=!0,n.addEventListener("input",(function(t){return e.updateValue(t.target,t)})),n.addEventListener("beforeinput",(function(t){return e.beforeInput(t)})))}}},{key:"destroy",value:function(){for(var e=this,t=0;t<this._el.length;t++){var n=f(this._el[t]);n.removeEventListener("input",(function(t){return e.updateValue(t.target,t)})),n.removeEventListener("beforeinput",(function(t){return e.beforeInput(t)})),delete n.dataset.mask,delete n.dataset.maskInited}}},{key:"updateValue",value:function(e,t){if(e&&e.type){var n=e.type.match(/^number$/i)&&e.validity.badInput;if(!e.value&&!n||!e.dataset.mask)return e.dataset.maskRawValue="",void this.dispatch("maska",e,t);var a=e.selectionEnd,r=e.value,i=r[a-1];e.dataset.maskRawValue=s(e.value,e.dataset.mask,this._opts.tokens,!1),e.value=s(e.value,e.dataset.mask,this._opts.tokens),t&&"insertText"===t.inputType&&a===r.length&&(a=e.value.length),function(e,t,n){for(;t&&t<e.value.length&&e.value.charAt(t-1)!==n;)t++;(e.type?e.type.match(/^(text|search|password|tel|url)$/i):!e.type)&&e===document.activeElement&&(e.setSelectionRange(t,t),setTimeout((function(){e.setSelectionRange(t,t)}),0))}(e,a,i),this.dispatch("maska",e,t),e.value!==r&&this.dispatch("input",e,t)}}},{key:"beforeInput",value:function(e){e&&e.target&&e.target.type&&e.target.type.match(/^number$/i)&&e.data&&isNaN(e.target.value+e.data)&&e.preventDefault()}},{key:"dispatch",value:function(e,t,n){t.dispatchEvent(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=document.createEvent("Event");return n.initEvent(e,!0,!0),t&&(n.inputType=t),n}(e,n&&n.inputType||null))}}])&&n(a.prototype,r),u&&n(a,u),e}();var h,k=(h=new WeakMap,function(e,t){if(t.value)return h.has(e)&&!function(e){return!(v(e.value)&&e.value===e.oldValue||Array.isArray(e.value)&&JSON.stringify(e.value)===JSON.stringify(e.oldValue)||e.value&&e.value.mask&&e.oldValue&&e.oldValue.mask&&e.value.mask===e.oldValue.mask)}(t)?h.get(e).updateValue(e):void h.set(e,new d(e,function(e){var t={};return e.mask?(t.mask=Array.isArray(e.mask)?JSON.stringify(e.mask):e.mask,t.tokens=e.tokens?i({},e.tokens):{}):t.mask=Array.isArray(e)?JSON.stringify(e):e,t}(t.value)))});function m(e){e.directive("maska",k)}"undefined"!=typeof window&&window.Vue&&window.Vue.use&&window.Vue.use(m),e.create=function(e,t){return new d(e,t)},e.default=m,e.install=m,e.mask=s,e.maska=k,e.tokens=o,Object.defineProperty(e,"__esModule",{value:!0})}));
;
Maska.create('.masked');
(function () {
  const formReqCall = document.querySelectorAll('._req._callback')
  const formReqBuy = document.querySelectorAll('._req._buy')
  const formBtnCall = document.querySelector('[form-btn="callback"]');
  const formBtnBuy = document.querySelector('[form-btn="buy"]');
  validForm(formReqCall, formBtnCall)
  validForm(formReqBuy, formBtnBuy)
  function submit(nameValue, phoneValue, btn) {
    if (phoneValue.length >= 18 && nameValue.length >=2 ) {
      btn.disabled = false
    }else {
      btn.disabled = true
    }
  }
  function validForm(inputs, btn) {
    let nameValue = ''
    let phoneValue = ''
    for (let i = 0; i < inputs.length; i++) {
      inputs[i].addEventListener('input', function(e) {
        if (e.target.classList.contains('_phone')) {
          phoneValue = e.target.value
          if (phoneValue.length < 18) {
            formAddError(e.target)
          } else {
            formRemoveError(e.target)
          }
          submit(nameValue, phoneValue, btn)
        } else if(e.target.classList.contains('_name')) {
          nameValue = e.target.value
          if (nameValue.length < 2) {
            formAddError(e.target)
          } else {
            formRemoveError(e.target)
          }
          submit(nameValue, phoneValue, btn)
        }
      })
    }
  }
  function formAddError(input) {
    const showErrorElement =  input.closest('.form__group').querySelector('small');
    showErrorElement.classList.add('error')
  }
  function formRemoveError(input) {
    const showErrorElement =  input.closest('.form__group').querySelector('small');
    showErrorElement.classList.remove('error')
  }

})();
   // /end valid-form

  //modal-popups
  const modalOverlay = document.querySelector('.modal-overlay');
  const btnsCallbackModal = document.querySelectorAll('[modal-btn="#callback"]');
  btnsCallbackModal.forEach(btn => {
    btn.addEventListener('click', (e) => {
      modalOverlay.classList.add('modal-overlay--show');
      const modal = modalOverlay.querySelector('#callback');
      showModal(modal)
    })
  })
  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay || e.target.closest('.modal__close')) {
      const modals = document.querySelectorAll('.modal')
      closeModal(modals)
    }
  })

  function changeModalInfo(modal ,target) {
    const productImg = target.querySelector('.goods__img img').getAttribute('src');
    const productTitle = target.querySelector('.goods__title').textContent;
    const modalInfoPrice = target.getAttribute('data-price');
    const modalInfoValue = target.getAttribute('data-value');
    modal.querySelector('.modal-info-title').setAttribute('value', productTitle)
    modal.querySelector('.modal-info-price').setAttribute('value', modalInfoPrice)
    modal.querySelector('.modal-info-value').setAttribute('value', modalInfoValue)
    modal.querySelector('.modal-product-title').textContent = productTitle;
    const modalProductPrice = modal.querySelector('.modal-product-price');
    modalProductPrice.textContent = "";
    modalProductPrice.insertAdjacentHTML('afterbegin', `${modalInfoPrice}<span>руб.</span>`)
    modal.querySelector('.modal-product-img').setAttribute('src', productImg);
  }
  function showModal(modal) {
    modal.style.display = 'block';
    setTimeout(() => {
      modal.classList.add('active');
    }, 200)
    document.body.classList.add('no-scroll')
  }
  function closeModal(modals) {
    modals.forEach(modal => {
      modal.classList.remove('active');
      modal.querySelectorAll('.modal__form').forEach(form => form.reset())
      modal.querySelectorAll('small').forEach(error => error.classList.remove('error'))
      setTimeout(() => {
        modal.style.display = 'none'
        modalOverlay.classList.remove('modal-overlay--show');
      }, 300)
    })
    if (!mobileMenu.classList.contains('show') && !document.querySelector('.catalog-menu--active')) {
      document.body.classList.remove('no-scroll')
    }
  }
    // goods click and show goodsModal/ change price product
  function changeProductPrice(attributePrice, attributeValue, target) {
    const goodsPrice = target.querySelector('.goods__price');
    goodsPrice.textContent = "";
    goodsPrice.insertAdjacentHTML('afterbegin', `${attributePrice}<span style="margin-left: 4px;">руб.</span>`);
    target.setAttribute('data-price', attributePrice);
    target.setAttribute('data-value', attributeValue)
  }
  if (document.body.classList.contains('bodyGoods')) {
    const goodsItem = document.querySelector('.goods__item');
    goodsItem.addEventListener('click', (e) => {
      if (e.target.hasAttribute('btn-choose')) {
        const chosenBtn = goodsItem.querySelector('.chosen[btn-choose]');
        if (chosenBtn !== e.target) {
          const attributePrice = e.target.getAttribute('data-product-attribute-price');
          const attributeValue = e.target.getAttribute('data-product-attribute-value');
          chosenBtn.classList.remove('chosen');
          e.target.classList.add('chosen')
          changeProductPrice(attributePrice,attributeValue, goodsItem)
        }
      }
      else if (e.target.hasAttribute('modal-btn')) {
        modalOverlay.classList.add('modal-overlay--show');
        const modal = modalOverlay.querySelector(e.target.getAttribute('modal-btn'))
        changeModalInfo(modal, goodsItem)
        showModal(modal)
      }
      else if (e.target.classList.contains('btn--goods-text')) {
        if (!e.target.classList.contains('isSelected')) {
          const parentElement = e.target.closest('.goods__footer');
          const acitveBtn = parentElement.querySelector('.btn--goods-text.isSelected')
          acitveBtn.classList.remove('isSelected');
          e.target.classList.add('isSelected');
          const activeBlock = parentElement.querySelector('[select-block].active');
          activeBlock.classList.remove('active')
          const block = parentElement.querySelector(e.target.dataset.block);
          block.classList.add('active');
        }
      }
    })
  }
  // /end goods click and show goodsModal/ change price product

  // initNouisLider
  (function () {
  const filterPrice = document.getElementById('filter-price')
  if (!filterPrice) {
    return
  }
  noUiSlider.create(filterPrice, {
    start: [1000, 300000],
    connect: true,
    range: {
      min: 350,
      max: 350000,
    },
    tooltips: true,
    format: wNumb({
      decimals: 0,
      thousand: ' ',
    }),
  })

  const filterInputStart = document.querySelector('.form__control--filter-price.start')
  const filterInputEnd = document.querySelector('.form__control--filter-price.end')
  const filterInputs = [filterInputStart, filterInputEnd]
  filterPrice.noUiSlider.on('update', function (values, handle) {
    filterInputs[handle].value = values[handle]
  })
  filterInputStart.addEventListener('change', setPriceValues)
  filterInputEnd.addEventListener('change', setPriceValues)
  function setPriceValues() {
    let priceStartValue = filterInputStart.value;
    let priceEndValue = filterInputEnd.value;
    filterPrice.noUiSlider.set([priceStartValue, priceEndValue])
  }
})()
;

  // /end initNouisLider

  // catalog-goods
  if (document.body.classList.contains('catalogBody')) {
    const filterBodyItems = document.querySelectorAll('.isOpendFirstly');
    console.log(filterBodyItems)
    for (let i = 0; i < filterBodyItems.length; i++) {
      if (filterBodyItems[i].classList.contains('visible')) {
        filterBodyItems[i].style.overflow = 'visible'
      }
      filterBodyItems[i].style.maxHeight = filterBodyItems[i].scrollHeight + 'px';
    }
    const catalogItem = document.body.querySelector('.catalog-goods');
    const selectHeader = document.querySelector('[data-select]');
    const selectItems = document.querySelectorAll('.select__item');
    selectHeader.addEventListener('click', selectToggle)

    for (let i = 0; i < selectItems.length; i++){
      selectItems[i].addEventListener('click', selectChoose);
    }
    function selectChoose() {
      const text = this.textContent;
      const parent = this.closest('.select');
      const current = parent.querySelector('.select__current');
      current.textContent = text;
      current.classList.add('chosen');
      parent.classList.remove('active')
    }

    function selectToggle() {
      this.closest('.select').classList.toggle('active')
    }
    document.body.addEventListener('click', (e) => {
      const target = e.target;
      // select close
      const select = target.closest('.select')
      if (!select && document.querySelector('.select.active')) {
        document.querySelector('.select').classList.remove('active')
      }
      // /end select close
      const viewBtn = target.closest('button[btn-view]')
      const activeBtn = document.querySelector('.btn[btn-view].active');

      if (viewBtn && viewBtn != activeBtn) {
        const typeView = viewBtn.getAttribute('btn-view');
        activeBtn.classList.remove('active')
        viewBtn.classList.add('active')
        if (typeView === 'list') {
          catalogItem.classList.add('list')
        } else {
          catalogItem.classList.remove('list')
        }
      }
      const filterButtonItem = target.closest('.filter__list-button');
      if (filterButtonItem) {
        e.preventDefault()
        const filterBody = filterButtonItem.closest('.filter__list-item').querySelector('.filter__list-body');
        animationHeight(filterBody, filterButtonItem, true)
      }
      // mobile-filter-hidden
      if (target.classList.contains('aside__section-title')) {
        const mobileBodyFilter = target.closest('.aside__section').querySelector('.mobile-hidden');
        openBodyHeight(mobileBodyFilter, target, true)
      }
      const notifyCloseBtn = target.closest('.notify__close');
      if (notifyCloseBtn)  {
        notifyCloseBtn.closest('.notify').classList.remove('active');
        notifyCloseBtn.closest('.notify').classList.add('notActive');
      }
      // /end mobile-filter-hidden
    })

  }
  // /end catalog-goods

  ;(function () {
  const map = document.querySelector('#ymap')

  if (!map) {
    return
  }
  const iconUrl = map.getAttribute('icon-url');
  ymaps.ready(function () {
    var myMap = new ymaps.Map(
        'ymap',
        {
          center: [55.72325323848744, 37.5721690755473],
          zoom: 17,
        },
        {
          searchControlProvider: 'yandex#search',
        }
      ),
      // Создаём макет содержимого.
      MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
        '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
      ),
      myPlacemark = new ymaps.Placemark(
        myMap.getCenter(),
        {
          hintContent: 'Собственный значок метки',
          balloonContent: 'Это красивая метка',
        },
        {
          // Опции.
          // Необходимо указать данный тип макета.
          iconLayout: 'default#image',
          // Своё изображение иконки метки.
          iconImageHref: iconUrl,
          // Размеры метки.
          iconImageSize: [55, 71],
          // Смещение левого верхнего угла иконки относительно
          // её "ножки" (точки привязки).
          iconImageOffset: [-5, -38],
        }
      ),
      myPlacemarkWithContent = new ymaps.Placemark(
        [55.661574, 37.573856],
        {
          hintContent: 'Собственный значок метки с контентом',
          balloonContent: 'А эта — новогодняя',
          iconContent: '12',
        },
        {
          // Опции.
          // Необходимо указать данный тип макета.
          iconLayout: 'default#imageWithContent',
          // Своё изображение иконки метки.
          iconImageHref: 'images/ball.png',
          // Размеры метки.
          iconImageSize: [48, 48],
          // Смещение левого верхнего угла иконки относительно
          // её "ножки" (точки привязки).
          iconImageOffset: [-24, -24],
          // Смещение слоя с содержимым относительно слоя с картинкой.
          iconContentOffset: [15, 15],
          // Макет содержимого.
          iconContentLayout: MyIconContentLayout,
        }
      )

    myMap.geoObjects.add(myPlacemark).add(myPlacemarkWithContent)
  })
})()
;
  // animationsScroll plugin

  // cartBody
  if (document.body.classList.contains('cartBody')) {
    const formcontrolCnts = document.body.querySelectorAll('.form__control--cnt');
    formcontrolCnts.forEach(input => {
      input.addEventListener('input', function(e) {
        e.target.value = e.target.value.replace(/\D+/, '');
      })
    })
    document.body.addEventListener('click', (e) => {
      const target = e.target;
      if (target.hasAttribute('btn-choose')) {
        const activeBtn = target.closest('.product-cart__choose').querySelector('.btn--choose[btn-choose].chosen');
        if (activeBtn !== target) {
          activeBtn.classList.remove('chosen');
          target.classList.add('chosen')
          const dataValue = target.getAttribute('data-product-attribute-value');
          const dataPrice = target.getAttribute('data-product-attribute-price');
          const product = target.closest('.cart__product');
          const inputText = product.querySelector('.product-cart__cnt span');
          if (dataValue === 'pog-metr') {
            inputText.textContent = "Кол-во п/м:"
          } else {
            inputText.textContent = "Кол-во шт:"
          }
          product.setAttribute('data-value', dataValue)
          product.setAttribute('data-value', dataPrice)
        }
      }
    })

  }
  // /end cartBody
  // compareBOdy
  if (document.body.classList.contains('compareBody')) {
    document.body.addEventListener('click', (e) => {
      const target = e.target;
      if (target.classList.contains('product__descr-close')) {
        if (target.dataset.value === 'open') {
          target.textContent = 'Свернуть'
          target.dataset.value = 'close'
        } else {
          target.textContent = 'Показать ещё'
          target.dataset.value = 'open'
        }
        const parentElement = target.closest('.product__descr');
        const hidingBody = parentElement.querySelector('.product__descr-hiding');
        const itemBackImg = parentElement.querySelector('.product__list-item[item-back]');
        hidingBody.classList.toggle('opened');
        itemBackImg.classList.toggle('back-img');
      }
    })
  }
   // /end compareBOdy

  // order
  if (document.body.classList.contains('orderBody')) {
      const textarea = document.querySelector('.form__area');
      textarea.addEventListener('keyup', function(e){
          if(e.target.scrollTop > 0){
            e.target.style.height = e.target.scrollHeight + "px";
          } else {
            e.target.style.height = 119 + "px";
          }
        });
    const radioTypeDilver = document.querySelectorAll('input[data-type-deliver]');
    const formOrder = document.querySelector('.form--order');
    radioTypeDilver.forEach(radio => {
      radio.addEventListener('input', (e) => {
        if (e.target.value === 'carry') {
          formOrder.classList.add('carry')
        } else {
          formOrder.classList.remove('carry')
        }
      })
    })
    document.body.addEventListener('click', (e) => {
      const target = e.target;
      if (target.classList.contains('cart-order__title')) {
        const hiddenBody = target.closest('.cart-order--form').querySelector('.cart-order__hidden');
        animationHeight(hiddenBody, target, false)
      }
    })
  }

  // /end order

  // general body click
  document.body.addEventListener('click', (e) => {
    const addToCartBtn = e.target.closest('button[btn-cart]');
    if (addToCartBtn) {
      const product = addToCartBtn.closest('article.product')
      product.classList.add('addedToCart');
      addToCartBtn.disabled = true;
    }
  })
});