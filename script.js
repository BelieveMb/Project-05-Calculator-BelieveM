import { calculate } from './calculator.js';

// TODO: Faire la manipulation du DOM dans ce fichier
//we start
const showResult = document.getElementById('calcul');
const bigInput = document.getElementById('input');
//this var exist in the first part of calculator, for show the result
//our functions
const btn = document.querySelectorAll('.digit');

//place of buttons
const reset = document.getElementById('reset');
const clear = document.getElementById('clear');
const plusoumoins = document.getElementById('plusoumoins');
const percentage = document.getElementById('percentage');
const divideby = document.getElementById('divideby');
const btnMoins = document.getElementById('minus');
const btnPlus = document.getElementById('plus');
const egal = document.getElementById('equals');
const point = document.querySelector('.dot');
const btnX = document.getElementById('times');

//reset variable
showResult.innerHTML ="";
bigInput.disabled = true;
// Recuperate and Add event  to buttons
btn.forEach(btnIndex => {
    btnIndex.addEventListener('click', function(){
        let btnContent = btnIndex.textContent;
        bigInput.value += btnContent;
        console.log(btnIndex.textContent);

    });
});
point.addEventListener("click", function(){
    bigInput.value += '.';
});
// Add event to operators
reset.addEventListener("click", function(){
    showResult.innerHTML = "";
    bigInput.value ="";
});
clear.addEventListener("click", function(){
    bigInput.value ="";
});
//add +/- on double click
plusoumoins.addEventListener("click", function(){
    let opposite = parseInt(bigInput.value) * -1;
    bigInput.value =  opposite; 
});
// plusoumoins.addEventListener("dblclick", function (){
//     bigInput.value = "5" + bigInput.value; 
// });
//change the submit of button
// percentage.setAttribute("type", "button");
// divideby.setAttribute("type", "button");
// btnX.setAttribute("type", "button");
// btnMoins.setAttribute("type", "button");
// btnPlus.setAttribute("type", "button");
// egal.setAttribute("type", "button");
//percentage
//best operator, if on click in operator, we change de showresult
percentage.addEventListener("click", function(){
    let calPercentage;
    calPercentage = bigInput.value / 100;
    showResult.innerHTML = bigInput.value + "/100";
    bigInput.value = calPercentage;
});
divideby.addEventListener("click", function(){
    showResult.innerHTML = bigInput.value + "/";
    bigInput.value = "";
});
btnX.addEventListener("click", function(){
    showResult.innerHTML = bigInput.value + "*";
    bigInput.value = "";
});
btnMoins.addEventListener("click", function(){
    showResult.innerHTML = bigInput.value + "-";
    bigInput.value = "";
});
btnPlus.addEventListener("click", function(){
    showResult.innerHTML = bigInput.value + "+";
    bigInput.value = "";
});
//last part egal
egal.addEventListener("click", function (){
    // bigInput.value ;
    let Docalcul = showResult.innerHTML += bigInput.value;
    let reponse = eval(Docalcul);
    bigInput.value = reponse;
});

