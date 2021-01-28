// let a = 16;

// // if (a > 19) {
// //     // true

// //     console.log('Yes');
// // }else{
// //     console.log('No');
// // }

// const button = document.querySelector('button');
// const input = document.querySelector('.age');


// // ()=>{} arrow function
// button.onclick = () => {
//     let num = +input.value;
//     if (num >= 16 && num < 60) {
//         console.log('Welcome!!!');
//     } else if (num > 60) {
//         console.log('Are you shure?')
//     }
//     else {
//         console.log('Access Denid');
//     }

//     switch (num) {
//         case 15:
//             console.log('One more yera hold');
//             break;
//         case 16:
//             console.log('Accesss Granted');
//             break;
//         default:
//             console.log('OKKKK');
//     }

//     input.value = '';
// }

// let b = 5;

// console.log(b > 3 && b < 7); //true
// console.log(b == 3 || b == 7); //true




//For example 1

// let lang = document.querySelector('.age');
// let out = document.querySelector('.out');
// let btn = document.querySelector('button');
// let active = document.querySelector('active');

// btn.onclick = function () {
//     // if (lang.value == 'ru') {

//     //     out.innerHTML = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'].join(', ');



//     // }
//     // if (lang.value == 'en') {
//     //     out.innerHTML = ['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'].join(', ');
//     // }

//     // for ex.2 
//     switch (lang.value) {
//         case 'ru':
//             document.body.classList.remove('active_2');
//             document.body.classList.add('active');
//             out.innerHTML = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'].join(', ');
//             break;
//         case 'en':
//             document.body.classList.remove('active');
//             document.body.classList.add('active_2');
//             out.innerHTML = ['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'].join(', ');
//             break;
//         default:
//             out.innerHTML = 'Enter ru or en';
//     }
//     lang.value = '';

// };


//For example 2

// let num = document.querySelector('.age');
// let result = document.querySelector('.out');
// let btn = document.querySelector('button');

// btn.onclick = function () {
//     switch (+num.value) {
//         case 1:
//             result.innerHTML = 'зима';
//             break;
//         case 2:
//             result.innerHTML = 'весна';
//             break;
//         case 3:
//             result.innerHTML = 'осень';
//             break;
//         case 4:
//             result.innerHTML = 'лето';
//             break;
//         default:
//             result.innerHTML = 'Enter 1 , 2 , 3, or 4';

//     }
//     //num.value = '';
// }