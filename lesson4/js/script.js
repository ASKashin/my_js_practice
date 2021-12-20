//Task1

document.querySelector('.b-1').onclick = () => {
    alert('Task-1')
};

//Task2
document.querySelector('.b-2').onclick = () => {
    alert('Task-2')
};

//Task3
document.querySelector('.p-3').onclick = () => {
    alert('И да, это он!!!')
};

//добавил в Р "1" чтобы было на что нажимать

//Task4
const out4 = document.querySelector('.out-4');
document.querySelector('.b-4').onclick = () => {
    const i4 = document.querySelector('.i-4');
    if (i4.checked) {
        out4.innerText = 'true';
    } else {
        out4.innerText = 'false';
    }
};

//Task5
const out5 = document.querySelector('.out-5');
document.querySelector('.b-5').onclick = () => {
    const i5 = document.querySelector('.i-5');
    if (i5.checked) {
        out5.innerText = i5.value;
    } else {
        out5.innerText = 'false';
    }
};
//Task6
const out6 = document.querySelector('.out-6');
document.querySelector('.b-6').onclick = () => {
    out6.innerText = document.querySelector('.i-6').value;
};
//Task7
const out71 = document.querySelector('.out-71');
const out72 = document.querySelector('.out-72');
document.querySelector('.b-7').onclick = () => {
    out71.innerText = document.querySelector('.i-7').value;
    // console.log(typeof document.querySelector('.i-7').value)
    if (Number(document.querySelector('.i-7').value.length) >= 6) {
        out72.innerText = 1;
    } else {
        out72.innerText = 0;
    }
};

//Task8
const out8 = document.querySelector('.out-8');
const out81 = document.querySelector('.out-81');

document.querySelector('.b-8').onclick = () => {
    out8.innerHTML = '<input class = i-81>';
    out8.innerHTML += '<button class = b-81>btn81</button>';
    function f81 () {
      out81.innerText = document.querySelector('.i-81').value;
    }
    document.querySelector('.b-81').onclick = f81;
    // вроде ниче сложного но поебаться пришлось прям норм с вчитыванием в задание)
}

//Task9
const out9 = document.querySelector('.out-9');
document.querySelector('.b-9').onclick = () => {
    const r9 = document.querySelector('.r-9');
    if (r9.checked) {
        out9.innerText = r9.value;
    } else {
        out9.innerText = 0;
    }
};

// тут по аналогии с checkbox
//Task10

//Task11

//Task12

//Task13

//Task14

//Task15

//Task16

//Task17

//Task18

//Task19

//Task20
