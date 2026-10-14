// Минимальная логика: открытие и закрытие модального окна <dialog>.
// Сайт оценивается как HTML/CSS-проект, вся остальная интерактивность — только на CSS.
(function () {
  var openButtons = document.querySelectorAll('[data-modal-open]');
  var closeButtons = document.querySelectorAll('[data-modal-close]');

  openButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      var modal = document.getElementById(button.dataset.modalOpen);
      if (modal && typeof modal.showModal === 'function') {
        modal.showModal();
      }
    });
  });

  closeButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      var modal = button.closest('dialog');
      if (modal) {
        modal.close();
      }
    });
  });

  // Клик по затемнённому фону (вне содержимого) тоже закрывает окно
  document.querySelectorAll('dialog.modal').forEach(function (modal) {
    modal.addEventListener('click', function (event) {
      if (event.target === modal) {
        modal.close();
      }
    });
  });
})();
