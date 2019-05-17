class Quiz {
    constructor (name) {
        this.name = name;
        this.score = 0;
    }

    getQuestions () {
        return fetch('https://gist.githubusercontent.com/NayanaKamtekar/6f600df19344e3e89cbd9dd23b418f3c/raw/a3cc6588049a68fb9545d86e03aca305681102d4/exercise_quiz.json')
        .then(res => res.json())
    }

    renderQuestions (questionsArray) {
        
            var quizObj = this;

            function addQuiz() {
                document.querySelector('ul').innerHTML = '';
                var node = document.createElement("LI");

                let question = questionsArray.shift();
                node.innerHTML = addText(question);
                node.innerHTML += addLabel();
                node.innerHTML += addOptions(question);
                // add button to check answer
                node.appendChild(addCheck(questionsArray));
                document.querySelector('ul').appendChild(node); 
            }

            function addText(question) {
                // return text
                return `<p>${question.title} : ${question.content}</p>`
               
            }

            function addLabel() {
                // return label
                return  `<label for="answer-select">Choose an answer:</label>`   
            }

            function addOptions(question) {
                var openSelect = `<select id="answer-select">`
                var closeSelect = `</select">`
                var options = "<option>Choose Answer</option>";
                
                question.options.forEach(option => {
                    options += `<option data-is-answer="${option.correct}" value="${option.content}">${option.content.replace(/ *\([^)]*\) */g, "")}</option>`
                })
               // loop over questions and append option elements to options var

                return openSelect + options + closeSelect;
            }

            
            function addCheck(questionsArray) {

                var chkBtn = document.createElement('button');                

                // function to handel event listner on check answer button
                function addNext() {

                    // Calculate and render score once chaeck answer button is clicked
                    calculateScore(quizObj);
                    renderScore(quizObj);

                    // Disble answer option list
                    var selectElem = document.querySelector("#answer-select");
                    selectElem.disabled = true;

                    // Remove event listner for check answer
                    chkBtn.removeEventListener('click',addNext);

                    //Render next button to load next question if not the last question
                    if (questionsArray.length > 0) {
                        chkBtn.innerHTML = 'Next >>';

                        // Add new event listener to load next question on click
                        chkBtn.addEventListener('click', () => {
                            addQuiz(quizObj);
                        });
                    }
                    // Handel last question
                    else {
                        // Stop time counter
                        quiz.stopTime();

                        // remove check answer/next button
                        this.remove();

                        // Render result
                        let QuizFinishSec = document.querySelector('.result');
                        QuizFinishSec.innerHTML = 'Quiz Finished.Your score is ' + document.querySelector('.score').innerHTML + ' in ' + document.querySelector('.time').innerHTML ;

                        // Render restart button
                        document.querySelector('#restart').style.visibility = 'visible';
                        restart(); 

                        // Add confetti
                        let confettiSettings = { target: 'confetti' };
                        let confetti = new ConfettiGenerator(confettiSettings);
                        confetti.render();                       
                    }
                }

                chkBtn.innerHTML = 'Check Answer';
                chkBtn.addEventListener('click', addNext); 
                return chkBtn;               
            }

            // Fuction to restart quiz after it has ended
            function restart() {
                let restartBtn = document.querySelector('#restart');
                restartBtn.addEventListener('click', reload);
                function reload() {
                    location.reload();
                }
            }

            function calculateScore() {
                // return score
                var selectElem = document.querySelector("#answer-select");
                if (selectElem.options[selectElem.selectedIndex].getAttribute('data-is-answer') === 'true') {
                    quizObj.score++;
                    selectElem.parentElement.style.backgroundColor = 'rgb(50,205,50)';
                    selectElem.parentElement.style.color = 'white';
                }
                else {
                    selectElem.parentElement.style.backgroundColor = 'rgb(232, 13, 13)';
                    selectElem.parentElement.style.color = 'white';                    
                }
                
            }

            function renderScore() {
                let totQuest = document.querySelector('.score').innerHTML.split('/')[1];
                document.querySelector('.score').innerHTML = quizObj.score + '/' + totQuest;
            }
          
            addQuiz(quizObj);
    }

    startTime() {
        let diffLevel = document.querySelector('.time');
        let seconds = 1;
        this.clock = setInterval(() => {
            let time = Math.floor(seconds / 60).toString().padStart(2, '0') + ':' + (seconds % 60).toString().padStart(2, '0');
            diffLevel.innerHTML = time;
            seconds++;
        }, 1000);
    }
    stopTime() {
        clearInterval(this.clock);
    }
}

// instantiate quiz with name
var quiz = new Quiz('myQuiz')

// Display difficult question if user choose so
let hardBtn = document.querySelector('#hardBtn');
let hardQuestion = () => {
    hardBtn.disabled = true;
    easyBtn.disabled = true;

    quiz.getQuestions().then(data => {
        var hardData = data.filter((level)=> level.difficulty === 'hard');
        console.log(hardData);
        document.querySelector('.score').innerHTML = '0/' + hardData.length;
        quiz.renderQuestions(hardData);

        quiz.startTime();
    });
}

hardBtn.addEventListener('click', hardQuestion);

// // Display easy question if user choose so
let easyBtn = document.querySelector('#easyBtn');
let easyQuestion = () => {
    hardBtn.disabled = true;
    easyBtn.disabled = true;

    quiz.getQuestions().then(data => {
        var easyData = data.filter((level)=> level.difficulty === 'easy');
        console.log(easyData);
        document.querySelector('.score').innerHTML = '0/' + easyData.length;
        quiz.renderQuestions(easyData);

        quiz.startTime();
    });
}

easyBtn.addEventListener('click',easyQuestion );