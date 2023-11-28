let pointButton = document.querySelector('.delivery__option__point');
let pointButtonInput = document.querySelector('.delivery__option__input__point');
let courierButton = document.querySelector('.delivery__option__courier');
let courierBlock = document.querySelector('.popup__content__items__courier');
let pointBlock = document.querySelector('.popup__content__items__point');
let button = document.querySelector('.popup__courier__button');
let oldAddressFirst = document.querySelector(
  '.form__delivery__way__item__container_1 .way__item__text',
);
let oldStarFirst = document.querySelector('.form__delivery__way__item__time__star');
let titleDelivery = document.querySelector('.way__item__title__js');
let orderTitle = document.querySelector('.form__order__delivery__title h3');
let oldAddressSecond = document.querySelector('.form__order__delivery__address');
let starContainer = document.querySelector('.form__delivery__way__item__time');
let popup = document.querySelector('.popup__address');
let popupArea = document.querySelector('.popup__address__area');
let closeButton = document.querySelector('.popup__address__close');
let deliveryLinkFirst = document.querySelector('.delivery_button__popup');
let deliveryLinkSecond = document.querySelector('.form__order__delivery__title a');
pointButton.addEventListener('click', function (ev) {
  pointBlock.style.display = 'flex';
  courierBlock.style.display = 'none';
});
courierButton.addEventListener('click', function (ev) {
  pointBlock.style.display = 'none';
  courierBlock.style.display = 'flex';
});
button.addEventListener('click', function (ev) {
  ev.preventDefault();
  if (pointButtonInput.checked) {
    let popupItem = pointBlock
      .querySelector('.popup__text__item__input__point:checked')
      .closest('.popup__text__item__container__point');
    if (popupItem) {
      let newAddress = popupItem.querySelector('.popup__text__item__span__point');
      let starNumber = popupItem.querySelector('.popup__star__number__point');
      starContainer.style.display = 'flex';
      oldAddressFirst.innerText = newAddress.innerText;
      oldAddressSecond.innerText = newAddress.innerText;
      oldStarFirst.innerText = starNumber.innerText;
      titleDelivery.innerText = 'Пункт выдачи';
      orderTitle.innerText = 'Доставка в пункт выдачи';
      closePopup();
    }
  } else {
    let popupItem = courierBlock
      .querySelector('.popup__text__item__input__courier:checked')
      .closest('.popup__text__item__container__courier');

    let newAddress = popupItem.querySelector('.popup__text__item__span__courier');
    starContainer.style.display = 'none';
    oldAddressFirst.innerText = newAddress.innerText;
    oldAddressSecond.innerText = newAddress.innerText;
    titleDelivery.innerText = 'Курьером';
    orderTitle.innerText = 'Доставка курьером';
    closePopup();
  }
});
closeButton.addEventListener('click', function (ev) {
  ev.preventDefault();
  closePopup();
});
popupArea.addEventListener('click', function (ev) {
  ev.preventDefault();
  closePopup();
});
deliveryLinkFirst.addEventListener('click', function (ev) {
  ev.preventDefault();
  openPopup();
});
deliveryLinkSecond.addEventListener('click', function (ev) {
  ev.preventDefault();
  openPopup();
});
function openPopup() {
  popup.style.opacity = '1';
  popup.style.visibility = 'visible';
  popupArea.style.visibility = 'visible';
}
function closePopup() {
  popup.style.opacity = '0';
  popup.style.visibility = 'hidden';
  popupArea.style.visibility = 'hidden';
}
