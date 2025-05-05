import {
  toCall,
  toCallSecret,
  getPhone,
  modalMenuPhone,
  modalMenuMessage,
  modalClosePhone,
  toMail,
  toMailSecret,
  getMail,
  modalCloseMail
} from '../js/variables';

const phone = function () {
  getPhone.classList.add('view');
};
const closePhone = function () {
  getPhone.classList.remove('view');
};

// событие,которое проверяет,был ли клик по модальному меню или по пустой области
getPhone.addEventListener('click', function (event) {
  const click = event.composedPath().includes(modalMenuPhone);
  if (!click) {
    closePhone();
  }
});

toCall.addEventListener('click', phone);
toCallSecret.addEventListener('click', phone);
modalClosePhone.addEventListener('click', closePhone);

//обработчики для второго модального окна
const btnMessage = function () {
  getMail.classList.add('view');
};

const closeMail = function () {
  getMail.classList.remove('view');
};

// событие,которое проверяет,был ли клик по модальному меню или по пустой области
getMail.addEventListener('click', function (event) {
  const click = event.composedPath().includes(modalMenuMessage);
  if (!click) {
    closeMail();
  }
});

toMail.addEventListener('click', btnMessage);
toMailSecret.addEventListener('click', btnMessage);
modalCloseMail.addEventListener('click', closeMail);
