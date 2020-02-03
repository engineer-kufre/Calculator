let result = 0;

const result_p = document.getElementById('result');
const back_button = document.getElementById('back');
const cancel_button = document.getElementById('cancel');
const plusminus_button = document.getElementById('plusminus');
const sqrt_button = document.getElementById('sqrt');
const seven_button = document.getElementById('seven');
const eight_button = document.getElementById('eight');
const nine_button = document.getElementById('nine');
const divide_button = document.getElementById('divide');
const percent_button = document.getElementById('percent');
const four_button = document.getElementById('four');
const five_button = document.getElementById('five');
const six_button = document.getElementById('six');
const multiply_button = document.getElementById('multiply');
const inverse_button = document.getElementById('inverse');
const one_button = document.getElementById('one');
const two_button = document.getElementById('two');
const three_button = document.getElementById('three');
const subtract_button = document.getElementById('subtract');
const zero_button = document.getElementById('zero');
const point_button = document.getElementById('point');
const add_button = document.getElementById('add');
const equal_button = document.getElementById('equal');
const dayMode_button = document.getElementById('day');
const darkMode_button = document.getElementById('dark');

let str = '09876';

darkMode_button.addEventListener('click', function () {
    document.getElementById('body').classList.add('night');
})
dayMode_button.addEventListener('click', function () {
    document.getElementById('body').classList.remove('night');
})
back_button.addEventListener('click', function () {
    result_p.innerHTML = str.split('').slice(0, str.length - 1).join('');
})
cancel_button.addEventListener('click', function () {
    result_p.innerHTML = 0;
})
plusminus_button.addEventListener('click', function () {
    if (str[0] === '-') {
        result_p.innerHTML = str.split('').slice(1).join('');
    } else {
        let arr = str.split('');
        arr.unshift('-');
        result_p.innerHTML = arr.join('');
    }
})
sqrt_button.addEventListener('click', function () {
    if (str[0] === '-') {
        result_p.innerHTML = 'Invalid Input';
    } else {
        result_p.innerHTML = parseFloat(Math.sqrt(Number(str)).toFixed(12));
    }
})