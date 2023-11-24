import { result_price_f } from './price.js';

let checkboxAll = document.querySelector('.form__cart__select__input__all');
let checkboxItems = document.querySelectorAll('.form__cart__select__item');
let checkboxAllContainer = document.querySelector('.form__cart__select');
let checkboxPay = document.querySelector('.form__cart__select__pay');
let buttonContainer = document.querySelector('.form__order__agree');
let resultPrice = document.querySelector('.form__order__result__price__count');
checkboxAll.checked = true;
checkboxAllContainer.addEventListener('click', function () {
  checkboxItems.forEach(function (checkbox) {
    let input = checkbox.querySelector('.form__cart__select__input__item');
    input.checked = checkboxAll.checked;
  });
  result_price_f();
  buttonCheckbox();
});

checkboxItems.forEach(function (checkbox) {
  let input = checkbox.querySelector('.form__cart__select__input__item');
  input.checked = true;
  checkbox.addEventListener('click', function () {
    if (!input.checked) {
      checkboxAll.checked = false;
    } else {
      let allChecked = Array.from(checkboxItems).every(function (item) {
        return item.querySelector('.form__cart__select__input__item').checked;
      });

      checkboxAll.checked = allChecked;
    }
    result_price_f();
    buttonCheckbox();
  });
});
export function buttonCheckbox() {
  let input = checkboxPay.querySelector('.form__cart__select__input');
  let button = buttonContainer.querySelector('button');
  if (input.checked) {
    button.innerText = 'Оплатить ' + resultPrice.innerText;
  } else {
    button.innerText = 'Заказать';
  }
}
checkboxPay.addEventListener('click', function () {
  buttonCheckbox();
});
