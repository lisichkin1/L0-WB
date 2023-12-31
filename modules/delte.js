import { buttonCheckbox } from './checkbox.js';
import { result_price_f } from './price.js';
let QuantityProducts = document.querySelector('.header__navbar__item__count');
let QuantityProductsMobile = document.querySelector('.header__navbar__item__count__mobile');
document.addEventListener('DOMContentLoaded', function () {
  let deleteButtons = document.querySelectorAll('.item__customization_delete');

  deleteButtons.forEach(function (button) {
    let itemId;
    let absenceDeleteButton;
    let listItems = document.querySelectorAll('.form__cart__item');
    let cartItem = button.closest('.form__cart__item');
    if (cartItem) itemId = cartItem.dataset.id;
    let absenceItem = document.querySelector(`.form__absence__item[data-id="${itemId}"]`);
    if (absenceItem) absenceDeleteButton = absenceItem.querySelector('.item__customization_delete');
    button?.addEventListener('click', function (event) {
      event.preventDefault();
      deleteProduct(cartItem, absenceItem, listItems);
    });
    absenceDeleteButton?.addEventListener('click', function (event) {
      event.preventDefault();
      deleteProduct(cartItem, absenceItem, listItems);
    });
  });
});

function updateQuantityProducts() {
  let listItems = document.querySelectorAll('.form__cart__item');
  QuantityProducts.innerText = listItems.length > 1 ? listItems.length : '';
  QuantityProductsMobile.innerText = listItems.length > 1 ? listItems.length : '';
}
function deleteProduct(cartItem, absenceItem, listItems) {
  if (cartItem && absenceItem) {
    absenceItem.remove();
    cartItem.remove();
    result_price_f();
    updateQuantityProducts(listItems);
    buttonCheckbox();
  }
}
