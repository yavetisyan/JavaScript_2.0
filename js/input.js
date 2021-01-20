let a = 6;
let b = 'Hello';

console.log(a);

let inputIn = document.querySelector('.input-in');
let btn = document.querySelector('button');
let out = document.querySelector('.out');

btn.onclick = function () {
    let inputVal = +inputIn.value;
    console.log(inputVal);

    out.innerHTML = inputVal + 10;
    inputIn.value = '';

};