document.addEventListener('DOMContentLoaded', function () {
  let likeButtons = document.querySelectorAll('.item__customization_like');
  const likeButton = (event, button, absenceButton) => {
    event.preventDefault();
    let pathButton = button.querySelector('path');
    let pathabsenceButton = absenceButton.querySelector('path');
    if (pathabsenceButton.style.fill === 'rgb(203, 17, 171)') {
      pathabsenceButton.style.fill = '#000';
      pathButton.style.fill = '#000';
      pathabsenceButton.style.fill = '#000';
      pathButton.style.fill = '#000';
    } else {
      pathabsenceButton.style.fill = '#cb11ab';
      pathButton.style.fill = '#cb11ab';
      pathabsenceButton.style.fill = '#cb11ab';
      pathButton.style.fill = '#cb11ab';
    }
  };
  likeButtons.forEach(function (button) {
    let itemId;
    let absenceButton;
    let cartItem = button.closest('.form__cart__item');
    if (cartItem) itemId = cartItem.dataset.id;
    let absenceItem = document.querySelector(`.form__absence__item[data-id="${itemId}"]`);
    if (absenceItem) absenceButton = absenceItem.querySelector('.item__customization_like');
    button.addEventListener('click', function (event) {
      likeButton(event, button, absenceButton);
    });
    absenceButton?.addEventListener('click', function (event) {
      likeButton(event, button, absenceButton);
    });
  });
});
