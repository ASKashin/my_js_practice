// task1
a = 7;
b = 9;
console.log(a * b);

// task2
c = 7;
d = 9;
document.querySelector('.out-2').innerHTML = c / d;

// task3
e = 3;
f = 5;
document.querySelector('.out-3').innerHTML = e + f;

// task4
e1 = '3';
f1 = 5;
document.querySelector('.out-4').innerHTML = e1 + f1;
//при сложении строки и числа, число обрабатывается как строка.

// task5
e2 = 3;
f2 = 0;
document.querySelector('.out-5').innerHTML = e2 / f2;
//получится бесконечность при делении на 0 в js

// task6
e3 = 3;
f3 = 'Hello';
document.querySelector('.out-6').innerHTML = e3 + f3;

// task7
e4 = 3;
f4 = 'Hello';
document.querySelector('.out-7').innerHTML = e4 * f4;
//NaN  так как в одной из переменных не число.

// task8
const input8 = document.querySelector('.i-8');
const btn8 = document.querySelector('.task-8');
btn8.onclick = () => {
    console.log(input8.value)
};

// task9
const input9 = document.querySelector('.i-9');
const btn9 = document.querySelector('.task-9');
btn9.onclick = () => {
    console.log(input9.value)
    input9.value = '';
};

// task10
const input10 = document.querySelector('.i-10');
const btn10 = document.querySelector('.task-10');
btn10.onclick = () => {
    console.log(input10.value * 10);
};

// task11
const input11 = document.querySelector('.i-11');
const btn11 = document.querySelector('.task-11');
const out11 = document.querySelector('.out-11');
btn11.onclick = () => {
    out11.innerHTML = +input11.value + 10;
};

// task12
const input12_1 = document.querySelector('.i-12_1');
const input12_2 = document.querySelector('.i-12-2');
const btn12 = document.querySelector('.task-12');
const out12 = document.querySelector('.out-12');
btn12.onclick = () => {
    out12.innerHTML = 'Hello ' + input12_1.value + ' ' + input12_2.value;

};

// task13
const input13_1 = document.querySelector('.i-13-1');
const input13_2 = document.querySelector('.i-13-2');
const btn13 = document.querySelector('.task-13');
const out13 = document.querySelector('.out-13');
btn13.onclick = () => {
    out13.innerHTML = +input13_1.value + +input13_2.value;
};

// task14
const input14 = document.querySelector('.i-14');
const btn14 = document.querySelector('.task-14');
btn14.onclick = () => {
    input14.value = 'Hello';
};
//тут не понял толи по нажатию кнопки должно меняться толи нет

// task15
const y = document.querySelector('.i-15');
y.style.border = '2px solid red';
//тут не понял толи по нажатию кнопки должно меняться толи нет

// task16
const input16_1 = document.querySelector('.i-16-1');
const input16_2 = document.querySelector('.i-16-2');
const btn16 = document.querySelector('.b-16');
const out16 = document.querySelector('.out-16');
btn16.onclick = () => {
    out16.innerHTML = +input16_1.value + +input16_2.value;
};

// task17
const input17 = document.querySelector('.i-17');
const btn17 = document.querySelector('.task-17');
const out17 = document.querySelector('.out-17');
btn17.onclick = () => {
    let t = input17.value;
    t = parseInt(t);
    out17.innerHTML = t;
};
// task18
const input18 = document.querySelector('.i-18');
const btn18 = document.querySelector('.task-18');
btn18.onclick = () => {
    let t = input18.value;
    t = parseFloat(t);
    console.log(t);

}
// task19
const input19_1 = document.querySelector('.i-19-1');
const input19_2 = document.querySelector('.i-19-2');
const btn19 = document.querySelector('.task-19');
const out19 = document.querySelector('.out-19');

btn19.onclick = () => {
    let t = +input19_1.value;
    t = parseInt(t);
    let y = +input19_2.value;
    y = parseInt(y);
    out19.innerHTML = t + y;
};

//тут не понял так нужно было сделать или без parseInt просто отрицательные числа

// task20
const input20_1 = document.querySelector('.i-20-1');
const input20_2 = document.querySelector('.i-20-2');
const input20_3 = document.querySelector('.i-20-3');
const input20_4 = document.querySelector('.i-20-4');
const btn20 = document.querySelector('.task-20');
const out20 = document.querySelector('.out-20');

btn20.onclick = () => {
    out20.innerHTML = 'Уважаемый ' + input20_1.value + ' ' + input20_2.value + ',' + ' ваш возраст '  + input20_3.value + ' года, по попрофессии вы ' + input20_4.value;
}

