export const btnRead = document.querySelector('.division__button'); //кнопка для показа-скрытия текста
export const hideTxt = document.querySelector('.division__text-second'); // текст
export const hideBtn = document.querySelector('.division__button-open'); //показать-скрыть
export const buttonInit1 = document.querySelector('.windows-btn'); // Первая кнопка

export const textButton1 = document.querySelector('.windows-enable__element'); // Текст первой кнопки
export const hideItems1 = document.querySelectorAll('.swiper__hide_item'); // Скрытые элементы первого свайпера

export const buttonInit2 = document.querySelector('.windows-btn-two'); // Вторая кнопка
export const textButton2 = document.querySelector(
  '.windows-enable__element-two'
); // Текст второй кнопки
export const hideItems2 = document.querySelectorAll('.swiper__hide'); // Скрытые элементы второго свайпера

export const openBurger = document.querySelector('.navigation__item-logo-smlg'); //кнопка менюшки "открыть"
export const closeBurger = document.querySelector('.head__put-away'); //кнопка менюшки "закрыть"
export const aside = document.querySelector('.secret'); // окно меню

//обработчики для первого модального окна
export const toCall = document.querySelector('.navigation__item-logo-lg-call');
export const toCallSecret = document.querySelector('.contacts__logo-phone');
export const getPhone = document.querySelector('.modal-feed');
export const modalMenuPhone = document.querySelector('.modal-feedback');
export const modalMenuMessage = document.querySelector('.modal-connection');
export const modalClosePhone = document.querySelector('.modal-feedback__close');

//обработчики для второго модального окна
export const toMail = document.querySelector('.navigation__item-logo-lg-chat');
export const toMailSecret = document.querySelector('.contacts__logo-chat');
export const getMail = document.querySelector('.modal-connect');
export const modalCloseMail = document.querySelector(
  '.modal-connection__close'
);
