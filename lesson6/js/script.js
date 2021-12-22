// Task1
const t1 = () => {
    let out1 = '';
    for (let i = 0; i < 3; i++) {
        for (let k = 0; k < 3; k++) {
            out1 += "*";
        }
        out1 += "_";
    }
    document.querySelector('.out-1').innerText = out1;
}
document.querySelector('.b-1').onclick = t1;

// Task2

const t2 = () => {
    let out2 = '';
    for (let i = 0; i < 3; i++) {
        out2 += `${i + 1} <br>`;
        for (let k = 0; k < 3; k++) {
            out2 += "*_";
        }
        out2 += "<br>";
    }
    document.querySelector('.out-2').innerHTML = out2;
}
document.querySelector('.b-2').onclick = t2;

// Task3

const t3 = () => {
    let out3 = '';
    for (let i = 0; i < 4; i++) {
        for (let k = 0; k < 3; k++) {
            out3 += "*_";
        }
        out3 += "<br>";
    }
    document.querySelector('.out-3').innerHTML = out3;
}
document.querySelector('.b-3').onclick = t3;

// Task4

const t4 = () => {
    let out4 = '';
    for (let i = 1; i <= 3; i++) {
        out4 += `${i}_`;
        for (let k = 1; k <= 5; k++) {
            out4 += `${k} `;
        }
    }
    document.querySelector('.out-4').innerHTML = out4;
}
document.querySelector('.b-4').onclick = t4;

// Task5

const t5 = () => {
    let out5 = '';
    for (let i = 0; i < 3; i++) {

        for (let k = 0; k < 6; k++) {
            if (k % 2 === 0) {
                out5 += 1
            } else {
                out5 += 0
            }
        }
        out5 += "<br>";
    }
    document.querySelector('.out-5').innerHTML = out5;
}
document.querySelector('.b-5').onclick = t5;

// Task6

const t6 = () => {
    let out6 = '';
    for (let i = 0; i < 3; i++) {

        for (let k = 1; k <= 6; k++) {
            if (k % 3 === 0) {
                out6 += 'x'
            } else if (k % 2 === 0) {
                out6 += 0
            } else {
                out6 += 1
            }
        }
        out6 += "<br>";
    }
    document.querySelector('.out-6').innerHTML = out6;
}
document.querySelector('.b-6').onclick = t6;

// Task7

const t7 = () => {
    let out7 = '';
    for (let i = 1; i <= 5; i++) {

        for (let k = 0; k < i; k++) {
            out7 += '*';
        }
        out7 += "<br>";
    }
    document.querySelector('.out-7').innerHTML = out7;
}
document.querySelector('.b-7').onclick = t7;

// Task8

const t8 = () => {
    let out8 = '';
    for (let i = 5; i >= 1; i--) {

        for (let k = 0; k < i; k++) {
            out8 += '*';
        }
        out8 += "<br>";
    }
    document.querySelector('.out-8').innerHTML = out8;
}
document.querySelector('.b-8').onclick = t8;

// Task9

const t9 = () => {
    let out9 = '';
    for (let i = 1; i < 6; i++) {

        for (let k = 1; k <= i; k++) {
            out9 += `${k} `;
        }
        out9 += "<br>";
    }
    document.querySelector('.out-9').innerHTML = out9;
}
document.querySelector('.b-9').onclick = t9;

// Task10

const t10 = () => {
    let out10 = '';
    for (let i = 0; i < 6; i++) {
        for (let k = 1; k <= 10; k++) {
            if (k < 10) {
                out10 += `${i}${k} `;
            }
            else {
                out10 += `${k * (i + 1)} `;
            }
        }
        out10 += "<br>";
    }
    document.querySelector('.out-10').innerHTML = out10;
}
document.querySelector('.b-10').onclick = t10;
