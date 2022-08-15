(() => {
  //   Modal Window

  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    document.body.classList.toggle('modal-open');
    refs.modal.classList.toggle('is-hidden--add');
  }

  //Mobile menu v2
  const menuOpenBtn = document.querySelector('[data-menu-open]');
  const menuCloseBtn = document.querySelector('[data-menu-close]');
  const mobileMenu = document.querySelector('[data-mobile-menu]');
  const mobileClose = document.querySelector('[data-mobile-close]');
  const heroHidden = document.querySelector('.header');

  menuOpenBtn.addEventListener('click', toggleMenu);
  menuCloseBtn.addEventListener('click', toggleMenu);
  mobileClose.addEventListener('click', closeMenu);

  function toggleMenu() {
    mobileMenu.classList.toggle('menu-active');
    // heroHidden.classList.toggle('hide-menu');
    heroHidden.classList.toggle('open-menu');
  }
  function closeMenu() {
    mobileMenu.classList.remove('menu-active');
  }

  //Modal for products
  const prods = {
    openModOne: document.querySelector('[data-prod-one-open]'),
    openModTwo: document.querySelector('[data-prod-two-open]'),
    openModThree: document.querySelector('[data-prod-three-open]'),
    closeModOne: document.querySelector('[data-prod-one-close]'),
    closeModTwo: document.querySelector('[data-prod-two-close]'),
    closeModThree: document.querySelector('[data-prod-three-close]'),
    prodModOne: document.querySelector('[data-prod-one-mod]'),
    prodModTwo: document.querySelector('[data-prod-two-mod]'),
    prodModThree: document.querySelector('[data-prod-three-mod]'),
  };

  prods.openModOne.addEventListener('click', prodOne);
  prods.closeModOne.addEventListener('click', prodOne);

  function prodOne() {
    // document.body.classList.toggle('modal-open');
    prods.prodModOne.classList.toggle('is-hidden');
  }

  prods.openModTwo.addEventListener('click', prodTwo);
  prods.closeModTwo.addEventListener('click', prodTwo);

  function prodTwo() {
    // document.body.classList.toggle('modal-open');
    prods.prodModTwo.classList.toggle('is-hidden');
  }

  prods.openModThree.addEventListener('click', prodThree);
  prods.closeModThree.addEventListener('click', prodThree);

  function prodThree() {
    // document.body.classList.toggle('modal-open');
    prods.prodModThree.classList.toggle('is-hidden');
  }

  //   //Modal footer

  const ftr = {
    openLoc: document.querySelector('[data-loc-open]'),
    closeLoc: document.querySelector('[data-loc-close]'),
    modalLoc: document.querySelector('[data-loc-modal]'),
    openFran: document.querySelector('[data-fran-open]'),
    closeFran: document.querySelector('[data-fran-close]'),
    modalFran: document.querySelector('[data-fran-modal]'),
  };

  ftr.openFran.addEventListener('click', toggleFranModal);
  ftr.closeFran.addEventListener('click', toggleFranModal);

  ftr.openLoc.addEventListener('click', toggleLocModal);
  ftr.closeLoc.addEventListener('click', toggleLocModal);

  function toggleFranModal() {
    document.body.classList.toggle('modal-open');
    ftr.modalFran.classList.toggle('is-hidden');
  }

  function toggleLocModal() {
    document.body.classList.toggle('modal-open');
    ftr.modalLoc.classList.toggle('is-hidden');
  }

  // //   //Modal footer

  const hdr = {
    openModalHdr: document.querySelector('[data-hdr-open]'),
    openModalHdrMob: document.querySelector('[data-hdr-mob-open]'),
    closeModalHdr: document.querySelector('[data-hdr-close]'),
    modalHdr: document.querySelector('[data-hdr-modal]'),
  };

  hdr.openModalHdr.addEventListener('click', toggleModalHdr);
  hdr.openModalHdrMob.addEventListener('click', toggleModalHdr);
  hdr.closeModalHdr.addEventListener('click', toggleModalHdr);

  function toggleModalHdr() {
    document.body.classList.toggle('modal-open');
    hdr.modalHdr.classList.toggle('is-hidden');
  }

  //Modal hero

  const hero = {
    openModalHero: document.querySelector('[data-hero-open]'),
    closeModalHero: document.querySelector('[data-hero-close]'),
    modalHero: document.querySelector('[data-hero-modal]'),
  };

  hero.openModalHero.addEventListener('click', toggleModalHero);
  hero.closeModalHero.addEventListener('click', toggleModalHero);

  function toggleModalHero() {
    hero.modalHero.classList.toggle('is-hidden');
  }
})();
