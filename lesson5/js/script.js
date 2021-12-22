//Task1

const t1 = () => {
    let out1 = "";
    for (let i = 1; i <= 50; i++) {
        out1 += `${i} `;
    }
    document.querySelector('.out-1').innerText = out1;
}
document.querySelector('.b-1').onclick = t1;

// Task2

const t2 = () => {
    let out2 = "";
    for (let i = 2; i <= 122; i = i + 2) {
        out2 += `${i} `;
    }
    document.querySelector('.out-2').innerText = out2;
}
document.querySelector('.b-2').onclick = t2;

//Task3

const t3 = () => {
    let out3 = "";
    for (let i = 25; i >= 7; i--) {
        out3 += `${i} `;
    }
    document.querySelector('.out-3').innerText = out3;
}
document.querySelector('.b-3').onclick = t3;

//Task4

const t4 = () => {
    let out4 = "";
    for (let i = 77; i >= 35; i = i - 3) {
        out4 += `${i}_`;
    }
    document.querySelector('.out-4').innerText = out4;
}
document.querySelector('.b-4').onclick = t4;

//Task5

const t5 = () => {
    let out5 = "";
    for (let i = 1; i <= 17; i++) {
        if (i % 2 === 0) {
            out5 += `${i}**`;
        } else {
            out5 += `${i}*`;
        }
    }
    document.querySelector('.out-5').innerText = out5;
}
document.querySelector('.b-5').onclick = t5;

//Task6

const t6 = () => {
    const i6 = Number(document.querySelector('.i-6').value);
    let out6 = "";
    for (let i = 0; i < i6; i++) {
        out6 += '******' + '<br>';
    }
    document.querySelector('.out-6').innerHTML = out6;
}
document.querySelector('.b-6').onclick = t6;

//ох я тут и наебеался)))))

//Task7

const t7 = () => {
    const i7 = Number(document.querySelector('.i-7').value);
    let out7 = "";
    for (let i = i7; i >= 0; i--) {
        out7 += `${i} `;
    }
    document.querySelector('.out-7').innerText = out7;
}
document.querySelector('.b-7').onclick = t7;

//Task8

const t8 = () => {
    const i81 = Number(document.querySelector('.i-81').value);
    const i82 = Number(document.querySelector('.i-82').value);
    let out8 = "";
    for (let i = i81; i <= i82; i++) {
        out8 += `${i} `;
    }
    document.querySelector('.out-8').innerText = out8;
}
document.querySelector('.b-8').onclick = t8;

//Task9

const t9 = () => {
    const i91 = Number(document.querySelector('.i-91').value);
    const i92 = Number(document.querySelector('.i-92').value);
    let out9 = "";
    if (i91 > i92) {
        for (let i = i92; i <= i91; i++) {
            out9 += `${i} `;
        }
    } else {
        for (let i = i91; i <= i92; i++) {
            out9 += `${i} `;
        }
    }
    document.querySelector('.out-9').innerText = out9;
}
document.querySelector('.b-9').onclick = t9;

//Task10

const t10 = () => {
    let out10 = "";
    for (let i = 1950; i <= 2000; i = i + 2) {
        out10 += `${i} `;
    }
    document.querySelector('.out-10').innerText = out10;
}
document.querySelector('.b-10').onclick = t10;
// тут чет не понятно, задание аналогичное №2, может не так условия понял

//Task11

const t11 = () => {
    const elem = document.querySelectorAll('.div-11')
    let out11 = "";
    for (let i = 0; i < elem.length; i++) {
        // console.log(elem[i].value); // получаю каждый див
        out11 += `${elem[i].innerText} `; //вот тут пока дошло что нужно innerText думал сломаю мозг)))надеюсь правильно
    }
    document.querySelector('.out-11').innerHTML = out11;
}
document.querySelector('.b-11').onclick = t11;

//Task12

const t12 = () => {
    const elem = document.querySelectorAll('.div-12')
    let out11 = "";
    for (let i = 0; i < elem.length; i++) {
        // console.log(elem[i].value);
        elem[i].style.background = 'orange';
    }
}
document.querySelector('.b-12').onclick = t12;

//Task13

const t13 = () => {
    const elem = document.querySelectorAll('.i-13')

    for (let i = 0; i < elem.length; i++) {
        elem[i].value = i + 1;
    }
}
document.querySelector('.b-13').onclick = t13;



//Task14

const t14 = () => {
    const elem = document.querySelectorAll('.i-14')
    let out14 = "";
    for (let i = 0; i < elem.length; i++) {
        if (elem[i].checked) {
            out14 = elem[i].value;
        }
    }
    document.querySelector('.out-14').innerText = out14;
}
document.querySelector('.b-14').onclick = t14;


//Task15

const t15 = () => {
    const elem = document.querySelectorAll('.i-15')
    let out15 = "";
    for (let i = 0; i <=10; i++) {
            out15 += `${10 -i} ${i} `;

    }
    document.querySelector('.out-15').innerText = out15;
}
document.querySelector('.b-15').onclick = t15;