import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const localStorageKey = 'feedback-form-state';
const dataForm = {
  email: '',
  message: '',
};
const savedData = throttle(e => {
  dataForm[e.target.name] = e.target.value;
  localStorage.setItem(localStorageKey, JSON.stringify(dataForm));
}, 500);

form.addEventListener('input', savedData);

function refreshPage() {
  const newInput = localStorage.getItem(localStorageKey);
  const parsedNewInput = JSON.parse(newInput);
  if (parsedNewInput) {
    form.email.value = parsedNewInput.email;
    form.message.value = parsedNewInput.message;
  } else {
    form.email.value = '';
    form.message.value = '';
  }
}
refreshPage();

function onSubmit() {
  localStorage.clear();
}
form.addEventListener('submit', onSubmit);
