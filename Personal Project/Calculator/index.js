// CALCULATOR PROGRAM

const display = document.getElementById('display');

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay(){
    display.value = '';
}

function calculate(){
 try {
  display.value = eval(display.value);
  console.log(display.value);  
 } catch (error) {
    display.value = 'ERROR';
 }
}
    
    
    
