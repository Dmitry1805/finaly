import { openBurger, closeBurger, aside } from '../js/variables';

//функция- "открыть меню"
const getBurer = function () {
  aside.classList.add('view');
};

//функция- "закрыть меню"
const loseBurger = function () {
  aside.classList.remove('view');
};

openBurger.addEventListener('click', getBurer); // обработчик события - открыть меню
closeBurger.addEventListener('click', loseBurger); // обработчик события - закрыть меню
