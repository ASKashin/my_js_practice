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

    function f81() {
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

const out10 = document.querySelector('.out-10');
document.querySelector('.b-10').onclick = () => {
    out10.style.background = document.querySelector('.i-10').value;

};

//Task11
document.querySelector('.b-11').onclick = () => {
    // console.log(document.querySelector('.i-111').value);
    // console.log(document.querySelector('.i-112').value);
    document.querySelector('.i-112').value = document.querySelector('.i-111').value;

}

//Task12

const out12 = document.querySelector('.out-12');
document.querySelector('.b-12').onclick = () => {
    // console.log(document.querySelector('.i-12').value);
    out12.innerText = document.querySelector('.i-12').value;

};

//Task13
const out13 = document.querySelector('.out-13');
document.querySelector('.i-13').oninput = () => {
    out13.innerText = document.querySelector('.i-13').value;
};


//Task14
const out14 = document.querySelector('.out-14');
document.querySelector('.b-14').onclick = () => {
    out14.innerText = document.querySelector('.t-14').value;
};


//Task15
const out15 = document.querySelector('.out-15');
document.querySelector('.b-15').onclick = () => {
    const t15 = document.querySelector('.t-15');
    // тут пытался изначатьно получить значание и потом думал его подменить но не прокатило))
    const i15 = document.querySelector('.i-15').value;
    t15.innerText = i15;
    out15.innerText = i15;

};

//Task16
const out16 = document.querySelector('.out-16');
document.querySelector('.b-16').onclick = () => {
    out16.innerText = document.querySelector('.s-16').value;
}
;

//Task17
const out17 = document.querySelector('.out-17');

function f17() {
    out17.innerText = document.querySelector('.s-17').value;
}

document.querySelector('.s-17').onchange = f17;


//Task18
function f18() {
    document.querySelector('.i-18').value = document.querySelector('.s-18').value;
// думал что innerText нужен для инпута, но как видно ошибся, над тем где какие значения еще нужнго поработать
}

document.querySelector('.s-18').onchange = f18;

//Task19
const out19 = document.querySelector('.out-19');
document.querySelector('.b-19').onclick = () => {
    const i191 = document.querySelector('.i-191').value;
    const i192 = document.querySelector('.i-192').value;
    // console.log(i191);
    // console.log(i192);
    out19.innerText = i191 + ' ' + i192;
};

//Task20
const out20 = document.querySelector('.out-20');
document.querySelector('.b-20').onclick = (event) => {
    event.preventDefault();// тут типа я так понял изи за того что кнопка в форме то нужно для прописать чтобы форма не обновлялась
    const form = document.querySelector('.f-20');//получил форму
    // console.log(form)
    out20.innerText = form.elements.username.value +' '+form.elements.password.value ;
    //можно ли по классу обращаться к элементу формы или только по ID и name?
};
