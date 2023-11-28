let freeButtonDelivery = document.querySelector('.form__delivery__text').querySelector('span');
let freeButtonOrder = document
  .querySelector('.form__order__delivery__down__js')
  .querySelector('span');
let ButtonDeliveryPopup = document
  .querySelector('.form__delivery__text')
  .querySelector('.form__delivery__text__popup');
let ButtonOrderPopup = document
  .querySelector('.form__order__delivery__down__js')
  .querySelector('.form__delivery__text__popup');

freeButtonDelivery.addEventListener('mouseenter', function () {
  if (ButtonDeliveryPopup) ButtonDeliveryPopup.style.display = 'block';
});
freeButtonDelivery.addEventListener('mouseleave', function () {
  if (ButtonDeliveryPopup) ButtonDeliveryPopup.style.display = 'none';
});

freeButtonOrder.addEventListener('mouseenter', function () {
  if (ButtonOrderPopup) ButtonOrderPopup.style.display = 'block';
});
freeButtonOrder.addEventListener('mouseleave', function () {
  if (ButtonOrderPopup) ButtonOrderPopup.style.display = 'none';
});
export function hover() {
  let cartItems = document.querySelectorAll('.form__cart__item');
  let absenceItems = document.querySelectorAll('.form__absence__item');
  absenceItems.forEach(function (cartItem) {
    let buttons = cartItem.querySelector('.item__customization');
    if (window.innerWidth >= 769) {
      cartItem.addEventListener('mouseenter', function () {
        if (buttons) buttons.style.display = 'flex';
      });
      cartItem.addEventListener('mouseleave', function () {
        if (buttons) buttons.style.display = 'none';
      });
    }
  });
  cartItems.forEach(function (cartItem) {
    let buttons = cartItem.querySelector('.item__customization');
    let popup = cartItem.querySelector('.form__cart__item__institution__secondary__popup');
    let hoverIcon = cartItem
      .querySelector('.form__cart__item__institution__secondary')
      .querySelector('svg');

    let hoverDiscount = cartItem.querySelector('.form__cart__item__price_secondary');
    let popupDiscount = cartItem.querySelector('.form__cart__item__price__popup');
    if (window.innerWidth >= 769) {
      cartItem.addEventListener('mouseenter', function () {
        if (buttons) buttons.style.display = 'flex';
      });
      cartItem.addEventListener('mouseleave', function () {
        if (buttons) buttons.style.display = 'none';
      });
      hoverIcon.addEventListener('mouseenter', function () {
        if (popup) popup.style.display = 'flex';
      });
      hoverIcon.addEventListener('mouseleave', function () {
        if (popup) popup.style.display = 'none';
      });
    }
    if (hoverDiscount) {
      hoverDiscount.addEventListener('mouseenter', function () {
        if (popupDiscount) popupDiscount.style.display = 'flex';
      });
    }
    if (hoverDiscount) {
      hoverDiscount.addEventListener('mouseleave', function () {
        if (popupDiscount) popupDiscount.style.display = 'none';
      });
    }
  });
}
