let a = 16;

// if (a > 19) {
//     // true

//     console.log('Yes');
// }else{
//     console.log('No');
// }

const button = document.querySelector('button');
const input = document.querySelector('.age');


// ()=>{} arrow function
button.onclick = () => {
    let num = +input.value;
    if (num >= 16 && num < 60) {
        console.log('Welcome!!!');
    } else if (num > 60) {
        console.log('Are you shure?')
    }
    else {
        console.log('Access Denid');
    }

    switch (num) {
        case 15:
            console.log('One more yera hold');
            break;
        case 16:
            console.log('Accesss Granted');
            break;
        default:
            console.log('OKKKK');
    }

    input.value = '';
}

let b = 5;

console.log(b > 3 && b < 7); //true
console.log(b == 3 || b == 7); //true