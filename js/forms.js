// Ex. 1

// let btn = document.querySelector('button');
// let one = document.querySelector('#one');
// let result = document.querySelector('.result');


// btn.onclick = () => {
//     result.innerHTML = 'Your answer is ' + ' " ' + one.value + ' " ';
//    btn.style.backgroundColor = one.value; // change button color
// }

// one.oninput = ()=>{
//     result.innerHTML = one.value;
// }


// Ex. 2

// let btn1 = document.querySelector('#btn-1');
// let btn2 = document.querySelector('#btn-2');
// let result = document.querySelector('.result');
// let check = document.querySelector('#check');


// btn1.onclick = () => {
//     console.log(result.innerHTML = check.value);
//     console.log(check.checked)
//     if (check.checked) {
//         result.innerHTML = 'Checked';
//     }
//     else {
//         result.innerHTML = 'Not checked';
//     }

// }

// Ex. 3

let btn2 = document.querySelector('#btn-2');
let result = document.querySelector('.result');

btn2.onclick = (event) => {
    event.preventDefault();
    // let text = document.querySelector('#two');
    // console.log(text);
    // result.innerHTML = text.value;
    //text.value = 'lorem as dasild jlaskjd laksdjals';

    let form = document.querySelector('form');
    console.log(form);
    console.log(form.elements.two.value);
    console.log(form.elements.three.value);
}



