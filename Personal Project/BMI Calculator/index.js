// 
const btnEl = document.getElementById("btn");
const bmiInputEL = document.getElementById("bmi")
const weightCondEl = document.getElementById("weight-status")

// BMI Calculation Formula
function calcBMI() {
const heightValue = document.getElementById("height").value / 100;
const weightValue = document.getElementById("weight").value;

const bmiValue = weightValue / (heightValue * heightValue);
bmiInputEL.value = bmiValue;

// Weight status conditions
if(bmiValue < 18.5){
    weightCondEl.innerText = ' Under Weight';
}else if(bmiValue >= 18.5 && bmiValue <= 24.9){
    weightCondEl.innerText = ' Normal Weight';
}else if(bmiValue >= 25 && bmiValue <= 29.9){
    weightCondEl.innerText = ' Over Weight';
}else if(bmiValue >= 30){
    weightCondEl.innerText = ' Obesity';
}
}
btnEl.addEventListener("click", calcBMI);