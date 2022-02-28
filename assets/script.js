var totalTime = 75;
var i = 0;

var pageContentEl = document.querySelector(".page-content");
var startQuizEl = document.querySelector("#start");
var deleteContentEl = document.querySelector("#delete");
var newContentEl = document.querySelector(".new-content");
var correctAnswerEl = document.querySelector("button[name='correct']");
var incorrectAnswerEl = document.querySelector(".incorrect");
var highScoreEl = document.querySelector("#leaderboard");

var questionContent = [    
    {
        n: "Question 1",
        q: "What symbol do we use as an AND operator?",
        a: "!",
        b: "&&",
        c: "||",
        d: "%"
    },

    {
        n: "Question 2",
        q: "Which one isn't a string?",
        a: "\"winner\"",
        b: 5,
        c: "\"32\"",
        d: "\"banana\""
    },
    
    {
        n: "Question 3",
        q: "Which do you use to present a message to the user?",
        a: "window.prompt();",
        b: "window.alert();",
        c: "window.confirm();",
        d: "window.yesorno();"
    },

    {
        n: "Question 4",
        q: "How do you call a function?",
        a: "functionName!",
        b: "functionName();",
        c: "functionName.call();",
        d: "functionName.call!"
    },

    {
        n: "Question 5",
        q: "What shortcut creates the basics of an HTML page?",
        a: "html.new Enter",
        b: "html:5 Enter",
        c: "html.create Enter",
        d: "html Enter"
    }
]

var timerStart = function() {
    if (totalTime <= 0) {
        totalTime = 0;
        document.getElementById("time").innerHTML = "Time's Up!";
        endGame();
    }

    else {
        document.getElementById("time").innerHTML ="Time Remaining: " + totalTime + "s";
    }
    totalTime -= 1;
};

var buttonHandler = function(event) {
    var targetEl = event.target;

    if (targetEl.matches("#start")) {
        console.log("start works");
        startQuiz();
    }

    else if (targetEl.matches("#leaderboard-btn")) {
        console.log("high score works");
    }

    else if (targetEl.matches(".correct")) {
        nextQuestion();
        console.log("correct");
        //window.alert("Correct!");
    }

    else if (targetEl.matches(".incorrect")) {
        totalTime -= 10;
        console.log("incorrect");
        //window.alert("Incorrect! Try again.");
    }
};

var startQuiz = function() {

    setInterval(timerStart, 1000);
    
    deleteContentEl.remove();

    var newTitleEl = document.createElement("div");
    newTitleEl.className = "new-title";
    newTitleEl.innerHTML = "<h2 class='title-style'></h2>";
    newContentEl.appendChild(newTitleEl);

    var newQuestionEl = document.createElement("div");
    newQuestionEl.className = "new-question";
    newQuestionEl.innerHTML = "<p class='question'></p>";
    newContentEl.appendChild(newQuestionEl);

    var answerGroupEl = document.createElement("div");
    answerGroupEl.className = "answers-list";
    answerGroupEl.innerHTML = 
    "<button id='answer-one' class='incorrect'></button>" +
    "<button id='answer-two' class='correct'></button>" +
    "<button id='answer-three' class='incorrect'></button>" +
    "<button id='answer-four' class='incorrect'></button>";
    newContentEl.appendChild(answerGroupEl);

    nextQuestion();
};

var nextQuestion = function(event) {


        var number = document.querySelector(".title-style").textContent = questionContent[i].n;

        var question = document.querySelector(".question").textContent = questionContent[i].q;
        
        var answerOne = document.querySelector('#answer-one').textContent = questionContent[i].a;

        var answerTwo = document.querySelector('#answer-two').textContent = questionContent[i].b;

        var answerThree = document.querySelector('#answer-three').textContent = questionContent[i].c;

        var answerFour = document.querySelector('#answer-four').textContent = questionContent[i].d;
        
        i++;

        console.log("next question");

        console.log(i);

        if (i === 5) {
            endGame();
        }
    
};

var endGame = function() {
    clearInterval(timerStart);
    console.log("end game");
}

//var nextQuestion = function();

pageContentEl.addEventListener("click", buttonHandler);

// correctAnswerEl.addEventListener("click", correctAnswer);
//incorrectAnswerEl.addEventListener("click", incorrectAnswer);



var startTime = 75;
var timeEl = document.getElementById('time');










// setInterval(timer, 75);

// var timer= function() {
//     var minutes = Math.floor(totalTime / 60);
//     var seconds = totalTime % 60;

//     if (seconds < 10) {
//         seconds = 0 + seconds;
//     }

//     timeEl.innerHTML = "<p class='timer-text'>Time Remaining: " + seconds + "</p>";
//     totalTime--;
// }
