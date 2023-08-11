//{ calculate } import './calculator';

// TODO: Faire la manipulation du DOM dans ce fichier
//we start
const showResult = document.getElementById('calcul');
const bigInput = document.getElementById('input');
//this var exist in the first part of calculator, for show the result

//place of buttons 
const reset = document.getElementById('reset');
const clear = document.getElementById('clear');
const plusoumoins = document.getElementById('plusoumoins');
const percentage = document.getElementById('percentage');
const divideby = document.getElementById('divideby');
const btn7 = document.querySelectorAll('.digit')[0];
const btn8 = document.querySelectorAll('.digit')[1];
const btn9 = document.querySelectorAll('.digit')[2];
const btnX = document.getElementById('times');
const btn4 = document.querySelectorAll('.digit')[3];
const btn5 = document.querySelectorAll('.digit')[4];
const btn6 = document.querySelectorAll('.digit')[5];
const btnMoins = document.getElementById('minus');
const btn1 = document.querySelectorAll('.digit')[6];
const btn2 = document.querySelectorAll('.digit')[7];
const btn3 = document.querySelectorAll('.digit')[8];
const btnPlus = document.getElementById('plus');
const point = document.querySelector('.dot');
const btn0 = document.querySelectorAll('.digit')[9];
const egal = document.getElementById('equals');
// Add event listeners to buttons
btn0.addEventListener("click", function(){
    bigInput.value += 0;
});
btn1.addEventListener("click", function(){
    bigInput.value += 1;
});
btn3.addEventListener("click", function(){
    bigInput.value += 3;
});
btn4.addEventListener("click", function(){
    bigInput.value += 4;
});
btn5.addEventListener("click", function(){
    bigInput.value += 5;
});
btn6.addEventListener("click", function(){
    bigInput.value += 6;
});
btn7.addEventListener("click", function(){
    bigInput.value += 7;
});
btn8.addEventListener("click", function(){
    bigInput.value += 8;
});
btn9.addEventListener("click", function(){
    bigInput.value += 9;
});
//attribution the valeurs with btn
// bigInput.value = 0;
percentage = "%";
divideby = "/";
btnX = "x";
btnMoins = "-";
btnPlus = "+";
egal = "=";