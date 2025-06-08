document.addEventListener('DOMContentLoaded', function () {
  const popup = document.getElementById('dev-popup');
  const buttons = document.querySelectorAll('.mc-btn');
  let popupTimeout;

  buttons.forEach(btn => {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      popup.classList.add('show');
      clearTimeout(popupTimeout);
      popupTimeout = setTimeout(() => {
        popup.classList.remove('show');
      }, 1500);
    });
  });
});