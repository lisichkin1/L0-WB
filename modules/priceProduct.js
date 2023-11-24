export function processPriceProduct(data) {
  let itemContainers = document.querySelectorAll('.form__cart__item');
  data.forEach((item, index) => {
    let itemContainer = itemContainers[index];
    let priceContainer = itemContainer.querySelector('.form__cart__item__price');

    let primaryPriceElement = document.createElement('span');
    primaryPriceElement.className = 'form__cart__item__price_primary';
    primaryPriceElement.id = 'dynamicText';
    primaryPriceElement.innerText = Intl.NumberFormat('ru-RU').format(item.price_primary);

    let secondaryPriceElement = document.createElement('span');
    secondaryPriceElement.className = 'form__cart__item__price_secondary';
    secondaryPriceElement.innerText =
      Intl.NumberFormat('ru-RU').format(item.price_secondary) + ' сом';

    let currencySpan = document.createElement('span');
    currencySpan.className = 'price_primary_currency';
    currencySpan.innerText = ' сом';

    priceContainer.appendChild(primaryPriceElement);
    primaryPriceElement.appendChild(currencySpan);
    priceContainer.appendChild(secondaryPriceElement);
  });
}
