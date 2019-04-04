// This is for button animation
var textrotate = document.getElementsByClassName('rotate');

var deg = 0;
var sign = 1;
var animate = setInterval(swing, 50);
function swing() {
    for(let i = 0; i < textrotate.length; i++){
    textrotate[i].style.transform = 'rotate(' + deg + 'deg)';
    if (deg > 5 ) {
        sign = -1;
    }
    else if (deg < -5) {
        sign = 1;
    }
    deg = deg + sign * 0.4;
}}


//This is the main event listener
var button = document.getElementById('btn');
button.addEventListener('click', startCounter);


/*following are the different functions required for startCounter(main event listener function)
-This is to count keyup for specified */

//KeyKeyS
var result1 = document.getElementById('result1');

var countS = 0;
function eventS() {
    if (event.code === 'KeyS') {
        countS += 1;
    }
    if (countS > 0) {
        result1.hidden = false;
        result1.innerHTML = countS ;
    }
}

// KeyL
var result2 = document.getElementById('result2');

var countL = 0;
function eventL() {
    if (event.code === 'KeyL') {
        countL += 1;
    }
    if (countL > 0) {
        result2.hidden = false;
        result2.innerHTML =  countL;
    }
}

//Tis is function to countdoun the time
function countDown(sec, elem) {
    let element = document.getElementById(elem);
    element.innerHTML = sec + ' s';
    sec--;
    let timer = setTimeout('countDown('+ sec + ',"' + elem + '")', 1000);
    if(sec < 1) {
        clearTimeout(timer);
    }
    
}

//This is to restart the game (optional)
var restartBtn = document.getElementById('restart');
restartBtn.addEventListener('click', reload);
function reload() {
    location.reload();
}

/* This is the main addEventListener fuction (startCounter) for 'click' event. 
-input value should be available after click function
-event listener for counts should be inside function
-and then set timeout to remove event listener for counts*/

var delay = 0;
function startCounter() {
    let timeField = document.getElementById("input").value;
    let delayNum = parseInt(timeField);
    let delay = delayNum * 1000; //need number for delay

        if (timeField.trim().length === 0){  
            alert ( "You need to enter time in seconds"); 
        }
        else{
            document.getElementById('countdown').hidden = false;
            countDown(delayNum, 'countdown');

            window.addEventListener('keyup', eventS);
            window.addEventListener('keyup', eventL);

            let stopGame = setTimeout(function(){
                var confettiSettings = { target: 'leftCanvas' };
                var confetti = new ConfettiGenerator(confettiSettings);
                confetti.render();
                
                var confettiSettings = { target: 'rightCanvas' };
                var confetti = new ConfettiGenerator(confettiSettings);
                confetti.render();

                document.getElementById('DrowText').hidden = false;
               
                if(countS === countL & countS > 0 & countL > 0) {
                    document.getElementById('leftCanvas').hidden = false;
                    document.getElementById('rightCanvas').hidden = false;
                    document.getElementById('DrowText').innerText = 'Game Draw';
                }

                else if(countS > countL) {
                    document.getElementById('leftCanvas').hidden = false;
                    document.getElementById('DrowText').hidden = false;
                    document.getElementById('DrowText').innerText = 'Key S is winner';
                }

                else if(countS < countL) { 
                    document.getElementById('rightCanvas').hidden = false;   
                    document.getElementById('DrowText').hidden = false;
                    document.getElementById('DrowText').innerText = 'Key L is winner';     
                } 
                else if(countS < 1 & countL < 1) {
                    document.getElementById('DrowText').innerText = 'Score is "0–0"';
                }   

                window.removeEventListener('keyup',eventS);
                window.removeEventListener('keyup',eventL);
                
                button.removeEventListener('click', startCounter);//Avoid countdown without restart
                
                document.getElementById('countdown').hidden = true; 
                document.getElementById('restart').hidden = false; //showing restart button after finishing game 
                //console.log(delay);  
        }, delay);
    }    
}