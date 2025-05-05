import {
  buttonInit1,
  textButton1,
  hideItems1,
  buttonInit2,
  textButton2,
  hideItems2
} from '../js/variables';

// Функция для обработки клика по кнопке и применения изменений
function handleButtonClick(button, textElement, hideElements, initClass) {
  button.addEventListener('click', function () {
    hideElements.forEach((el) => el.classList.toggle(initClass));

    // Проверяем, все ли элементы с нужным классом содержат initClass
    const isHidden = Array.from(hideElements).every((item) =>
      item.classList.contains(initClass)
    );

    if (isHidden) {
      textElement.textContent = 'Скрыть';
    } else {
      textElement.textContent = 'Показать всё';
    }

    textElement.classList.toggle('windows-enable__element-rotate');
  });
}

// Применяем обработчик к первой кнопке
handleButtonClick(
  buttonInit1,
  textButton1,
  hideItems1,
  'swiper__hide_item_init'
);

// Применяем обработчик ко второй кнопке
handleButtonClick(buttonInit2, textButton2, hideItems2, 'swiper__hide_init');
