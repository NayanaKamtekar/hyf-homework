/*Part 1: Log out the text Called after 2.5 seconds 2.5 seconds after the script is loaded.*/

var logText = setTimeout(part1, 2500);
function part1() {
    console.log('Called after 2.5 seconds');
}



/*Part 2: Create a function that takes 2 parameters: delay and stringToLog. 
Calling this function should log out the stringToLog after delay seconds. 
Call the function you have created with some different arguments.*/

function logText1(delay, stringToLog) {
    let loadAfterTime = setTimeout(part2, delay);
    function part2() {
        console.log(stringToLog);
    }
}
logText1(4500, 'Called after 4.5 seconds');



/*Part 3: Create a button in html. When clicking this button, use the function you created in the previous task to log out the text:
3.5 seconds after button is clicked 3.5 seconds after the button is clicked.*/

var button = document.getElementById('btn');
button.addEventListener('click', function(){
    logText1(3500, 'Called after 3.5 seconds');//When passing parameter values, use an "anonymous function" that calls the specified function with the parameters:
});



/*Part 4: Create two functions and assign them to two different variables. One function logs out Earth, the other function logs out Saturn. 
Now create a new third function that has one parameter: planetLogFunction. The only thing the third function should do is call the 
provided parameter function. Try call the third function once with the Earth function and once with the Saturn function.*/

function earthFunc() {
    console.log('This is the Earth');
}
function saturnFunc() {
    console.log('This is the Saturn');
}
function thirdFunc(planetLogFunction) {
    planetLogFunction();
}
thirdFunc(saturnFunc);
thirdFunc(earthFunc);



/*Part 5: Create a button with the text called "Log location". When this button is clicked the location (latitude, longitude) of the user 
should be logged out using this browser api*/

var geoLocButton = document.getElementById('geolocbtn');
var geoLocDisplay = document.getElementById('geoloc');
function showPosition(position) {
    geoLocDisplay.innerHTML = "Latitude: " + position.coords.latitude + 
  "<br>Longitude: " + position.coords.longitude; 
}
 
geoLocButton.addEventListener('click', function(){
    navigator.geolocation.getCurrentPosition(showPosition);
});


/*Part 6:Optional Now show that location on a map using fx the Google maps api*/


/*Part 7: Create a function called runAfterDelay. It has two parameters: delay and callback. When called the function should wait delay 
seconds and then call the provided callback function. Try and call this function with different delays and different callback functions*/

function runAfterDelay(delay, callback) {
    let x = setTimeout(callback, delay); //first argument of the setTimeout shoud be function name, hence pass without ().
}
runAfterDelay(5000, earthFunc);


/*Part 8: Check if we have double clicked on the page. A double click is defined by two clicks within 0.5 seconds. 
If a double click has been detected, log out the text: "double click!"*/ 

function myFunction() {
    let element = document.getElementById('mainDiv')
    element.removeEventListener('click', myFunction);

    function logout() {
        console.log("You double-clicked!");
        element.removeEventListener('click', logout);
        //element.addEventListener('click', myFunction);
    }

    element.addEventListener('click', logout);

    setTimeout(function() {
        element.removeEventListener('click', logout);
        element.addEventListener('click', myFunction);            
    }, 500);
}

let bodyTag = document.getElementsByTagName('body');
let startClick = bodyTag[0].addEventListener('click', myFunction);



/* Part 9: Create a function called jokeCreator that has three parameters: shouldTellFunnyJoke - boolean, logFunnyJoke - 
function and logBadJoke - function. If you set tellFunnyJoke to true it should call the logFunnyJoke function that should 
log out a funny joke. And vice versa.*/

function funnyJoke() {
    console.log('A funny joke');
}

function badJoke() {
    console.log('A bad joke');
}

function jokeCreator(shouldTellFunnyJoke, logFunnyJoke, logBadJoke) {
    if (shouldTellFunnyJoke === true) {
        logFunnyJoke();
    }
    else {
        logBadJoke();
    }
}

jokeCreator(true, funnyJoke, badJoke);
jokeCreator(false, funnyJoke, badJoke);
