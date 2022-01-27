// Task 1
//При нажатии .b-1 выполняете функцию f1. Функция перебирает массив a1  c помощью цикла for (let i. Выведите на страницу в .out-1 формате значение+пробел.

const a1 = [5, 7, 9, 11, 13, 15];

const f1 = () => {

    for (let i = 0; i < a1.length; i++) {
        document.querySelector('.out-1').innerHTML += `${a1[i]} `;
    }

}

document.querySelector('.b-1').addEventListener('click', f1);

// Task 2
//При нажатии .b-2 выполняете функцию f2. Функция перебирает массив a2  c помощью цикла for (let i. Выведите на страницу в .out-2 формате индекс+пробел+значение+пробел.

const a2 = [5, 7, 9, 11, 13, 15];

const f2 = () => {


    for (let i = 0; i < a2.length; i++) {
        document.querySelector('.out-2').innerHTML += `${i} ${a2[i]} `;
    }

}

document.querySelector('.b-2').addEventListener('click', f2);

// Task 3
//При нажатии .b-3 выполняете функцию f3. Функция получает div.out-3 со страницы с помощью getElementsByClassName и в каждый записывает число 3, перезаписывая содержимое div.

const f3 = () => {

    const out3 = document.getElementsByClassName('out-3');
    console.log(out3);
    for (let item of out3) { // for of выбрал потому что он перебирает сами элементы, ноперед этим попробовал всякое
        item.innerText = 3;
    }

    //тут что то не согу сообразить

}

document.querySelector('.b-3').addEventListener('click', f3);


// Task 4
//При нажатии .b-4 выполняете функцию f4. Функция получает div.out-4 со страницы с помощью querySelectorAll и в каждый дописывает число 4.

const f4 = () => {

    const out4 = document.querySelectorAll('div.out-4')
    console.log(out4);

    for (let item of out4) {
        item.innerText = 4;
    }

}

document.querySelector('.b-4').addEventListener('click', f4);

// Task 5
//При нажатии .b-5 выполняете функцию f5. Функция должна с помощью for of перебрать массив a5 и возвратить новый массив куда входят элементы из a5 большие 7.

const a5 = [3, 4, 5, 2, 1, 7, 8, 2, 4, 6, 8, 11, 23, 17];

const f5 = () => {
    let a55 = [];
    for (let item of a5) {
        if (item > 7) {
            a55 += `${item} `;
        }
        console.log(a55) //короче не могу сообразить массив это или нет
    } //тути я себе нмного голову поломал
    return a55;
}
document.querySelector('.b-5').addEventListener('click', () => {
    document.querySelector('.out-5').innerHTML = f5();
});

// Task 6
//При нажатии .b-6 выполняете функцию f6. Функция должна превратить массив a6 в одномерный. Результат вывести в out-6 через пробел.

const a6 = [[1, 2], [3, 4], [5, 6]];

const f6 = () => {

    for (let i = 0; i < a6.length; i++) {
        // console.log(a6[i]);
        for (let k = 0; k < a6[i].length; k++) {
            console.log(a6[i][k]); // тут я получаю каждый элемент но как его записать в a6 я чет не могу додумать
        }
    }

}

document.querySelector('.b-6').addEventListener('click', f6);

// Task 7
//При нажатии .b-7 выполняете функцию f7. Функция должна переиндексировать массив a7. Что имеется ввиду.
// Сейчас у нас обычный массив, который содержит вложенные объекты. Вам необходимо сделать из a7 объект,
// где ключи - значения id из вложенных массивов, а значения - имя (т.е { 23 : Ivan, 45 : Petr}. Функция должна возвращать результирующий массив.

const a7 = [{id: 23, name: 'Ivan'}, {id: 45, name: 'Petr'}];

const f7 = () => {
    let a77 = {};
    for (let i = 0; i < a7.length; i++) {
        a77 += `${a7[i].id}: ${a7[i].name} `;
    }
    return a77; // тут тоже мне не понятно, пологике като так должно быть
}

document.querySelector('.b-7').addEventListener('click', () => {
    console.log(f7());
});


// Task 8
//При нажатии .b-8 выполняете функцию f8. Функция должна переиндексировать массив a8. Что имеется ввиду.
// Сейчас у нас обычный массив, который содержит вложенные объекты. Вам необходимо сделать из a8 массив,
// который будет содержать только числовые id. Т.е. [23, 45]. Функция должна возвращать результирующий массив.

const a8 = [{id: 23, name: 'Ivan'}, {id: 45, name: 'Petr'}];

const f8 = () => {
    let a88 = [];
    for (let i = 0; i < a8.length; i++) {
        a88 += `${a8[i].id}, `; // пытался тут через unshift и тд но чет не пошло, и ту твсе равно не так делаю потому, вывод убогий получается какой то
    }
    return a88;
}

document.querySelector('.b-8').addEventListener('click', () => {
    console.log(f8());
});

// Task 9
//При нажатии .b-9 выполняете функцию f9. Функция должна возвращать в out-9 самый большой индекс из вложенных в a9 массивов.
// В данном случае это 4. Т.е. самый большой вложенный массив это [0,0,0,0,0], а в нем самый большой индекс 4.

const a9 = [[4, 3, 2], [2, 5], [0, 0, 0, 0, 0]];

const f9 = () => {

    let max = a9[0].length;
    for (let item of a9) {
        if (item.length > max) {
            max = item.length - 1; // тут затупил и сразу длинну выводил а не индекс
        }
    }
    return max;
}

document.querySelector('.b-9').addEventListener('click', () => {
    document.querySelector('.out-9').innerHTML = f9();
});

// Task 10
//При нажатии .b-10 выполняете функцию f10. Функция должна преобразовывать массив a10 в ассоциативный массив вида {4: 4, 6: 6, 9: 9, hello : "hello"} и возвращать полученный массив.

let a10 = [4, 6, 9, 'Hello'];

function f10() { // тут что то не особо понимаю как вообще

}

document.querySelector('.b-10').addEventListener('click', () => {
    console.log(f10());
});

// Task 11
//При нажатии .b-11 выполняете функцию f11. Функция должна c помощью for in перебрать объект a11 и вывести в out-11 только те значения, которые больше 10. Вывод - через пробел.

const a11 = {
    one: 11,
    two: 7,
    three: 13,
    four: 0
}

const f11 = () => {
    let out = '';
    for (let key in a11) {
        if (a11[key] > 10) {
            out += `${a11[key]} `;
        }
        document.querySelector('.out-11').innerText = out;
    }
}

document.querySelector('.b-11').addEventListener('click', f11);

// Task 12
//При нажатии .b-12 выполняете функцию f12. Функция должна c помощью for of перебрать a12 и вывести в out-12 через пробел.

const a12 = [4, 5, 6, 7];

const f12 = () => {
    for (let item of a12) {
        document.querySelector('.out-12').innerHTML += `${item} `;
    }
}
document.querySelector('.b-12').addEventListener('click', f12);

// Task 13
//При нажатии .b-13 выполняете функцию f13. Функция должна c помощью for of перебрать a13 и вывести по символу в out-13 через пробел.

const a13 = 'testone';

const f13 = () => {
    let a113 = "";
    for (let item of a13) {
        a113 += `${item} `; // тут я ваще не знал как сделать и ради прикола просто попробовал так
    }
    document.querySelector('.out-13').innerText = a113;

// console.log(a13.split(' ')); почему то думал что это тоже должно разбить
}

document.querySelector('.b-13').addEventListener('click', f13);


// Task 14
//При нажатии .b-14 выполняете функцию f14. Функция должна c помощью for of перебрать a14 и вывести по элементам в out-14 через пробел.

const a14 = new Set([4, 5, 6]);

const f14 = () => {
    let a114 = "";
    for (let item of a14) {
        a114 += `${item} `
    }
    document.querySelector('.out-14').innerText = a114;
}

document.querySelector('.b-14').addEventListener('click', f14);

// Task 15
//При нажатии .b-15 выполняете функцию f15. Функция должна получить NodeList элементов .out-15 c помощью document.querySelectorAll,
// затем c помощью for of перебрать полученную коллекцию элементов .out-15 записать внутрь них число 15 ( затерев содержимое).


const f15 = () => {

    const out15 = document.querySelectorAll('div.out-15');
    console.log(out15);
    for (let item of out15) {
        item.innerText = 15;
    }
}

document.querySelector('.b-15').addEventListener('click', f15);