// Task 1
// При нажатии b-1 выполняете функцию f1. Функция должна вывести в out-1 значение сохраненное под ключем two из массива a1. Возвратите это значение.
// Первая задача дана в качестве примера.

const f1 = () => {
    const a1 = {
        "one": 15,
        "two": 16,
        "five": 20
    };
    document.querySelector('.out-1').innerText = a1.two;
}

document.querySelector('.b-1').onclick = f1;


// Task 2
// При нажатии b-2 выполняете функцию f2. Функция должна вывести в out-2 значение hi из массива a2. Возвратите это значение.
// Вывод, как и в предыдущем задании пишем "руками"


const f2 = () => {
    const a2 = {
        "one": "hello",
        "two": "mahai",
        "five": "hi"
    };

    document.querySelector('.out-2')

    return a2.five
}

document.querySelector('.b-2').onclick = () => {
    document.querySelector('.out-2').innerText = f2();
}


// Task 3
// При нажатии b-3 выполняете функцию f3. Функция должна вывести в out-3 значение hi из массива a3. Возвратите это значение. Вывод - через пробел.
// Вывод, как и в предыдущем задании пишем "руками"


const f3 = () => {
    const a3 = {
        "one": "hello",
        "two": "mahai",
        "five": "hi",
        "test": 21,
        "odd": "hi",
        "mix": "mix"
    };
    return `${a3.five} ${a3.odd}`
}
document.querySelector('.b-3').onclick = () => {
    document.querySelector('.out-3').innerText = f3();
}


// Task 4
// Давайте напишем функцию f4, которая будет выводить массив a4 в out-4 при нажатии кнопки b-4. Формат вывода - ключ пробел значение перенос строки +' <br>'.
// Функция должна возвращать строку в указанном формате вывода.
// Обратите внимание на пробел перед br!!!!!!!!!


const a4 = {
    "one": "hello",
    "two": "mahai",
    "five": "hi",
    "test": 21,
    "odd": "hi",
    "mix": "mix"
};

const f4 = () => {
    let out = "";
    for (let key in a4) {
        out += `${key} ${a4[key]} <br>`
    }
    return out;
}

document.querySelector('.b-4').onclick = () => {
    document.querySelector('.out-4').innerHTML = f4();
}

// Task 5
// Функция f4 жестко привязана к массиву a4. Это не удобно. Давайте напишем функцию f5,
// которая принимает массив как параметр и выводит его в формате указанном в функции в указанный блок (как второй параметр).


const f5 = (arr, block) => {
    let out = '';
    for (let key in arr) {
        out += `${key} : ${arr[key]} <br>`;
    }

    document.querySelector(block).innerHTML = out;
}


document.querySelector('.b-5').onclick = () => {
    const a5 = {
        "one": 1,
        "two": 2
    }
    f5(a5, '.out-5');
}


// Task 6
// Добавьте input .i-61 и i-62. При нажатии b-6 выполняете функцию f6.
// Функция должна получать из i-61 ключ, а из i-62 значение и добавлять его в массив a6.
// После этого, с помощью функции f5 выводите массив a6 в out-6.

const a6 = {
    "b": 17,
    "e": 22
};

const f6 = () => {
    let out = '';
    const i61 = document.querySelector('.i-61').value;
    a6[i61] = document.querySelector('.i-62').value;

    f5(a6, '.out-6');

    document.querySelector('.i-61').value = "";
    document.querySelector('.i-62').value = "";
}

document.querySelector('.b-6').onclick = f6;

// Task 7
// Добавьте input .i-7. При нажатии b-7 выполняете функцию f7. Функция должна получать из i-7 ключ. Если такой ключ есть в a7 то выводить 1 в out-7, если нет - 0.

const a7 = {
    "b": 17,
    "e": 22
};


const f7 = () => {
    const i7 = document.querySelector('.i-7').value;
    if (a7[i7]) {
        document.querySelector('.out-7').innerText = 1;
    } else {
        document.querySelector('.out-7').innerText = 0;
    }
}

document.querySelector('.b-7').onclick = f7;

// Task 8
// Добавьте input .i-8. При нажатии b-8 выполняете функцию f8. Функция должна выводить значение в out-8, если ключ введенный в i-8 есть в массиве, если нет - 0.

const a8 = {
    "b": 17,
    "e": 22
};

const f8 = () => {

    const i8 = document.querySelector('.i-8').value;
    for (let key in a8) {
        if (key === i8) {
            document.querySelector('.out-8').innerText = a8[key];
            break;
        } else {
            document.querySelector('.out-8').innerText = 0;
        }
    }

}

document.querySelector('.b-8').onclick = f8;

// Task 9
// Добавьте input .i-9. При нажатии b-9 выполняете функцию f9.
// Функция должна вывести в out-9 все ключи массива a9, которые содержат значение, равное значению в input.i-9.
// Вывод через пробел. Если значений - нет - то выводить пустую строку.

const a9 = {
    "b": 17,
    "e": 22,
    "j": 17,
    "k": 22,
    "d": 54
};

const f9 = () => {
    let out = "";
    const i9 = Number(document.querySelector('.i-9').value);
    for (let key in a9) {
        if (a9[key] === i9) {
            out += key;
            console.log(key);
        }
        document.querySelector('.out-9').innerText = out;
    }

}

document.querySelector('.b-9').onclick = f9;

// Task 10
// Давайте напишем полезную функцию f10, которая проверяет есть ли значение в ассоциативном массиве.
// Фукнция должна возвращать true если есть, и false если нет. Массив и значение передавать функции в качестве параметров.

const f10 = (arr, val) => {

    for (let key in arr) {
        return arr[key] === val;
    }
}

// тут я иди не все себе  пометил или чет лыжи не едут у меня)) 54 фолс тоже

document.querySelector('.b-10').onclick = () => {
    const a10 = {
        "k": 22,
        "d": 54,
        "m": 22,
    }
    document.querySelector('.out-10').innerHTML = String(f10(a10, 54));
};


// Task 11
// При нажатии b-11 выполняете функцию f11.
// Функция должна получить ключ из i-11 и удалить запись из массива a11 с таким ключем.
// После этого вывести массив в out-11. Для вывода используйте функцию f5.

const a11 = {
    "b": 17,
    "e": 22,
    "j": 17,
    "k": 22,
    "d": 54
};

const f11 = () => {

    delete a11[document.querySelector('.i-11').value];

    f5(a11, '.out-11');
}
document.querySelector('.b-11').onclick = f11;

// Task 12
//  При нажатии b-12 выполняете функцию f12. Функция должна получить значение из i-12 и удалить запись из массива a12 с таким значением.
//  После этого вывести массив в out-12. Для вывода используйте функцию f5.

const a12 = {
    "b": 17,
    "e": 22,
    "j": 17,
    "k": 22,
    "d": 17,
};

const f12 = () => {
    let out = '';
    const i12 = Number(document.querySelector('.i-12').value);

    for (let key in a12) {
        if (a12[key] === i12) {
            delete a12[key];
        }
    }
    f5(a12, '.out-12');
}

document.querySelector('.b-12').onclick = f12;

// Task 13
// При нажатии b-13 выполняете функцию f13. Функция должна в out-13 выводить сумму значений массива a13 (только числа).

const a13 = {
    'prim': 'hello',
    'one': 4,
    'testt': 'vodoley',
    'ivan': 6
};

const f13 = () => {

    let sum = 0;

    for (let key in a13) {
        if (typeof a13[key] === "number") {
            sum += a13[key];
        }
    }
    document.querySelector('.out-13').innerText = sum;
}

document.querySelector('.b-13').onclick = f13;

// Task 14
// При нажатии b-14 выполняете функцию f14. Функция должна в out-14 выводить нулевые (по индексу)  элементы вложенных массивов в a14. Вывод через пробел.
// Ожидаемый вывод - 1 3 6 9

const a14 = {
    'prim': [1, 2, 23],
    'one': [3, 4, 5],
    'testt': [6, 7, 8],
    'ivan': [9, 10]
};

const f14 = () => {
    for (let key in a14) {
        console.log(a14[key][0])
        document.querySelector('.out-14').innerHTML += `${a14[key][0]} `;
    }
}

document.querySelector('.b-14').onclick = f14;

// Task 15
// При нажатии b-15 выполняете функцию f15. Функция должна в out-15 выводить элементы вложенных массивов в a15. Вывод через пробел.

// т.е ожидаем 1 2 23 3 5 6 7 8 9 10

const a15 = {
    'prim': [1, 2, 23],
    'one': [3, 5],
    'testt': [6, 7, 8],
    'ivan': [9, 10]
};

const f15 = () => {
    let out = "";
    for (let key in a15) {
        a15[key].forEach(num => out += `${num} `)
    }
    document.querySelector('.out-15').innerText = out;
}

document.querySelector('.b-15').onclick = f15;

// Task 16
// При нажатии b-16 выполняете функцию f16. Функция должна в out-16 выводить элементы name вложенных массивов в a16. Вывод через пробел.
const a16 = {
    "iis8sj": {
        "name": "Ivan",
        "age": 27,
    },
    "iiss7j": {
        "name": "Petr",
        "age": 26,
    },
    "s3s8sj": {
        "name": "Serg",
        "age": 47,
    },
}

const f16 = () => {
    for (let key in a16) {
        console.log(a16[key].name)
        document.querySelector('.out-16').innerHTML += `${a16[key].name} `;
    }
}

document.querySelector('.b-16').onclick = f16;


// Task 17
// При нажатии b-17 выполняете функцию f17. Функция должна в out-17 выводить элементы name вложенных массивов в a17 для который age > 30. Вывод через пробел.

const a17 = {
    "iis8sj": {
        "name": "Ivan",
        "age": 27,
    },
    "iiss7j": {
        "name": "Petr",
        "age": 26,
    },
    "s3s8sj": {
        "name": "Serg",
        "age": 47,
    },
}

const f17 = () => {
    for (let key in a17) {

        if (a17[key].age > 30) {
            document.querySelector('.out-17').innerHTML += `${a17[key].name} `;
        }
    }
}

document.querySelector('.b-17').onclick = f17;

// Task 18
// При нажатии b-18 выполняете функцию f18.
// Функция должна в out-18 вывести станции метро из массива a18 той ветки, которую пользователь ввел в i-18.
// Вывод станций - через пробел. Если ветка не найдена выводите пустую строку.

const a18 = {
    "red": ['Akademmistechko', 'Nyvky', 'Universytet', 'Lisova'],
    "blue": ['Minska', 'Obolon', 'Pochaina', 'Holosiivska'],
    "green": ['Syrets', 'Zoloti Vorota', 'Klovska', 'Vidubichi']
}
const f18 = () => {
    const i18 = document.querySelector('.i-18').value;

    if (a18[i18]) {
        a18[i18].forEach(name => document.querySelector('.out-18').innerHTML += `${name} `);
    } else {
        document.querySelector('.out-18').innerText = 'такой ветки нет';
    }

}
document.querySelector('.b-18').onclick = f18;


// Task 19
// При нажатии b-19 выполняете функцию f19. Функция должна в out-19 вывести цвет ветки станции которую пользователь ввел в i-19.
// Пользователь может вводить текст как с большой, так и с маленькой буквы. Если ветка не найдена - выводите пустую строку.
// Пользователь ввел Lisova - вывод red, ввел Obolon - вывод blue.

const a19 = {
    "red": ['Akademmistechko', 'Nyvky', 'Universytet', 'Lisova'],
    "blue": ['Minska', 'Obolon', 'Pochaina', 'Holosiivska'],
    "green": ['Syrets', 'Zoloti Vorota', 'Klovska', 'Vidubichi']
}

const f19 = () => {

    const i19 = document.querySelector('.i-19').value.toLowerCase();

    for (let key in a19) {
       for ( let i = 0; i < a19[key].length; i++){
           if  (a19[key][i].toLowerCase()===i19){ //так тут надо разобраться точно правильно ли сделал или можно проще
               document.querySelector('.out-19').innerText= key;
           }
       }
    }
}

document.querySelector('.b-19').onclick = f19;

// Task 20
// При нажатии b-20 выполняете функцию f20. Функция должна в out-20 вывести название станции которые содержат переход на другую ветку.
// Такие станции маркируются 2. Вывод через пробел

const a20 = {
    "red": [['Akademmistechko', 1], ['Nyvky', 0], ['Universytet', 3], ['Lisova', 1]],
    "blue": [['Minska', 1], ['Obolon', 0], ['Pochaina', 2], ['Holosiivska', 0]],
    "green": [['Syrets', 1], ['Zoloti Vorota', 2], ['Klovska', 0], ['Vidubichi', 1]],
}

const f20 = () => {

    for (let key in a20) {
        for ( let i = 0; i < a20[key].length; i++){
            console.log(a20[key][i]);
            // if  (a20[key][i] === 2 ){
            //     document.querySelector('.out-19').innerText += `${a20[key]}`;
            }
        }
    }

}

document.querySelector('.b-20').onclick = f20
