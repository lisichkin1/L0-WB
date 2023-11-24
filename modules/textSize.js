import { processPriceProduct } from './priceProduct.js';
import { result_price_f } from './price.js';
import { quantityProducts } from './quantity.js';
import { hover } from './hover.js';
document.addEventListener('DOMContentLoaded', function () {
  fetch('data.json')
    .then((response) => response.json())
    .then((data) => {
      processPriceProduct(data);

      var dynamicText = document.querySelectorAll('.form__cart__item__price_primary');
      dynamicText.forEach(function (element) {
        var textLength = element.innerText.length;
        var fontSize = 20 - textLength * 0.3;
        if (textLength >= 8) {
          element.style.fontSize = fontSize + 'px';
        }
      });
      quantityProducts(data);
      result_price_f();
      hover();
    })
    .catch((error) => console.error('Error loading JSON:', error));
});
