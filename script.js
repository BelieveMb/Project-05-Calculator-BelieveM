import { calculate } from './calculator.js';

// TODO: Faire la manipulation du DOM dans ce fichier
//we start
const showResult = document.getElementById('calcul');
const bigInput = document.getElementById('input');
//this var exist in the first part of calculator, for show the result
const btn = document.querySelectorAll('.digit');
// ours functions
function addPoint(){
    bigInput.value += '.';                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
    point.removeEventListener("click", addPoint);
}
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
    });
});

point.addEventListener("click", addPoint);
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
//percentage
//best operator, if on click in operator, we change de showresult
percentage.addEventListener("click", function(event){
    let calPercentage;
    calPercentage = bigInput.value / 100;
    showResult.innerHTML = bigInput.value + "/100";
    bigInput.value = calPercentage;
    event.preventDefault();
});
divideby.addEventListener("click", function(event){
    showResult.innerHTML = bigInput.value + "%";
    bigInput.value = "";
    event.preventDefault();
});
btnX.addEventListener("click", function(event){
    showResult.innerHTML = bigInput.value + "*";
    bigInput.value = "";
    event.preventDefault();
});
btnMoins.addEventListener("click", function(event){
    showResult.innerHTML = bigInput.value + "-";
    bigInput.value = "";
    event.preventDefault();
});
btnPlus.addEventListener("click", function(event){
    showResult.innerHTML = bigInput.value + "+";
    bigInput.value = "";
    event.preventDefault();
});

//last part egal
egal.addEventListener("click", function (event){
    event.preventDefault();
    if(bigInput.value){
        if(bigInput.value !== "Error, It's empty"){
            let Docalcul = showResult.innerHTML += bigInput.value;
            let reponse = eval(Docalcul);
            bigInput.value = reponse;
        }
    }else{
        bigInput.value = "Error, It's empty";
    }
});
// //create the btn 00 and btn delete
// const allBtn = document.querySelector(".buttons");
// //create div of btn delete
// const divDel = document.createElement("div");
// allBtn.appendChild(divDel); //divDel come the child of allbtn
// //create btn delete
// const btnDel = "<button type=\"submit\" id=\"btnDelId\">Del</button>";
// divDel.innerHTML = btnDel;
// //create div of btn 00
// const div00 = document.createElement("div");
// allBtn.appendChild(div00); //divDel come the child of allbtn
// const btn00 = "<button type=\"submit\" >00</button>";
// div00.innerHTML = btn00;

// //use the btnDel and btn00
// const btnDelId = document.getElementById("btnDelId");
