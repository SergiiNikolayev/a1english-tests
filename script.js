console.clear();
//we received this array from DB
var questionsList = [{
    name: "001",
    hint: "heard",
    question: {
        beforeInput: "I ",
        afterInput: "11111 (hear) a new song on the radio."
    },
    answers: ["heard", "heard1", "heard2"]
}, {
    name: "002",
    hint: "read",
    question: {
        beforeInput: "I ",
        afterInput: " (read) three books last week."
    },
    answers: ["read", "read1", "read2"]
}];
/*var questionsList2 = [{
    name: "0012",
    hint: "heard22",
    question: {
        beforeInput: "I ",
        afterInput: "222222 (hear) a new song on the radio."
    },
    answers: ["h12", "h22", "h32"]
}, {
    name: "read",
    hint: "read",
    question: {
        beforeInput: "I ",
        afterInput: " (read) three books last week."
    },
    answers: ["read", "read1", "read2"]
}];
var questionsList3 = [{
    name: "3heardName",
    hint: "3heardHint",
    question: {
        beforeInput: "I ",
        afterInput: " 33333(hear) a new song on the radio."
    },
    answers: ["3h", "3h1", "3h2"]
}, {
    name: "3readName",
    hint: "3readHint",
    question: {
        beforeInput: "I ",
        afterInput: " (read) three books last week."
    },
    answers: ["3r", "3r1", "3r2"]
}];
var questionsList4 = [{
    name: "001222",
    hint: "heard222",
    question: {
        beforeInput: "I ",
        afterInput: " (hear) a new song on the radio."
    },
    answers: ["heard", "heard1", "heard2"]
}, {
    name: "read",
    hint: "read",
    question: {
        beforeInput: "I ",
        afterInput: " (read) three books last week."
    },
    answers: ["read", "read1", "read2"]
}];*/

var qWrapper = document.getElementById("questionsWrapper");
/*var qWrapper2 = document.getElementById("questionsWrapper2");
var qWrapper3 = document.getElementById("questionsWrapper3");
var qWrapper4 = document.getElementById("questionsWrapper4");*/

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
        console.log("check: ", userAnswer + " , " + id);
        var length = questions.length;

        for (var i = 0; i <= length; i++) {
           questions[i].answers.forEach(function(element){
            if (userAnswer == element){
                console.log("correct " + element);
            } else if (userAnswer !== element){
                console.log("not correct " + element);
            }

            });
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
/*var questionHandler = new QuizModule(qWrapper2, questionsList2);
questionHandler.init(questionsList2);
var questionHandler = new QuizModule(qWrapper3);
questionHandler.init(questionsList3);*/



document.addEventListener('click', function(e) {
    console.log(e);
    if (e.target.id.indexOf("hint") !== -1) {
        questionHandler.hint(e.target.id)
    } else if (e.target.id.indexOf("check") !== -1) {
        var input = document.getElementById(e.target.id.slice(0, e.target.id.indexOf("-")));
        questionHandler.check(e.target.id, input.value)
    } else {
        console.log("some error appears when Question was creating check question with name: ", e.target.id.slice(0, e.target.id.indexOf("-")));
    }
});