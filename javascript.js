// const createe = document.createElement('div');
// const boddy = document.querySelector('body');
// boddy.append(createe);
// createe.style.height = '400px';
// createe.style.backgroundColor = 'orange'

const papan = document.querySelector('.papan');
const red = document.querySelector('.tim1');
const blue = document.querySelector('.tim2');

const button1 = document.querySelector('.red');
const button2 = document.querySelector('.blue');

const gett = document.querySelector('select')
const reset = document.querySelector('.reset')
// red.style.backgroundColor = 'red'
// blue.style.backgroundColor = 'blue'

// button1.style.backgroundColor = 'red'
// button2.style.backgroundColor = 'blue'

let add1 = 1;
let add2 = 1;
button1.addEventListener('click', () => {
    red.innerHTML = add1;
    const konsersi = parseInt(red.innerHTML);
    add1++;
    console.log(add1)
    if (add1 > gett.value) {
        button1.setAttribute('disabled', '');
        button2.setAttribute('disabled', '');
        red.style.color = '#48c774'
        blue.style.color = 'red'
    }
})

button2.addEventListener('click', () => {
    blue.innerHTML = add2;
    const k = parseInt(blue.innerHTML);
    add2++;
    console.log(add2)
    if (add2 > gett.value) {
        button1.setAttribute('disabled', '');
        button2.setAttribute('disabled', '');
        blue.style.color = '#48c774'
        red.style.color = 'red'
    }
})

reset.addEventListener('click', () => {
    button1.disabled = false;
    button2.disabled = false;
    add1 = 1;
    add2 = 1;
    red.innerHTML = 0;
    blue.innerHTML = 0;
    blue.style.color = ''
    red.style.color = ''
})
// gett.addEventListener('change', () => {
//     button1.disabled = false;
//     button2.disabled = false;
//     add1 = 1;
//     add2 = 1;
//     red.innerHTML = 0;
//     blue.innerHTML = 0;
//     blue.style.backgroundColor = ''
//     red.style.backgroundColor = ''
// })

