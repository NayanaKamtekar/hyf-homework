// 3. (Main theme: Async API calls)
// Make an API call using the Fetch API. Make use of the following API: https://reqres.in/api/users
// Display the first_name of the first three users in the DOM

fetch('https://reqres.in/api/users')
.then((res) => res.json())
.then((obj) => {
    let ul = document.getElementById('ultag');
    console.log(obj);
    obj.data.forEach(element => {
        let li = document.createElement('li');
        li.innerHTML = element.first_name;
        ul.appendChild(li);
    });
});

//// 2. (Main theme: DOM manipulation)
// Using JavaScript, create a button and add it to the html (the document)
// When the button is clicked, insert an <img> tag to the html with a random image
let btn = document.createElement('button');
let bodyE = document.getElementsByTagName('body')[0];
btn.innerHTML ='Button';

bodyE.appendChild(btn);
btn.addEventListener('click', function(e){
    //let img = document.createElement('IMG');
    var oImg = document.createElement("img");
    oImg.setAttribute('src', './book.jpg');
    oImg.setAttribute('alt', 'na');
    oImg.setAttribute('height', '500px');
    oImg.setAttribute('width', '300px');
    document.body.appendChild(oImg);
});


// 1. (Main theme: Programming Basics)
// Write a function that logs to the console numbers 1 to 100.
// However, if the number is divisible by 3 it should log to the console "This is divisible by 3"
// If it's divisible by 5 it should log "This is divisible by 5"
// If it's divisible by both 3 and 5 it should log "Jackpot!"
// Hint: use the modulo operator (%) to figure out if two numbers are divisible. Make sure the remainder is 0.
// An example: 14 is divisible by 7, because 14 ÷ 7 = 2 exactly. 11 is not divisible by 7.

function numbers() {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 & i % 5 === 0){
            console.log('The number is ' + i + ' Jackpot!');
        }
        else if ( i % 3 === 0) {
            console.log('The number is ' + i + ' This is divisible by 3');
        }
        else if (i % 5 === 0){
            console.log('The number is ' + i + ' This is divisible by 5');
        }
    }
}
numbers()


