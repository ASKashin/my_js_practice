//Task1
const t1 = () => {
    let out1 = "";
    let i = 0;
    while (i < 50) {
        i++;
        out1 += `${i} `;
    }

    document.querySelector('.out-1').innerText = out1;
}
document.querySelector('.b-1').onclick = t1;

//Task2

const t2 = () => {
    let out2 = "";
    let i = 2;
    while (i < 122) {
        out2 += `${i} `;
        i = i + 2;
    }

    document.querySelector('.out-2').innerText = out2;
}
document.querySelector('.b-2').onclick = t2;


//Task3

const t3 = () => {
    let out3 = "";
    let i = 25;
    while (i >= 7) {
        out3 += `${i} `;
        i--;
    }

    document.querySelector('.out-3').innerText = out3;
}
document.querySelector('.b-3').onclick = t3;

//Task4

const t4 = () => {
    let out4 = "";
    let i = 77;
    while (i >= 35) {
        out4 += `${i}_`;
        i = i - 3;
    }

    document.querySelector('.out-4').innerText = out4;
}
document.querySelector('.b-4').onclick = t4;

//Task5

const t5 = () => {
    let out5 = "";
    let i = 1;
    while (i <= 17) {
        if (i % 2 === 0) {
            out5 += `${i}_**`;
        } else {
            out5 += `${i}_*`;
        }
        i++;
    }

    document.querySelector('.out-5').innerText = out5;
}
document.querySelector('.b-5').onclick = t5;

//Task6

const t6 = () => {
    const i6 = document.querySelector('.i-6').value
    let out6 = "";
    let i = 1;
    while (i <= i6) {
        out6 += '******' + '<br>';
        i++;
    }
    document.querySelector('.out-6').innerHTML = out6;
}
document.querySelector('.b-6').onclick = t6;

//Task7

const t7 = () => {
    const i7 = Number(document.querySelector('.i-7').value);
    let out7 = "";
    let i = i7;
    while (i >= 0) {
        out7 += `${i} `;
        i--;
    }
    document.querySelector('.out-7').innerHTML = out7;
}
document.querySelector('.b-7').onclick = t7;

//Task8

const t8 = () => {
    const i81 = Number(document.querySelector('.i-81').value);
    const i82 = Number(document.querySelector('.i-82').value);
    let out8 = "";
    let i = i81;
    while (i <= i82) {
        out8 += `${i} `;
        i++;
    }
    document.querySelector('.out-8').innerHTML = out8;
}
document.querySelector('.b-8').onclick = t8;

//Task9

const t9 = () => {
    const i91 = Number(document.querySelector('.i-91').value);
    const i92 = Number(document.querySelector('.i-92').value);
    let out9 = "";
    if (i91 > i92) {
        let i = i92;
        while (i <= i91) {
            out9 += `${i} `;
            i++;
        }
    } else {
        let i = i91;
        while (i <= i92) {
            out9 += `${i} `;
            i++;
        }
    }
    document.querySelector('.out-9').innerHTML = out9;
}
document.querySelector('.b-9').onclick = t9;
//Task10

const t10 = () => {
    let out10 = "";
    let i = 1950;
    while (i <= 2000) {
        out10 += `${i} `;
        i = i + 2;
    }

    document.querySelector('.out-10').innerText = out10;
}
document.querySelector('.b-10').onclick = t10;

//Task11

const t11 = () => {
    const elem = document.querySelectorAll('.div-11');
    let out11 = "";
    let i = 0;
    while (i < elem.length) {
        out11 += `${elem[i].innerText} `;
        i++;
    }

    document.querySelector('.out-11').innerText = out11;
}
document.querySelector('.b-11').onclick = t11;

//Task12
const t12 = () => {
    const elem = document.querySelectorAll('.div-12');
    let i = 0;
    while (i < elem.length) {
        elem[i].style.background = 'orange';
        i++;
    }
}
document.querySelector('.b-12').onclick = t12;
//Task13


const t13 = () => {
    const elem = document.querySelectorAll('.i-13');
    let i = 0;
    while (i < elem.length) {
        elem[i].value = i + 1;
        i++;
    }
}
document.querySelector('.b-13').onclick = t13;

//Task14

const t14 = () => {
    const elem = document.querySelectorAll('.i-14');
    let out14 = "";
    let i = 0;
    while (i < elem.length) {
        if (elem[i].checked) {
            out14 = elem[i].value;
        }
        i++;
    }

    document.querySelector('.out-14').innerText = out14;
}
document.querySelector('.b-14').onclick = t14;

//Task15


const t15 = () => {
    let out15 = "";
    let i = 0;
    while (i <= 10) {
        out15 += `${ 10- i} ${i} `;
        i++;
    }
// тут хоть ит делал уже такое задание не сразу смог сделать
    document.querySelector('.out-15').innerText = out15;
}
document.querySelector('.b-15').onclick = t15;