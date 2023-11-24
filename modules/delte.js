import { buttonCheckbox } from './checkbox.js';
import { result_price_f } from './price.js';
let QuantityProducts = document.querySelector('.header__navbar__item__count');
document.addEventListener('DOMContentLoaded', function () {
  let deleteButtons = document.querySelectorAll('.item__customization_delete');

  deleteButtons.forEach(function (button) {
    button.addEventListener('click', function (event) {
      event.preventDefault();
      let listItems = document.querySelectorAll('.form__cart__item');
      let cartItem = button.closest('.form__cart__item');
      if (cartItem) {
        let itemId = cartItem.dataset.id;
        let absenceItem = document.querySelector(`.form__absence__item[data-id="${itemId}"]`);
        if (absenceItem) {
          absenceItem.remove();
        }

        cartItem.remove();
        result_price_f();
        updateQuantityProducts(listItems);
        buttonCheckbox();
      }
    });
  });
});

function updateQuantityProducts() {
  let listItems = document.querySelectorAll('.form__cart__item');
  QuantityProducts.innerText = listItems.length;
}
