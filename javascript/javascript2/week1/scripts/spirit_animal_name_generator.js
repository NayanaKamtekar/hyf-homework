//Spirit animal name generator
let spiritAnimalName = ["The Crying Butterfly", "The Furious Snail", "The Fullmoon Wolf", "The Cuddly Snake", "The Elegant Swan",
"The Courageous Lion", "The Cunning Fox", "The Hardworking Honeybee","The Loyal Dog"];
var button = document.getElementById("btn");
var selectedEventField = document.getElementById("chosenEvent");
var resultText = document.getElementById("result");
var nameField = document.getElementById("input");

function myFunction(){
    var name = nameField.value;
    var randomIndex = Math.floor(Math.random() * spiritAnimalName.length);
    if (name.trim().length === 0){  
        alert ( "You need to enter your name");
    }
    else{
        resultText.innerHTML =  name + " - " + spiritAnimalName[randomIndex];
    }
}
//Event types  
selectedEventField.addEventListener("change",function(){
    if (selectedEventField.value === 'click') {
        button.hidden = false;
        button.addEventListener('click', myFunction);
        resultText.removeEventListener('mouseover', myFunction);
        nameField.removeEventListener('input', myFunction);
    }
    else if (selectedEventField.value === 'mouseover') {
        resultText.addEventListener('mouseover', myFunction);
        button.hidden = true;
        button.removeEventListener('click', myFunction);
        nameField.removeEventListener('input', myFunction);
     }
     else if (selectedEventField.value === 'input') {
        nameField.addEventListener('input', myFunction);
        button.hidden = true;
        button.removeEventListener('click', myFunction);
        resultText.removeEventListener('mouseover', myFunction);
     }     
})
