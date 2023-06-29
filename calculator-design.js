let btn_one = document.querySelector('.num-btn-1');
let btn_two = document.querySelector('.num-btn-2');
let btn_three = document.querySelector('.num-btn-3');
let btn_four = document.querySelector('.num-btn-4');
let btn_five = document.querySelector('.num-btn-5');
let btn_six = document.querySelector('.num-btn-6');
let btn_seven = document.querySelector('.num-btn-7');
let btn_eight = document.querySelector('.num-btn-8');
let btn_nine = document.querySelector('.num-btn-9');
let btn_zero = document.querySelector('.num-btn-0');
let plus = document.querySelector('.opr-btn-add');
let del = document.querySelector('.opr-btn-delete');
let minus = document.querySelector('.opr-btn-subtract');
let multiply = document.querySelector('.opr-btn-multiply');
let divide = document.querySelector('.opr-btn-divide');
let equal = document.querySelector('.opr-btn-equal');
let display = document.querySelector('.display');

btn_one.addEventListener('click', () => {
  if ((display.value.length>=10) == true){
    console.log('limit');
  }
  else {
    display.value += '1';
  }
})
btn_two.addEventListener('click', () => {
  if ((display.value.length>=10) == true){
    console.log('limit');
  }
  else {
    display.value += '2';
  }
})
btn_three.addEventListener('click', () => {
  if ((display.value.length>=10) == true){
    console.log('limit');
  }
  else {
    display.value += '3';
  }
})
btn_four.addEventListener('click', () => {
  if ((display.value.length>=10) == true){
    console.log('limit');
  }
  else {
    display.value += '4';
  }
})
btn_five.addEventListener('click', () => {
  if ((display.value.length>=10) == true){
    console.log('limit');
  }
  else {
    display.value += '5';
  }
})
btn_six.addEventListener('click', () => {
  if ((display.value.length>=10) == true){
    console.log('limit');
  }
  else {
    display.value += '6';
  }
})
btn_seven.addEventListener('click', () => {
  if ((display.value.length>=10) == true){
    console.log('limit');
  }
  else {
    display.value += '7';
  }
})
btn_eight.addEventListener('click', () => {
  if ((display.value.length>=10) == true){
    console.log('limit');
  }
  else {
    display.value += '8';
  }
})
btn_nine.addEventListener('click', () => {
  if ((display.value.length>=10) == true){
    console.log('limit');
  }
  else {
    display.value += '9';
  }
})
btn_zero.addEventListener('click', () => {
  if ((display.value.length>=10) == true){
    console.log('limit');
  }
  else {
    display.value += '0';
  }
})
plus.addEventListener('click', () => {
  if ((display.value.length>=10) == true){
    console.log('limit');
  }
  else {
    display.value += '+';
  }
})
minus.addEventListener('click', () => {
  if ((display.value.length>=10) == true){
    console.log('limit');
  }
  else {
    display.value += '-';
  }
})
multiply.addEventListener('click', () => {
  if ((display.value.length>=10) == true){
    console.log('limit');
  }
  else {
    display.value += '*';
  }
})
divide.addEventListener('click', () => {
  if ((display.value.length>=10) == true){
    console.log('limit');
  }
  else {
    display.value += '/';
  }
})
del.addEventListener('click', () => {
    display.value = display.value.slice(0, -1);
})
equal.addEventListener('click', () => {
  try{
    display.value = eval(display.value);
  }
  catch(err) {
    console.log(err);
    createElement();
    setTimeout(() => {
      removeElement();
    }, 3000);
  }
  
})
let error = document.querySelector('.error_box');
function createElement() {
  let error_msg = document.createElement('p');
  error_msg.classList.add('error');
  error_msg.textContent = 'Error';
  error.appendChild(error_msg);
}
function removeElement() {
  let error_msg = document.querySelector('.error');
  error_msg.remove();
}