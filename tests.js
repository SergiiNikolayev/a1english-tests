console.clear();
//we received this array from DB
/**
 * Our DataBases
 * */

var questionsListIs01 = [{
    name: "002",
    hint: "are",
    question: {
        beforeInput: "We ",
        afterInput: "at work."
    },
    answers: ["are", "\'re"]
}, {
    name: "003",
    hint: "is",
    question: {
        beforeInput: "She ",
        afterInput: "a nice woman."
    },
    answers: ["is", "\'s"]
}, {
    name: "004",
    hint: "is",
    question: {
        beforeInput: "It ",
        afterInput: "a new car."
    },
    answers: ["is", "\'s"]
}, {
    name: "005",
    hint: "are",
    question: {
        beforeInput: "They ",
        afterInput: "young people."
    },
    answers: ["are", "\'re"]
}, {
    name: "006",
    hint: "is",
    question: {
        beforeInput: "It ",
        afterInput: "very important."
    },
    answers: ["is", "\'s"]
}, {
    name: "007",
    hint: "is",
    question: {
        beforeInput: "This house ",
        afterInput: "big."
    },
    answers: ["is", "\'s"]
}, {
    name: "008",
    hint: "are",
    question: {
        beforeInput: "These children ",
        afterInput: "at home."
    },
    answers: ["are", "\'re"]
}, {
    name: "009",
    hint: "is",
    question: {
        beforeInput: "That company ",
        afterInput: "large."
    },
    answers: ["is", "\'s"]
}, {
    name: "010",
    hint: "are",
    question: {
        beforeInput: "Those men ",
        afterInput: "old."
    },
    answers: ["are", "\'re"]
}];

/*
var questionsList = [{
    name: "001",
    hint: "heard",
    question: {
        beforeInput: "I ",
        afterInput: "1 (hear) a new song on the radio."
    },
    answers: ["heard", "heard1", "heard2", "he is not", "he isn't"]
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
}];*/

/**
 * HTML id's
 * */

var qWrapper = document.getElementById("questionsWrapperIs01");



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
        var length = questions.length;
        console.log("hint: ", id);
        //TO DO: past first right answer in our input fiels from DB.answers[0]
        var answerInput = document.getElementById(id);
        for (var i = 0; i < length; i++) {
            answerInput.innerHTML = questions[i].answers[0];
        }
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

var questionHandlerIs01 = new QuizModule(qWrapper);
questionHandlerIs01.init(questionsListIs01);
document.addEventListener('click', function (e) {
    console.log(e);
    if (e.target.id.indexOf("hint") !== -1) {
        questionHandlerIs01.hint(e.target.id)
    } else if (e.target.id.indexOf("check") !== -1) {
        var input = document.getElementById(e.target.id.slice(0, e.target.id.indexOf("-")));
        var userInputNoSpace = input.value.replace(/^\s+|\s+$/g, ""); //.replace(/^\s+|\s+$/g, "") - cutting all spaces before and after input.value
        questionHandlerIs01.check(e.target.id, userInputNoSpace)
    } else {
        console.log("some error appears when Question was creating check question with name: ", e.target.id.slice(0, e.target.id.indexOf("-")));
    }
});

/*

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
});*/
