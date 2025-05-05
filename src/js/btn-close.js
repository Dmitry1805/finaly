import { btnRead, hideTxt, hideBtn } from '../js/variables';
function TextHide() {
  // --------- не импортировано
  hideTxt.classList.toggle('none');
  if (hideTxt.classList.contains('none')) {
    hideBtn.textContent = 'Читать далее';
  } else {
    hideBtn.textContent = 'Скрыть';
  }
}
btnRead.addEventListener('click', TextHide); // --------- не импортировано
