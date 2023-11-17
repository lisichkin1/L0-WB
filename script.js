document.addEventListener('DOMContentLoaded', function () {
  var dynamicText = document.querySelectorAll('.form__cart__item__price_primary');

  dynamicText.forEach(function (element) {
    var textLength = element.innerText.length;
    console.log(textLength);
    var fontSize = 20 - textLength * 0.3;
    if (textLength >= 8) {
      element.style.fontSize = fontSize + 'px';
    }
  });
});
