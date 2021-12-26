//Task1

function f1() {
    const out1 = document.querySelector('.out-1');
    out1.style.width = '200px';
    out1.style.height = '40px';
}

document.querySelector('.b-1').onclick = f1;

//Task2

function f2() {
    const out2 = document.querySelector('.out-2');
    out2.classList.add('bg-2');
}

document.querySelector('.b-2').onclick = f2;

//Task3

function f3() {
    const out3 = document.querySelector('.out-3');
    out3.classList.remove('bg-3');
}

document.querySelector('.b-3').onclick = f3;

//Task4

const out4 = document.querySelector('.out-4');

//вынес за пределы функции чтобы сделать Task-5
function f4() {

    out4.classList.toggle('bg-4'); // по заданию не понятно какие стили для bg-4 я на свое усмотрение сделал
}

document.querySelector('.b-4').onclick = f4;

//Task5

function f5() {
    const out5 = document.querySelector('.out-5');

    out5.innerText = out4.classList.contains('bg-4');

}

document.querySelector('.b-5').onclick = f5;

//Task6

const out6 = document.querySelector('.out-6');

function f6() {
    const num = document.querySelectorAll('.p-6');
    out6.innerText = num.length;
//тут вродле выводит но не уверен что именно  так надо было делать
}

document.querySelector('.b-6').onclick = f6;

//Task7

function f7() {
    const out7 = document.querySelectorAll('.out-7');
    for (let i = 0; i < out7.length; i++) {
        out7[i].classList.add('bg-7');
    }
}

document.querySelector('.b-7').onclick = f7;

//Task8

function f8() {
    const out8 = document.querySelectorAll('.out-8');
    for (let i = 0; i < out8.length; i++) {
        out8[i].classList.toggle('bg-8');
    }
}

document.querySelector('.b-8').onclick = f8;

//Task9

const out9 = document.querySelectorAll('.out-9');

for (let i = 0; i < out9.length; i++) {
    out9[i].onclick = f9;
}

function f9() {
    this.classList.add('bg-9');
    //this  я если правильно понял то типа сделать это на элементе на котором происходит событие в нашем случае onclick
}

//Task10

const out10 = document.querySelectorAll('.out-10');

for (let i = 0; i < out10.length; i++) {
    out10[i].onclick = f10;
}

function f10() {
    this.classList.toggle('bg-10');
}

//Task11

function f11() {
    const div11 = document.createElement('div');
    div11.innerText = '25';
    document.querySelector('.out-11').append(div11);
}

document.querySelector('.b-11').onclick = f11;

//Task12

function f12() {
    const div12 = document.createElement('div');
    div12.innerText = '12';
    div12.classList.add('bg-12');
    document.querySelector('.out-12').append(div12);
}

document.querySelector('.b-12').onclick = f12;

//Task13

// const out13 = document.querySelector('.out-13');
function f13() {

    const div13 = document.createElement('div');
    div13.innerText = 'pushMe';
    div13.classList.add('bg-13');
    document.querySelector('.out-13').append(div13);
    div13.onclick = f13_1;

    function f13_1() {
        // let div13_1 = document.createElement('div');
        document.querySelector('.out-13-1').append(div13);
    }

//каккое то злаебучее задание условия ваще не понятные или я непрапвильно читаю
}

document.querySelector('.b-13').onclick = f13;

//Task14

function f14() {
    const div14 = document.createElement('div');
    div14.innerText = '14';
    div14.classList.add('bg-14');
    document.querySelector('.out-14').prepend(div14);
}

// не понял в чем разница с .append()
document.querySelector('.b-14').onclick = f14;

//Task15

function f15() {
    const div15 = document.createElement('div');
    div15.innerText = '15';
    div15.classList.add('bg-15');
    document.querySelector('.out-15').before(div15);
}

//добавляется типа просто перед дивом?
document.querySelector('.b-15').onclick = f15;

//Task16

function f16() {
    const div16 = document.createElement('div');
    div16.innerText = '16';
    div16.classList.add('bg-16');
    document.querySelector('.out-16').after(div16);
}

//мдобавляется типа после дива?
document.querySelector('.b-16').onclick = f16;

//Task17

function f17() {
    const div17 = document.createElement('div');
    div17.innerText = '17';
    div17.classList.add('bg-17');
    document.querySelector('.out-17').replaceWith(div17);

    //заменили на div17
}

document.querySelector('.b-17').onclick = f17;

//Task18

function f18() {
    document.querySelector('.out-18').innerText = document.querySelector('.p-18').getAttribute('data-b');

}

document.querySelector('.b-18').onclick = f18;

//Task19

function f19() {

    const p19 = document.querySelectorAll('.p-19');

    let pAtr = '';
    for (let i = 0; i < p19.length; i++) {

        pAtr += `${p19[i].getAttribute('data-b')} `;
    }
    document.querySelector('.out-19').innerText = pAtr;
}

// тут поебался, поставил += и не тупил почему после повторного нажатия плюсуются данные снова
document.querySelector('.b-19').onclick = f19;

//Task20
function f20() {
    const out20 = document.querySelector('.out-20');
    out20.setAttribute('title', "go")

}

document.querySelector('.b-20').onclick = f20;