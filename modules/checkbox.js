import { result_price_f } from './price.js';

let checkboxAll = document.querySelector('.form__cart__select__input__all');
let checkboxItems = document.querySelectorAll('.form__cart__select__item');
let checkboxAllContainer = document.querySelector('.form__cart__select');
let checkboxPay = document.querySelector('.form__cart__select__pay');
let buttonContainer = document.querySelector('.form__order__agree');
let resultPrice = document.querySelector('.form__order__result__price__count');
let payMainText = document.querySelector('.form__order__pay__card__text');
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
  let payText = checkboxPay.nextElementSibling;
  let button = buttonContainer.querySelector('button');
  if (input.checked) {
    button.innerText = 'Оплатить ' + resultPrice.innerText;
    payText.style.display = 'none';
    payMainText.style.display = 'none';
  } else {
    button.innerText = 'Заказать';
    payText.style.display = 'block';
    payMainText.style.display = 'block';
  }
}
checkboxPay.addEventListener('click', function () {
  buttonCheckbox();
});
