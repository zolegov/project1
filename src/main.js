const mobilModalClose = document.querySelector('.header-btn-close');
const mobilHeader = document.querySelector('.mobil-header');
const mobilModalWrap = document.querySelector('.mobil-modal-header-wrap');
const headerBtnOpen = document.querySelector('.header-btn-open');

headerBtnOpen.addEventListener('click', function () {
  mobilHeader.classList.add('is-close');
  mobilModalWrap.classList.remove('is-close');
  mobilModalWrap.classList.add('is-open');
});

mobilModalClose.addEventListener('click', function () {
  mobilHeader.classList.remove('is-close');
  mobilHeader.classList.add('is-open');

  mobilModalWrap.classList.add('is-close');
});
