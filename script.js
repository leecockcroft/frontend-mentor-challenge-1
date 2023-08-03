const test = document.getElementById('test');
const emailValuetype = document.getElementById('emailValuetype');
const successText = document.querySelector('.successText')
const wrapper = document.querySelector('.wrapper');
const success_page = document.querySelector('.success_page');
test.addEventListener('click',(e)=>{
e.preventDefault();
let input = emailValuetype.value;
successText.innerHTML=`A confirmation email has been sent to <strong>${input}</strong> Please open it and click the button inside to confirm your subscription.`
wrapper.style.display='none'
success_page.style.display='flex'
})
