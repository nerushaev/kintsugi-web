const refsForBusket = {
  goodsCards: document.querySelector('.cards-item'),
  buyGoodsBtnRef: document.querySelector('.cards-item__btn'),
  busketItemsList: document.querySelector('.items-list'),
  amountBusketRef: document.querySelector('.busket-amount'),
  busketContainerRef: document.querySelector('.busket-container')
}

const refsForCarousel = {
  carousel: document.querySelector('.carousel'),
}

const refsForMobileMenu = {
  menuButton: document.querySelector("[data-menu-button]"),
  mobileMenu: document.querySelector("[data-menu]")
}

export { refsForBusket, refsForCarousel, refsForMobileMenu };
