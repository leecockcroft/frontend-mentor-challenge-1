const test = document.getElementById('test');
const emailValuetype = document.getElementById('emailValuetype');
const successText = document.querySelector('.successText')
const wrapper = document.querySelector('.wrapper');
const success_page = document.querySelector('.success_page');

const emailError = document.querySelector('.emailError')
const emailInputEl = document.getElementById('emailValuetype');
test.addEventListener('click', (e) => {
  e.preventDefault();

  const email = emailInputEl.value;


   var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (email.match(validRegex)) {

  successText.innerHTML = `A confirmation email has been sent to <strong>${email}</strong> Please open it and click the button inside to confirm your subscription.`;
  wrapper.style.display = 'none';
  success_page.style.display = 'flex';

}
else {
  // example of showing error
  const someErrorEl = document.querySelector(".someErrorEl");
  someErrorEl.style.display = "inline"

  return;
}
});
