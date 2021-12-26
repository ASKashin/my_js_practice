//Task1

let a1 = 8;
const out = document.querySelector('.out-1');

function t1() {
    out.innerText = a1;
}

document.querySelector('.b-1').onclick = t1;

//Task2

let a2 = 8;

function t2() {
    return a2
}

document.querySelector('.b-2').onclick = function () {

    document.querySelector('.out-2').innerText = t2();
    // типа по нажатию кнопки выполняется функция в которой вывод out-2 равен функции t2 в которой через return возвращается переменная a2? так читается?

}

//Task3

function t3(a, b) {
    return a * b;


}

document.querySelector('.b-3-1').onclick = function () {

    document.querySelector('.out-3-1').innerText = t3(3, 4);

}

document.querySelector('.b-3-2').onclick = function () {

    document.querySelector('.out-3-2').innerText = t3(5, 6);

}

//Task4

function t4(a) {
    return (new Date()).getFullYear() - a; //тут снова пришлось погуглить как получить текущий год, тяжело пока запомнить такие вещи сразу

}

document.querySelector('.b-4').onclick = function () {

    document.querySelector('.out-4').innerText = t4(1995);
}

//Task5

function t5(a) {
    return `Hello ${a}`;
}

document.querySelector('.b-5').onclick = function () {

    document.querySelector('.out-5').innerText = t5("Andrey");
}

//Task6

function t6(a, b) {
    // a = Math.ceil(a); // округление вверх. Округляет аргумент до ближайшего большего целого.
    // b = Math.floor(b);// округление вверх. Округляет аргумент до ближайшего меньшего целого.
    // return Math.floor(Math.random() * (b - a)) + a; //перепутал (a - b) и думаю че он мне всякуюхерню выдает
    // это с MDN прям подошло когда гуглил как взять рамномное число
    return Math.round(Math.random() * (b - a)) + a;
    // сначало не увел коменнтарий  про Math.round не особо понял чем отличаются
}

document.querySelector('.b-6').onclick = function () {

    document.querySelector('.out-6').innerText = t6(5, 12);
}

//Task7

function t7() {
    const a = 0;
    const b = 255;
    return `rgb(${Math.round(Math.random() * (b - a)) + a} , ${Math.round(Math.random() * (b - a)) + a},${Math.round(Math.random() * (b - a)) + a})`;
}

// console.log(t7);
document.querySelector('.b-7').onclick = function () {

    document.querySelector('.out-7').style.background = t7();
}

//Task8

function t8(a) {
    return a.trim(); // так я тут просто попробовал вывести "а" и все равно без пробелов че не так делаю?
}

document.querySelector('.b-8').onclick = function () {

    document.querySelector('.out-8').innerText = t8("   Hello    ");
}

//Task9

function t9(a) {
    return a % 2 === 0
}

t9(2);


//Task10

function t10(a, b) {
    if (a > b) {
        return a;
    }
        return b;
    }

document.querySelector('.b-10').onclick = function () {

    document.querySelector('.out-10').innerText = t10(9, 5);
}