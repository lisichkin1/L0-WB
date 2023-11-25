let button = document.querySelector('.popup__card__button');
let popupPay = document.querySelector('.popup__pay');
let payLink = document.querySelector('.pay_button__popup');
let closeButton = document.querySelector('.popup__pay__close');
let popupArea = document.querySelector('.popup__area');
let payLinkSecond = document.querySelector('.form__order__pay__title a');
button.addEventListener('click', function (ev) {
  ev.preventDefault();

  let cardItem = document
    .querySelector('.popup__text__item input:checked')
    .closest('.popup__text__item');

  if (cardItem) {
    let svgIconNew = cardItem.querySelector('svg');
    let cardNumber = cardItem.querySelector('.popup__text__item__span');
    let cardDate = cardItem.querySelector('.popup__text__item__date');

    let paySection = document.querySelector('.form__payment__card');
    let paySectionCard = paySection.querySelector('span');
    let paySectionYear = document.querySelector('.form__order__pay__card__year');
    let paySectionSvgIcon = paySection.querySelector('svg');

    let orderSection = document.querySelector('.form__order__pay__card__order');
    let orderSectionCard = orderSection.querySelector('span');
    let orderSectionSvgIcon = orderSection.querySelector('svg');

    if (paySectionSvgIcon) {
      paySectionSvgIcon.remove();
    }
    if (orderSectionSvgIcon) {
      orderSectionSvgIcon.remove();
    }
    if (svgIconNew) {
      let clonedSvgOne = svgIconNew.cloneNode(true);
      let clonedSvgTwo = svgIconNew.cloneNode(true);
      paySection.querySelector('div').appendChild(clonedSvgOne);
      orderSection.querySelector('div').appendChild(clonedSvgTwo);
    }
    paySectionCard.innerText = cardNumber.innerText;
    paySectionYear.innerText = cardDate.innerText;
    orderSectionCard.innerText = cardNumber.innerText;
    closePopup();
  } else {
    console.error('No card item selected.');
  }
});
payLink.addEventListener('click', function (ev) {
  ev.preventDefault();
  openPopup();
});
closeButton.addEventListener('click', function (ev) {
  ev.preventDefault();
  closePopup();
});
popupArea.addEventListener('click', function (ev) {
  ev.preventDefault();
  closePopup();
});
payLinkSecond.addEventListener('click', function (ev) {
  ev.preventDefault();
  openPopup();
});
function openPopup() {
  popupPay.style.opacity = '1';
  popupPay.style.visibility = 'visible';
}
function closePopup() {
  popupPay.style.opacity = '0';
  popupPay.style.visibility = 'hidden';
}
