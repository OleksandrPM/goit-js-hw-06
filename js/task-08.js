const loginFormEl = document.querySelector('.login-form');

const user = {};

loginFormEl.addEventListener('submit', onLoginFormElSubmit);

function onLoginFormElSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === '' || password.value === '') {
    alert('Please, fill down all the fields!');
  } else {
    user.email = email.value;
    user.password = password.value;
    console.log(user);
    event.currentTarget.reset();
  }
}
