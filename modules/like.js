document.addEventListener('DOMContentLoaded', function () {
  let likeButtons = document.querySelectorAll('.item__customization_like');

  likeButtons.forEach(function (button) {
    button.addEventListener('click', function (event) {
      event.preventDefault();
      let path = button.querySelector('path');
      path.style.fill = '#cb11ab';
    });
  });
});
