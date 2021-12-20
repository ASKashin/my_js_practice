// task1


function f1() {
    const num =Number(document.querySelector('.i-1').value) ;
    const out1 = document.querySelector('.out-1');
    if (num == 4) {
        out1.innerText = true;
    } else {
        out1.innerText = false;
    }
}

document.querySelector('.b-1').onclick = f1;
// task2

const a21 = 1;
const a22 = 2;

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
    const i31 = Number(document.querySelector('.i-31').value);
    const i32 = Number(document.querySelector('.i-32').value);
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
    const i4 = Number(document.querySelector('.i-4').value);
    const out4 = document.querySelector('.out-4');
    const today = new Date(); // тут я на mdn глянул синтаксис и вроде как здесь получается текущая дата
    const year = today.getFullYear();// здесь мы из текущей даты забираем год
    if (i4 <= year - 18) {
        out4.innerText = 1;
    } else {
        out4.innerText = 0;
    }
}

document.querySelector('.b-4').onclick = f4;

// task5
function f5() {
    const i5 = Number(document.querySelector('.i-5').value) ;
    const out5 = document.querySelector('.out-5');

    if (i5 < 0) {
        out5.innerText = 'm';
    } else if (i5 === 0) {
        out5.innerText = 0;
    } else {
        out5.innerText = 1;
    }
}

document.querySelector('.b-5').onclick = f5;

// task6
function f6() {
    const i6 =Number(document.querySelector('.i-6').value) ;
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
    const i71 = document.querySelector('.i-71').value;
    const i72 = document.querySelector('.i-72').value;
    const out7 = document.querySelector('.out-7');
    out7.innerText = i71 ** i72;

}

document.querySelector('.b-7').onclick = f7;

// task8
function f8() {
    const out8 = document.querySelector('.out-8');
    const sel = document.querySelector('.s-8').value;
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
function f9() {
    const out9 = document.querySelector('.out-9');
    const i9 = Number(document.querySelector('.i-9').value) ;

    if (i9 > 0 && i9 < 33) {
        out9.innerText = 1;
    }

    else if (i9> 32 && i9<44){
        out9.innerText = 2;
    }
    else if (i9> 43 && i9<65){
        out9.innerText = 3;
    }
    else {
        out9.innerText = 0;
    }
}

document.querySelector('.b-9').onclick = f9;

// task10
function f10() {
    const out10 = document.querySelector('.out-10');
    out10.innerText = document.querySelector('.s-100').value;
}
document.querySelector('.b-10').onclick = f10;
// task11

//не очень понял что нужно сделать

// task12
function f12() {
    const out12 = document.querySelector('.out-12');
    const s120 = document.querySelector('.s-120').value;

    out12.innerText= typeof s120;
}
document.querySelector('.b-12').onclick = f12;

// это type string

// task13

function f13() {
    const out13 = document.querySelector('.out-13');
    const s130 = document.querySelector('.s-130').value;

    out13.innerText= typeof s130;
}
document.querySelector('.b-13').onclick = f13;
// это type string

// task14

function f14() {
    const i141 =Number(document.querySelector('.i-141').value) ;
    const i142 =Number(document.querySelector('.i-142').value) ;
    const s143 =document.querySelector('.s-143').value;
    const out14 = document.querySelector('.out-14');

    switch (s143) {
        case "+":
            out14.innerText = i141 + i142;
            break;
        case "-":
            out14.innerText = i141 - i142;
            break;
        case "*":
            out14.innerText = i141 * i142;
            break;
        case "/":
            out14.innerText = i141 / i142;
            break;
        default:
            break;
    }

}
document.querySelector('.b-14').onclick = f14;
// task15
function f15() {
    const s151 = Number(document.querySelector('.s-151').value) ;
    const s152 = Number(document.querySelector('.s-152').value ) ;
    const s153 =document.querySelector('.s-153').value;
    const out15 = document.querySelector('.out-15');

    switch (s153) {
        case "&&":
            out15.innerHTML = s151 && s152;
            break;
        case "||":
            out15.innerHTML = s151 || s152;
            break;
        default:
            break;
    }
}
document.querySelector('.b-15').onclick = f15;