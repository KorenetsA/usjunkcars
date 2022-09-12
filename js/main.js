(() => {
  const menuBtnRef = document.querySelector('[data-menu-button]');
  const mobileMenuRef = document.querySelector('[data-menu]');
  const mobileHeader = document.querySelector('.header');
  menuBtnRef.addEventListener('click', () => {
    const expanded =
      menuBtnRef.getAttribute('aria-expanded') === 'true' || false;
    menuBtnRef.classList.toggle('is-open');
    menuBtnRef.setAttribute('aria-expanded', !expanded);
    mobileMenuRef.classList.toggle('is-open');
    document.body.classList.toggle('no-scroll');
    mobileHeader.classList.toggle('header-colored');
  });
})();
class ItcAccordion {
  constructor(target, config) {
    this._el =
      typeof target === 'string' ? document.querySelector(target) : target;
    const defaultConfig = {
      alwaysOpen: true,
      duration: 350,
    };
    this._config = Object.assign(defaultConfig, config);
    this._el.querySelectorAll('.accordion__body').forEach(element => {
      element.style.transition = `max-height ${this._config.duration}ms ease-out`;
    });
    this.addEventListener();
  }
  addEventListener() {
    this._el.addEventListener('click', e => {
      const elHeader = e.target.closest('.accordion__header');
      if (!elHeader) {
        return;
      }
      if (!this._config.alwaysOpen) {
        const elOpenItem = this._el.querySelector('.accordion__item_show');
        if (elOpenItem) {
          elOpenItem !== elHeader.parentElement
            ? this.toggle(elOpenItem)
            : null;
        }
      }
      this.toggle(elHeader.parentElement);
    });
  }
  toggle(el) {
    el.classList.toggle('accordion__item_show');
    const accordionBody = el.querySelector('.accordion__body');
    if (accordionBody.style.maxHeight) {
      accordionBody.style.maxHeight = null;
    } else {
      accordionBody.style.maxHeight = `${accordionBody.scrollHeight}px`;
    }
  }
}
if (document.querySelector('.accordion')) {
  new ItcAccordion(document.querySelector('.accordion'), {
    alwaysOpen: false,
  });
}
if (document.querySelector('.accordion-2')) {
  new ItcAccordion(document.querySelector('.accordion-2'), {
    alwaysOpen: false,
  });
}
$(document).ready(function () {
  $('.slider_review').slick({
    dots: true,
    infinite: true,
    speed: 300,
  });
});
