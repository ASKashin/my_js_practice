//Task1

const array1 = [1, 23, 'sdf', true, 'Ivan'];

const f1 = () => {
    document.querySelector('.out-1').innerText = array1;
}

document.querySelector('.b-1').onclick = f1

//Task2

const array2 = [1, 23, 'sdf', true, 'Ivan'];

const f2 = () => {
    let out = '';
    for (let i = 0; i < array2.length; i++) {
        out += array2[i] + ' ';
    }
    document.querySelector('.out-2').innerText = out;
}

document.querySelector('.b-2').onclick = f2;

//тут не мог понять что за шаблон и порылся в файликах типа вот так так должен выглядеть шаблон вывода массива
// отличия от Task -1 выводит без запятых, накапливает каждый элемент в переменную и выводит в out

//Task3

const array3 = [1, 23, 'sdf', true, 'Ivan'];

const f3 = () => {
    document.querySelector('.out-3').innerText = array3.length;
}

document.querySelector('.b-3').onclick = f3;

//Task4

const array4 = [1, 23, 'sdf', true, 'Ivan', 12, 54, false, 'Sergey', 123];

// document.querySelector('.out-4').innerText =`${array4[0]} ${array4[3]} ${array4[8]}`;


const f4 = () => {
    document.querySelector('.out-4').innerText = `${array4[0]} ${array4[3]} ${array4[8]}`;
}

document.querySelector('.b-4').onclick = f4;
// потом увидел что все задания в его шаблоне выводятся по нажатию кнопки

// Task 5


const array5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const f5 = () => {
    document.querySelector('.out-5').innerText = array5[0] + array5[2] + array5[3];
}

document.querySelector('.b-5').onclick = f5;

// Task 6

const array6 = ['Andrey', 'vodoley', 6, 2];

const f6 = () => {
    let out = '';
    for (let i = 0; i < array6.length; i++) {

        out += ` ${array6[i]} `;
    }

    document.querySelector('.out-6').innerText = out;

}

document.querySelector('.b-6').onclick = f6;

// Task 7

const array7 = ['china', 'india', 'brazil', 'japan', 'egypt'];

const f7 = () => {

    array7[7] = 'vietnam';
    array7[6] = 'turkey';
    array7[5] = 'turkey';
// тут не был уверен на 100 что прокатит добавление и после что выведет уже с ними
    let out = '';
    for (let i = 0; i < array7.length; i++) {
        out += `${array7[i]} `
    }

    document.querySelector('.out-7').innerText = out;
}

document.querySelector('.b-7').onclick = f7;

// Task 8


const array8 = [];

// const f8 = () => {
//     array7[3] = 3.14;
//     array7[4] = 17;
//     array7[6] = 5;
//     let out = '';
//     for (let i = 0; i < array8.length; i++){
//         out += `${array8[i]} `;
//     }
//     document.querySelector('.out-8').innerText = out;
//     document.querySelector('.out-8_1').innerText = array8.length;
//
// } вот это не прокатило как я по своей логике думал))

const f8 = () => {

    array8.splice(3, 0, 3.14, 17, 5);// п элементы должны были добавиться начиная с 3 индекса как я понял из документашки
    // тут я начал гуглить и все равно ничего не понял , думал что 0,1,2 элементы добавятся как пустые и они войдут в длинну массива, но чет пошо не по плану
    // array7[3] = 3.14;
    // array7[4] = 17;
    // array7[6] = 5;
    let out = '';
    for (let i = 0; i < array8.length; i++) {
        out += `${array8[i]} `;
    }
    document.querySelector('.out-8').innerText = out;
    document.querySelector('.out-8_1').innerText = array8.length;
}

// и видимо я что то не допонял потому что при повторном нажатии кнопки добавляются еще раз эти элементы
document.querySelector('.b-8').onclick = f8;
// не мправился с этим заданием

// Task 9


const array9 = [100, 200, 300, 400, 700, 121];

const f9 = () => {
    document.querySelector('.out-9').innerText = array9 [array9.length - 1];
}

document.querySelector('.b-9').onclick = f9;

// Task 10
// Выведите сумму первого (индекс 1) и последнего массива ar10 в блок out-10. Индекс последнего элемента массива не указывайте напрямую, а вычисляйте через длину массива.
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-10
// Вывод в out-10

const array10 = [100, 200, 300, 400, 700, 121];

const f10 = () => {

    // document.querySelector('.out-10').innerText = `${array10[1]} + ${array10 [array10.length - 1]}`; // не очень понял почему так не прокатило и вывелось просто как строка , тоже видимо до конца не допонял
    document.querySelector('.out-10').innerText = `${array10[1] + array10 [array10.length - 1]}`;
}

document.querySelector('.b-10').onclick = f10;


// Task 11

const array11 = [2, 3, 4, 5, 6, 7];

const f11 = () => {

    const a = array11[2];
    array11[2] = array11[4];
    array11[4] = a;
    let out = '';
    for (let i = 0; i < array11.length; i++) {
        out += `${array11[i]} `;
    }
    document.querySelector('.out-11').innerText = out;
}

document.querySelector('.b-11').onclick = f11;


// Task 12
// Напишите функцию f12, которая меняет местами нулевой и последний элемент массива ar12 и выводит его в out-12. Разделитель - пробел. Последний элемент вычислять через длину массива.


const array12 = ['test', 'west', 'list', 'class', 'best'];

const f12 = () => {

    const a = array12[0];
    array12[0] = array12[array12.length - 1];
    array12[array12.length - 1] = a;
    let out = '';
    for (let i = 0; i < array12.length; i++) {
        out += `${array12[i]} `;
    }
    document.querySelector('.out-12').innerText = out;
}

document.querySelector('.b-12').onclick = f12;

// Task 13
// Выведите массив ar13 в out-13 в формате индекс пробел значение пробел.
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-13
// Вывод в out-13
// Тест допустим массив [1,2,3] вывод:
//  0 1 1 2 2 3


const array13 = ['test', 'west', 'list', 'class', 'best'];

const f13 = () => {

    let out = '';
    for (let i = 0; i < array13.length; i++) {

        out += `${i} ${array13[i]} `
    }

    document.querySelector('.out-13').innerText = out;
}

document.querySelector('.b-13').onclick = f13;


// Task 14

const array14 = [1, 2, 3, 'hello', 66];

const f14 = () => {

    let out = '';
    for (let i = array14.length - 1; i >= 0; i--) { // не сразу добавил -1 и получал undefined
        out += `${array14[i]} `;
    }
    document.querySelector('.out-14').innerText = out;
}

document.querySelector('.b-14').onclick = f14;

// Task 15

const array15 = [0, 2, 5, -4, 6, 22, -9, -12, 8, 12, 13, 78];

const f15 = () => {

    let out = '';
    for (let i = 0; i < array15.length; i++) {
        if (array15[i] > 0) {
            out += `${array15[i]} `;
        }
    }
    document.querySelector('.out-15').innerText = out;
}

document.querySelector('.b-15').onclick = f15;

// Task 16
// Выполните перебор массива arr16. Четные элементы добавьте в массив ar16_even, нечетные в ar16_odd. Добавление в массив - по индексу, а не +=!!!!!. Протестируйте задачу на повторный запуск! Выведите ar16_odd в div.out-16-odd, а ar16_even в div.out-16-even. Разделитель - пробел.
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-16
// Вывод в out-16

const array16 = [0, 2, 5, -4, 6, 22, -9, -12, 8, 12, 13, 78];
const ar16_odd = [];
const ar16_even = [];

const f16 = () => {

}

document.querySelector('.b-16').onclick = f16;










// Task 17
// Используя цикл выведите в .out-17 количество элементов ar17, значение которых больше 3. Для расчета используйте цикл и переменную счетчик.
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-17
// Вывод в out-17

let ar17 = [3, 0, 2, 6, 0, 1, 3, 1, 9, 0, 2, 0];

function f17() {

}

document.querySelector('.b-17').onclick = f17;


// Task 18
// Используя цикл выведите в .out-18 максимальный элемент массива ar18.
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-18
// Вывод в out-18

let ar18 = [15, 24, 13, 78, 21, 4, 45, 67];

function f18() {

}

document.querySelector('.b-18').onclick = f18;


// Task 19
// Выведите в .out-19 индекс минимального элемента в массиве ar19
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-19
// Вывод в out-19

let ar19 = [15, 424, 313, 78, 241, 4, 45, 67];

function f19() {

}

document.querySelector('.b-19').onclick = f19;

// Task 20
// Выведите в .out-20 сумму элементов в массиве ar20
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-20
// Вывод в out-20

let ar20 = [4, 5, 6, 7, 8, 9, 10];

function f20() {

}

document.querySelector('.b-20').onclick = f20;