// task1


function f1() {
    let num = document.querySelector('.i-1').value;
    const out1 = document.querySelector('.out-1');
    if (num == 4) {
        out1.innerText = true;
    } else {
        out1.innerText = false;
    }
}

document.querySelector('.b-1').onclick = f1;
// task2

let a21 = 1;
let a22 = 2;

function f2() {
    const out2 = document.querySelector('.out-2');
    if (a21 > a22) {
        out2.innerText = a21;
    } else {
        out2.innerText = a22;
    }
}

document.querySelector('.b-2').onclick = f2;

// task3
function f3() {
    let i31 = Number(document.querySelector('.i-31').value);
    let i32 = Number(document.querySelector('.i-32').value);
    const out3 = document.querySelector('.out-3');
    if (i31 > i32) {
        out3.innerText = i31;
    } else {
        out3.innerText = i32;
    }
}

document.querySelector('.b-3').onclick = f3;

// task4
function f4() {
    let i4 = Number(document.querySelector('.i-4').value);
    const out4 = document.querySelector('.out-4');
    let today = new Date(); // тут я на mdn глянул синтаксис и вроде как здесь получается текущая дата
    let year = today.getFullYear();// здесь мы из текущей даты забираем год
    if (i4 <= year - 18) {
        out4.innerText = 1;
    } else {
        out4.innerText = 0;
    }
}

document.querySelector('.b-4').onclick = f4;

// task5
function f5() {
    let i5 = document.querySelector('.i-5').value;
    const out5 = document.querySelector('.out-5');

    if (i5 < 0) {
        out5.innerText = 'm';
    } else if (i5 == 0) { // почему здесь если ставлю === не работает
        out5.innerText = 0;
    } else {
        out5.innerText = 1;
    }
}

document.querySelector('.b-5').onclick = f5;

// task6
function f6() {
    let i6 = document.querySelector('.i-6').value;
    const out6 = document.querySelector('.out-6');
    if (i6 % 2 == 0) {
        out6.innerText = 'even';
    } else {
        out6.innerText = 'odd';
    }
}

document.querySelector('.b-6').onclick = f6;

// task7
function f7() {
    let i71 = document.querySelector('.i-71').value;
    let i72 = document.querySelector('.i-72').value;
    const out7 = document.querySelector('.out-7');
    out7.innerText = i71 ** i72;

}

document.querySelector('.b-7').onclick = f7;

// task8
function f8() {
    const out8 = document.querySelector('.out-8');
    let sel = document.querySelector('.s-8').value;
    switch (sel) {
        case '1':
            out8.innerText = 'one';
            break;
        case '2':
            out8.innerText = 'two';
            break;
        case '3': //почему тут именно в кавычках должно быть? типа получаем не число а строку изначально?
            out8.innerText = 'three';
            break;
    }
}

document.querySelector('.b-8').onclick = f8;

// task9

// task10

// task11

// task12

// task13

// task14

// task15
