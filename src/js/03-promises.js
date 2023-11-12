import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const refs = {
  form: document.querySelector('.form'),
};

refs.form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const userStep = Number(event.target.elements['step'].value);
  const userAmount = Number(event.target.elements['amount'].value);
  let delay = Number(event.target.elements['delay'].value);

  formHandler(delay, userStep, userAmount);
}

function formHandler(delay, userStep, userAmount) {
  for (let i = 1; i <= userAmount; i += 1) {
    createPromise(i, delay)
      .then(({ position, delay }) => {
        iziToast.success({
          message: `Fulfilled promise ${position} in ${delay}ms`,
        });
      })
      .catch(({ position, delay }) => {
        iziToast.error({
          message: `Rejected promise ${position} in ${delay}ms`,
        });
      });
    delay += userStep;
  }
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
