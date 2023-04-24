'use strict';

const backdropRef = document.querySelector('.js-backdrop');
const openBtnRef = document.querySelector('.js-modal-open');
const closeBtnRef = document.querySelector('.js-modal-close');

const handleOpenClick = () => {
  backdropRef.classList.add('is-open');
  closeBtnRef.addEventListener('click', handleClose);
  openBtnRef.removeEventListener('click', handleOpenClick);
};

const handleClose = () => {
  backdropRef.classList.remove('is-open');
  closeBtnRef.removeEventListener('click', handleClose);
  openBtnRef.addEventListener('click', handleOpenClick);
};

const onEscPress = event => {
  if (event.code === 'Escape') {
    handleClose();
  }
};

const handleCloseBackdrop = event => {
  if (event.target.classList.contains('backdrop')) {
    backdropRef.classList.remove('is-open');
    openBtnRef.addEventListener('click', handleOpenClick);
  }
};

openBtnRef.addEventListener('click', handleOpenClick);
backdropRef.addEventListener('click', handleCloseBackdrop);
document.addEventListener('keydown', onEscPress);
