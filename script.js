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
    name: "read",
    hint: "read",
    question: {
        beforeInput: "I ",
        afterInput: " (read) three books last week."
    },
    answers: ["read", "read1", "read2"]
}];
var questionsList2 = [{
    name: "001222",
    hint: "heard222",
    question: {
        beforeInput: "I ",
        afterInput: "222222 (hear) a new song on the radio."
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
}];
var questionsList3 = [{
    name: "001dsfs",
    hint: "333heardsdfsfs",
    question: {
        beforeInput: "I ",
        afterInput: " 33333(hear) a new song on the radio."
    },
    answers: ["heard", "heard1", "heard2"]
}, {
    name: "333333read",
    hint: "3333read",
    question: {
        beforeInput: "I ",
        afterInput: " (read) three books last week."
    },
    answers: ["read", "read1", "read2"]
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
}];


var qWrapper = document.getElementById("questionsWrapper");
var qWrapper2 = document.getElementById("questionsWrapper2");
var qWrapper3 = document.getElementById("questionsWrapper3");
var qWrapper4 = document.getElementById("questionsWrapper4");


/**
 * htmlWraper - or html id, where to add content
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

    function check(id, answer) {
        console.log("check: ", answer);
        var length = questions.length;
        for (var i = 0; i <= length; i++) {
            //console.log(questionsArray[i].answers[i]);
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

var questionHandler = new QuizModule(qWrapper2,questionsList2);
questionHandler.init(questionsList2);

var questionHandler = new QuizModule(qWrapper3);
questionHandler.init(questionsList3);



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