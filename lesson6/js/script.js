// Task1
const t1 = () =>{
    let out1 = '';
    for (i = 0; i < 3; i++){
        for(k=0;k<3;k++){
            out1 += "*";
        }
        out1 += "_";
    }
    document.querySelector('.out-1').innerText = out1;
}
document.querySelector('.b-1').onclick = t1;

// Task2

const t2 = () =>{
    let out2 = '';
    for (i = 0; i < 3; i++){
        out2 += "1" + "<br>";
        for(k = 0; k < 3; k++){
            out2 += "*_";
        }
        out2 += "<br>";
    }
    document.querySelector('.out-2').innerHTML = out2;
}
document.querySelector('.b-2').onclick = t2;

// Task3

const t3 = () =>{
    let out3 = '';
    for (i = 0; i < 4; i++){
        // out2 += "1" + "<br>";// тоже самое что и предыдущее заданое даже легче оказалось
        for(k = 0; k < 3; k++){
            out3 += "*_";
        }
        out3 += "<br>";
    }
    document.querySelector('.out-3').innerHTML = out3;
}
document.querySelector('.b-3').onclick = t3;

// Task4

const t4 = () =>{
    let out4 = '';
    for (i = 1; i <= 3; i++){
         out4 +=`${i}_`;
        for(k = 1; k <=5; k++){
            out4 +=`${k} `;
        }
    }
    document.querySelector('.out-4').innerHTML = out4;
}
document.querySelector('.b-4').onclick = t4;

// Task5

const t5 = () =>{
    let out5 = '';
    for (i = 1; i <= 3; i++){

        for(k = 0; k <6; k++){
            if(k % 2 ===0){  //тут я даже немного погуглил не сразу дошло прям что можно так сделать
                out5 += 1}
            else {
                out5 += 0
            }
        }
        out5 +="<br>";
    }
    document.querySelector('.out-5').innerHTML = out5;
}
document.querySelector('.b-5').onclick = t5;

// Task6

const t6 = () =>{
    let out6 = '';
    for (i = 1; i <= 3; i++){

        for(k = 0; k <6; k++){ // эта задача просто сломала мне мозг, пытаюсь так же делением проверить но нихера не выходит
            if(k % 2 ===0){
                out6 += 1}
            else {
                out6 += 0
            }
        }
        out6 +="<br>";
    }
    document.querySelector('.out-6').innerHTML = out6;
}
document.querySelector('.b-6').onclick = t6;

// Task7

const t7 = () =>{
    let out7 = '';
    for (i = 1; i <= 3; i++){

        for(k = 0; k <6; k++){
            if(k % 2 ===0){
                out67+= 1}
            else {
                out7 += 0
            }
        }
        out7 +="<br>";
    }
    document.querySelector('.out-7').innerHTML = out7;
}
document.querySelector('.b-7').onclick = t7;

// Task8

// Task9

// Task10