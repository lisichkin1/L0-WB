let hideButtons = document.querySelectorAll('.form__cart__hide__button');
let selectItem = document.querySelector('.form__cart__select__item__js');
let textSpan = document.createElement('span');

let selectContainer = document.querySelector('.form__cart__select__container');
let price = document.querySelector('.form__order__result__price__count');
let productList = document.querySelector('.form__cart__list__js');

let quantityProducts = 0;
let ending = '';
for (let i = 0; i < hideButtons.length; i++) {
  let hideButton = hideButtons[i];

  if (hideButton) {
    hideButton.addEventListener('click', function (ev) {
      ev.preventDefault();
      let productListItems = document.querySelectorAll('.form__cart__item');
      let panel = this.parentElement.nextElementSibling.nextElementSibling;
      panel.classList.toggle('collapsed');
      hideButton.classList.toggle('rotate');
      if (panel.classList.contains('collapsed')) {
        panel.style.overflow = 'hidden';
        quantityProducts = 0;
        productListItems.forEach((element) => {
          let quantityProductsItems = element.querySelector('.form__cart__item__quantity');
          let checkbox = element.querySelector('.form__cart__select__input__item');
          if (checkbox.checked) quantityProducts += parseFloat(quantityProductsItems.innerText);
        });
        switch (quantityProducts % 10) {
          case 0:
            ending = 'ов';
            break;
          case 1:
            ending = '';
            break;
          case 2:
          case 3:
          case 4:
            ending = 'a';
            break;
          case 5:
          case 6:
          case 7:
          case 8:
          case 9:
            ending = 'ов';
            break;
          default:
            ending = 'ов';
        }

        selectItem.style.display = 'none';
        textSpan.className = 'form__cart__select__text';
        textSpan.innerText = quantityProducts + ' товар' + ending + ' · ' + price.innerText;
        textSpan.style.display = 'inline-block';
        selectContainer.appendChild(textSpan);
        selectContainer.style.flexDirection = 'row-reverse';
      } else {
        panel.style.overflow = 'visible';
        selectItem.style.display = 'inline-block';
        textSpan.style.display = 'none';
        selectContainer.style.flexDirection = 'row';
      }
    });
  }
}
// 0 ов
// 1
// 2 а
// 3 а
// 4 а
// 5 ов
// 6 ов
// 7 ов
// 8 ов
// 9 ов
