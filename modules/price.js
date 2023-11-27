export function result_price_f() {
  let result_price = 0;
  let result_price_no_discount = 0;
  let discount = 0;
  let products = document.querySelectorAll('.form__cart__item');

  let cart_price = document.querySelector('.form__order__result__price__count');
  let currencySpan = document.querySelector('.form__order__result__price__currency');
  let cart_second_price = document.querySelector('.form__order__result__quantity_nodiscount');
  let discountSpan = document.querySelector('.form__order__result__discount__quantity');
  products.forEach(function (product) {
    let priceValue = 0;
    let secondaryPriceValue = 0;
    let priceProduct = product.querySelector('.form__cart__item__price');
    let primaryText = priceProduct.querySelector('.form__cart__item__price_primary');
    let secondaryText = priceProduct.querySelector('.form__cart__item__price_secondary');

    let checkboxItem = product.querySelector('.form__cart__select__input__item');
    console.log(checkboxItem.checked);
    if (primaryText && checkboxItem && checkboxItem.checked) {
      priceValue = parseFloat(
        primaryText.innerText
          .trim()
          .replace(/[^\d.,]/g, '')
          .replace(',', '.'),
      );
      if (!isNaN(priceValue)) {
        result_price += priceValue;
      }
    }

    if (primaryText && checkboxItem && checkboxItem.checked) {
      secondaryPriceValue = parseFloat(
        secondaryText.innerText
          .trim()
          .replace(/[^\d.,]/g, '')
          .replace(',', '.'),
      );
      if (!isNaN(secondaryPriceValue)) {
        result_price_no_discount += secondaryPriceValue;
      }
    }
    discount += secondaryPriceValue - priceValue;
  });
  if (cart_price && currencySpan) {
    cart_price.innerHTML =
      Intl.NumberFormat('ru-RU').format(result_price) + ' ' + currencySpan.outerHTML;
  }
  if (cart_second_price) {
    cart_second_price.innerHTML =
      Intl.NumberFormat('ru-RU').format(result_price_no_discount) + ' сом';
  }
  if (discountSpan) {
    discountSpan.innerHTML = '&minus;' + Intl.NumberFormat('ru-RU').format(discount) + ' сом';
  }
}
