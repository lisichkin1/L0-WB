import { buttonCheckbox } from './checkbox.js';
import { result_price_f } from './price.js';

export function quantityProducts(data) {
  let itemContainers = document.querySelectorAll('.form__cart__item');
  let deliveryContainers = document.querySelectorAll('.form__delivery__way__item');
  let primaryDelivery = deliveryContainers[deliveryContainers.length - 2];
  let secondaryDelivery = deliveryContainers[deliveryContainers.length - 1];
  let primaryDeliveryImg = primaryDelivery.querySelectorAll('.form__delivery__way__item__img');
  let secondaryDeliveryImg = secondaryDelivery.querySelector('.form__delivery__way__item__img');

  data.forEach((item, index) => {
    let counter = item.quantity_order;
    let itemContainer = itemContainers[index];
    let imgContainer = primaryDeliveryImg[index];
    let quantityContainer = itemContainer.querySelector('.form__cart__item__quantity');
    let plusButton = itemContainer.querySelector('.form__cart__item__plus');
    let minusButton = itemContainer.querySelector('.form__cart__item__minus');
    let remains_count = itemContainer.querySelector('.remains__count');
    let quantitySpanElement = document.createElement('span');
    let secondary_quantitySpanElement = document.createElement('span');
    plusButton.addEventListener('click', function (event) {
      event.preventDefault();
      if (item.quantity_left === true || item.quantity_left === 'true') {
        counter++;
      } else {
        if (counter < item.quantity_order + item.quantity_left) {
          counter++;
        }
      }
      if (item.quantity_left !== true && counter >= item.quantity_order + item.quantity_left) {
        plusButton.disabled = true;
        minusButton.disabled = false;
        plusButton.style.color = '#00000033';
        minusButton.style.color = '#000000';
      }
      if (counter > 1) {
        minusButton.disabled = false;
        minusButton.style.color = '#000000';
      }

      quantityContainer.innerText = counter;
      if (item.quantity_left !== true) {
        remains_count.innerText = item.quantity_left + item.quantity_order - counter;
      }
      if ('february_5-6' in item && 'february_7-8' in item) {
        if (counter >= item.quantity_order) {
          quantitySpanElement.innerText = item['february_5-6'];
          secondary_quantitySpanElement.innerText = counter - item['february_5-6'];
        } else if (counter <= item['february_5-6']) {
          quantitySpanElement.innerText = counter;
        } else if (counter >= item['february_5-6']) {
          secondaryDelivery.style.display = 'flex';
          secondary_quantitySpanElement.innerText = counter - item['february_5-6'];
        }
      } else {
        quantitySpanElement.innerText = counter;

        if (counter > 1) {
          quantitySpanElement.style.display = 'inline';
        }
      }
      updatePrice(itemContainer, item, counter);
      result_price_f();
      buttonCheckbox();
    });

    minusButton.addEventListener('click', function (event) {
      event.preventDefault();
      if (item.quantity_left === true || item.quantity_left === 'true') {
        counter--;
      } else {
        if (counter > 0) {
          counter--;
        }
      }
      if (item.quantity_left !== true && counter == 1) {
        minusButton.disabled = true;
        plusButton.disabled = false;
        plusButton.style.color = '#000000';
        minusButton.style.color = '#00000033';
      }
      if (counter <= item.quantity_order + item.quantity_left) {
        plusButton.disabled = false;
        plusButton.style.color = '#000000';
      }
      quantityContainer.innerText = counter;
      if (item.quantity_left !== true) {
        remains_count.innerText = item.quantity_left + item.quantity_order - counter;
      }
      if ('february_5-6' in item && 'february_7-8' in item) {
        if (counter <= item.quantity_order - item['february_7-8']) {
          quantitySpanElement.innerText = counter;
          secondaryDelivery.style.display = 'none';
        } else {
          quantitySpanElement.innerText = item['february_5-6'];
          secondary_quantitySpanElement.innerText = counter - item['february_5-6'];
        }
      } else {
        quantitySpanElement.innerText = counter;
        if (counter <= 1) {
          quantitySpanElement.style.display = 'none';
        }
      }
      updatePrice(itemContainer, item, counter);
      result_price_f();
      buttonCheckbox();
    });

    quantityContainer.innerText = item.quantity_order;
    if (item.quantity_left !== true) {
      remains_count.innerText = item.quantity_left;
    }
    if ('february_5-6' in item && 'february_7-8' in item) {
      quantitySpanElement.innerText = item['february_5-6'];
      secondary_quantitySpanElement.innerText = item['february_7-8'];
      secondaryDeliveryImg.appendChild(secondary_quantitySpanElement);
      imgContainer.appendChild(quantitySpanElement);
    } else {
      quantitySpanElement.innerText = item.quantity_order;
      imgContainer.appendChild(quantitySpanElement);
      if (item.quantity_order <= 1) {
        quantitySpanElement.style.display = 'none';
      }
    }
    updatePrice(itemContainer, item, counter);
  });
  function updatePrice(itemContainer, item, counter) {
    let currencySpan = document.createElement('span');
    currencySpan.className = 'price_primary_currency';
    currencySpan.innerText = ' сом';

    let primaryPriceElement = itemContainer.querySelector('.form__cart__item__price_primary');
    let secondaryPriceElement = itemContainer.querySelector('.form__cart__item__price_secondary');

    let updatedPrimaryPrice = item.price_primary * counter;
    let updatedSecondaryPrice = item.price_secondary * counter;

    primaryPriceElement.innerText = Intl.NumberFormat('ru-RU').format(
      Math.round(updatedPrimaryPrice),
    );
    primaryPriceElement.appendChild(currencySpan);
    secondaryPriceElement.innerText =
      Intl.NumberFormat('ru-RU').format(Math.round(updatedSecondaryPrice)) + ' сом';
    updatePopupPrice(itemContainer, updatedPrimaryPrice, updatedSecondaryPrice);
  }
  function updatePopupPrice(itemContainer, updatedPrimaryPrice, updatedSecondaryPrice) {
    let discountValue = itemContainer.querySelector('.popup__discount__title__value');
    let discountNumber = itemContainer.querySelector('.popup__discount__value');
    let userDiscountValue = itemContainer.querySelector('.popup__user-discount__value');
    let discountPercent = Math.round(100 * (1 - updatedPrimaryPrice / updatedSecondaryPrice) - 10);
    let discountTen = Math.round(updatedSecondaryPrice / 10);
    let discountResult = Math.round(updatedSecondaryPrice - updatedPrimaryPrice - discountTen);

    discountValue.innerText = ' ' + discountPercent + '%';
    discountNumber.innerHTML = '&minus;' + discountResult + ' сом';
    userDiscountValue.innerHTML = '&minus;' + discountTen + ' сом';
  }
}
