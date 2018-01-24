console.clear();
//we received this array from DB
var iAm;
var heIsNot = ["he is not", "he isn't", "he's not"];
var sheIsNot = ["she is not", "she isn't", "she's not"];

var questionsList = [{
    name: "001",
    hint: "heard",
    question: {
        beforeInput: "I ",
        afterInput: "11111 (hear) a new song on the radio."
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

var qWrapper = document.getElementById("questionsWrapper");

/**
 * htmlWraper - id, where to add content
 *
 * */

var QuizModule = function(htmlWrapper, listOfQuestions) {
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
        var questionId = id.slice(0,-6); //cutting up  "-check"
        //console.log(questionId);
        var length = questions.length;
        for (var i = 0; i < length; i++) {
          if (questions[i].name == questionId){
            //console.log(questions[i].answers);
            questions[i].answers.forEach(function(element){
                if (userAnswer == element){
                    console.log("correct " + element);
                } else if (userAnswer === ""){
                    console.log("type your answer");       
                } else if (userAnswer !== element){
                    console.log("not correct " + element);
                }
            });
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

var questionHandler = new QuizModule(qWrapper);
questionHandler.init(questionsList);

document.addEventListener('click', function(e) {
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