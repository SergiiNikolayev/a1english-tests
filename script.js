console.clear();
//we received this array from DB
/**
 * Our DataBases
 * */
var iAme;
var heIsNot = ["he is not", "he isn't", "he's not"];
var sheIsNot = ["she is not", "she isn't", "she's not"];

var questionsList = [{
    name: "001",
    hint: "heard",
    question: {
        beforeInput: "I ",
        afterInput: "1 (hear) a new song on the radio."
    },
    answers: heIsNot//["heard", "heard1", "heard2", "he is not", "he isn't"]
}, {
    name: "002",
    hint: "read",
    question: {
        beforeInput: "I ",
        afterInput: " (read) three books last week."
    },
    answers: ["read", "read1", "read2"]
}];

var questionsList2 = [{
    name: "021",
    hint: "is",
    question: {
        beforeInput: "She ",
        afterInput: " a nice woman"
    },
    answers: ["is", "'s"]
}, {
    name: "022",
    hint: "are",
    question: {
        beforeInput: "We ",
        afterInput: " at work"
    },
    answers: ["are", "'re"]

}];


var questionsList3 = [{
    name: "031",
    hint: "3heard",
    question: {
        beforeInput: "I ",
        afterInput: "3 (hear) a new song on the radio."
    },
    answers: ["3heard", "3heard1", "3heard2"]
}, {
    name: "032",
    hint: "3read",
    question: {
        beforeInput: "I ",
        afterInput: " (read) three books last week."
    },
    answers: ["3read", "3read1", "3read2"]
}];

/**
 * HTML id's
 * */
var qWrapper = document.getElementById("questionsWrapper");
var qWrapper2 = document.getElementById("questionsWrapper2");
var qWrapper3 = document.getElementById("questionsWrapper3");


/**
 * Main Module
 * */
/**
 * htmlWraper - id, where to add content
 *
 * */

var QuizModule = function (htmlWrapper, listOfQuestions) {
    var questions = [];

    function init(questionsArray) {
        //adding questions to our inner Storage;
        getQuestions(questionsArray);
    }

    function getQuestions(question) {
        questions = question;
        if (question) {
            addQuestions(question);
        }
        //console.log(questions)
    }

    function addQuestions(questionsArray) {
        var length = questionsArray.length;
        console.log(questionsArray);
        if (length > 0) {
            for (var i = 0; i < length; i++) {
                console.log(questionsArray[i]);
                var content = "<tr>" +
                    "<td>" +
                    "<div>" +
                    questionsArray[i].question.beforeInput +
                    "<input " + "id='" + questionsArray[i].name + "'" + " type='text' value=''>" +
                    questionsArray[i].question.afterInput + "</div>" +
                    "</td>" +
                    "<td>" +
                    "<button id=" + questionsArray[i].name + "-check" + ">Проверить</button><button id=" + questionsArray[i].hint + "-hint" + ">Подсказка</button>" +
                    "</td>" +
                    "</tr>";
                htmlWrapper.innerHTML += content;
            }
        }

    }


    function check(id, userAnswer) {
        //console.log("check: ", userAnswer + " , " + id);
        var questionId = id.slice(0, -6); //cutting up  "-check"
        //console.log(questionId);
        var length = questions.length;
        var button = document.getElementById(id);
        for (var i = 0; i < length; i++) {
            if (questions[i].name == questionId) {
                    if (userAnswer == "" || userAnswer == " "){
                        console.log("type your answer");
                        return button.innerHTML = "Введите слово";
                    } else if (questions[i].answers.indexOf(userAnswer) === -1) {
                        console.log("not correct " + userAnswer);
                        button.style.backgroundColor = "#ff4d4d";
                        button.style.color = "white";
                        return button.innerHTML = "Еще раз";
                    } else if (questions[i].answers.indexOf(userAnswer) > -1){
                        console.log("correct " + userAnswer);
                        button.style.backgroundColor = "#5aab5a";
                        button.style.color = "white";
                        return button.innerHTML = "Правильно";
                    }
            }


        }
    }

    function hint(id) {
        console.log("hint: ", id);
    }

    return {
        init: init,
        check: check,
        hint: hint
    }
};


/**
 *
 * questionHandler's
 *
 * */

var questionHandler = new QuizModule(qWrapper);
questionHandler.init(questionsList);
document.addEventListener('click', function (e) {
    console.log(e);
    if (e.target.id.indexOf("hint") !== -1) {
        questionHandler.hint(e.target.id)
    } else if (e.target.id.indexOf("check") !== -1) {
        var input = document.getElementById(e.target.id.slice(0, e.target.id.indexOf("-")));
        var userInputNoSpace = input.value.replace(/^\s+|\s+$/g, ""); //.replace(/^\s+|\s+$/g, "") - cutting all spaces before and after input.value
        questionHandler.check(e.target.id, userInputNoSpace)
    } else {
        console.log("some error appears when Question was creating check question with name: ", e.target.id.slice(0, e.target.id.indexOf("-")));
    }
});



var questionHandler2 = new QuizModule(qWrapper2);
questionHandler2.init(questionsList2);
document.addEventListener('click', function (e) {
    console.log(e);
    if (e.target.id.indexOf("hint") !== -1) {
        questionHandler2.hint(e.target.id)
    } else if (e.target.id.indexOf("check") !== -1) {
        var input = document.getElementById(e.target.id.slice(0, e.target.id.indexOf("-")));
        var userInputNoSpace = input.value.replace(/^\s+|\s+$/g, ""); //.replace(/^\s+|\s+$/g, "") - cutting all spaces before and after input.value
        questionHandler2.check(e.target.id, userInputNoSpace)
    } else {
        console.log("some error appears when Question was creating check question with name: ", e.target.id.slice(0, e.target.id.indexOf("-")));
    }
});




var questionHandler3 = new QuizModule(qWrapper3);
questionHandler3.init(questionsList3);
document.addEventListener('click', function (e) {
    console.log(e);
    if (e.target.id.indexOf("hint") !== -1) {
        questionHandler3.hint(e.target.id)
    } else if (e.target.id.indexOf("check") !== -1) {
        var input = document.getElementById(e.target.id.slice(0, e.target.id.indexOf("-")));
        var userInputNoSpace = input.value.replace(/^\s+|\s+$/g, ""); //.replace(/^\s+|\s+$/g, "") - cutting all spaces before and after input.value
        questionHandler3.check(e.target.id, userInputNoSpace)
    } else {
        console.log("some error appears when Question was creating check question with name: ", e.target.id.slice(0, e.target.id.indexOf("-")));
    }
});