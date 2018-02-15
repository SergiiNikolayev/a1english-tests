console.clear();
//we received this array from DB
/**
 * Our DataBases
 * */

/** 1.1 Present Simple ‘Be’ – Positive */

var presentSimpleBePositive1_1db = [{
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

/** 1.2 Present Simple ‘Be’ – Negative */

var presentSimpleBeNegative1_2db = [{
    name: "011",
    hint: "are",
    question: {
        beforeInput: "It ",
        afterInput: "a large company."
    },
    answers: ["is not"]
}, {
    name: "012",
    hint: "is",
    question: {
        beforeInput: "They  ",
        afterInput: "at home."
    },
    answers: ["are not"]
}, {
    name: "013",
    hint: "is",
    question: {
        beforeInput: "It ",
        afterInput: "a big number."
    },
    answers: ["is not"]
}, {
    name: "014",
    hint: "are",
    question: {
        beforeInput: "This man  ",
        afterInput: "young."
    },
    answers: ["is not"]
}, {
    name: "015",
    hint: "is",
    question: {
        beforeInput: "They ",
        afterInput: "old people."
    },
    answers: ["are not"]
}, {
    name: "016",
    hint: "is",
    question: {
        beforeInput: "It ",
        afterInput: "an important problem."
    },
    answers: ["is not"]
}, {
    name: "017",
    hint: "are",
    question: {
        beforeInput: "This car ",
        afterInput: "small."
    },
    answers: ["is not"]
}, {
    name: "018",
    hint: "is",
    question: {
        beforeInput: "These people  ",
        afterInput: "bad."
    },
    answers: ["are not"]
}, {
    name: "019",
    hint: "are",
    question: {
        beforeInput: "That house  ",
        afterInput: "high."
    },
    answers: ["is not"]
}, {
    name: "020",
    hint: "are",
    question: {
        beforeInput: "It  ",
        afterInput: "a new fact."
    },
    answers: ["is not"]
}];


/**
 * HTML id's
 * */

var qWrapper = document.getElementById("questionsWrapperIs01");
var qWrapper12 = document.getElementById("psbn12");



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
                    "<button id=" + questionsArray[i].name + "-check" + ">Проверить</button><button id="+ questionsArray[i].name + "-hint-" + ">Правильный ответ</button>" +
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

    function hint(id, inputId) {
        console.log("hint: " +id+ " | inputId: " + inputId);
        var length = questions.length;
        console.log("hint: ", id);
        var pureInputVal = document.getElementById(inputId);
        var btn = document.getElementById(id);
        //TO DO: past first right answer in our input fields from DB.answers[0]
/*        //var answerInputFromHint = document.getElementById(id.slice(0, id.indexOf("-")));//cutting number id from hint id
        //console.log("answerInputFromHint: " + answerInputFromHint.id);*/
        for (var i = 0; i < length; i++) {
            if (questions[i].name == inputId) { //if our question id is that we need for our input
                console.log(questions[i].answers[0]);
                console.log(pureInputVal);
                return btn.innerHTML = questions[i].answers[0];
/*                if(answerInputFromHint == inputId ){ //then if help button right for our input
                    console.log(questions[i].answers[0]);
                }*/

            }
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

if (qWrapper){
    var questionHandlerIs01 = new QuizModule(qWrapper);
    questionHandlerIs01.init(presentSimpleBePositive1_1db);
    document.addEventListener('click', function (e) {
        console.log(e);
        var input = document.getElementById(e.target.id.slice(0, e.target.id.indexOf("-")));
        if (e.target.id.indexOf("hint") !== -1) {
            questionHandlerIs01.hint(e.target.id, input.id)
        } else if (e.target.id.indexOf("check") !== -1) {

            var userInputNoSpace = input.value.replace(/^\s+|\s+$/g, ""); //.replace(/^\s+|\s+$/g, "") - cutting all spaces before and after input.value
            questionHandlerIs01.check(e.target.id, userInputNoSpace)
        } else {
            console.log("some error appears when Question was creating check question with name: ", e.target.id.slice(0, e.target.id.indexOf("-")));
        }
    });
}


if (qWrapper12){
    var questionHandler12 = new QuizModule(qWrapper12);
    questionHandler12.init(presentSimpleBeNegative1_2db);
    document.addEventListener('click', function (e) {
        console.log(e);
        var input = document.getElementById(e.target.id.slice(0, e.target.id.indexOf("-")));
        if (e.target.id.indexOf("hint") !== -1) {
            questionHandler12.hint(e.target.id, input.id)
        } else if (e.target.id.indexOf("check") !== -1) {

            var userInputNoSpace = input.value.replace(/^\s+|\s+$/g, ""); //.replace(/^\s+|\s+$/g, "") - cutting all spaces before and after input.value
            questionHandler12.check(e.target.id, userInputNoSpace)
        } else {
            console.log("some error appears when Question was creating check question with name: ", e.target.id.slice(0, e.target.id.indexOf("-")));
        }
    });
}


