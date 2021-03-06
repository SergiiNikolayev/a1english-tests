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

/** 1.3	Present Simple "Be" – Questions  */

var presentSimpleBeQuestions1_3db = [{
    name: "011",
    hint: "is he a great person",
    question: {
        beforeInput: "(a great person/is/he)  ",
        afterInput: "?"
    },
    answers: ["is he a great person" , "is he a great person?"]
}, {
    name: "012",
    hint: "are you very busy",
    question: {
        beforeInput: "(very busy / are / you)  ",
        afterInput: "?"
    },
    answers: ["are you very busy", "are you very busy?"]
}, {
    name: "013",
    hint: "are these people at home",
    question: {
        beforeInput: "(at home / these people / are)  ",
        afterInput: "?"
    },
    answers: ["are these people at home", "are these people at home?"]
}, {
    name: "014",
    hint: "are the children in the park",
    question: {
        beforeInput: "(in the park / the children / are)   ",
        afterInput: "?"
    },
    answers: ["are the children in the park", "are the children in the park?"]
}, {
    name: "015",
    hint: "is it a large number",
    question: {
        beforeInput: "(a large number / it / is)  ",
        afterInput: "?"
    },
    answers: ["is it a large number", "is it a large number?"]
}, {
    name: "016",
    hint: "are the women happy",
    question: {
        beforeInput: "(the women / are / happy)  ",
        afterInput: "?"
    },
    answers: ["are the women happy", "are the women happy?"]
}, {
    name: "017",
    hint: "is this problem important",
    question: {
        beforeInput: "(is / important / this problem) ",
        afterInput: "?"
    },
    answers: ["is this problem important", "is this problem important?"]
}, {
    name: "018",
    hint: "are these men right",
    question: {
        beforeInput: "(right / these men / are)  ",
        afterInput: "?"
    },
    answers: ["are these men right", "are these men right?"]
}, {
    name: "019",
    hint: "is it a new place",
    question: {
        beforeInput: "(it / a new place / is)  ",
        afterInput: "?"
    },
    answers: ["is it a new place"]
}, {
    name: "020",
    hint: "am I ready",
    question: {
        beforeInput: "(I / ready / am)   ",
        afterInput: "?"
    },
    answers: ["am I ready", "am I ready?"]
}];


/** 1.4 Present Simple "Be" – Mixed */

var presentSimpleBeMixed1_4db = [{
    name: "041",
    hint: "these children are happy",
    question: {
        beforeInput: "(these children / happy)  ",
        afterInput: "."
    },
    answers: ["these children are happy"]
}, {
    name: "042",
    hint: "is this place good?",
    question: {
        beforeInput: "(good / this place)  ",
        afterInput: "?"
    },
    answers: ["is this place good", "is this place good?"]
}, {
    name: "043",
    hint: "that company is not big",
    question: {
        beforeInput: "(not / that company / big)  ",
        afterInput: "."
    },
    answers: ["that company is not big"]
}, {
    name: "044",
    hint: "is it an important fact",
    question: {
        beforeInput: "(it / an important fact)   ",
        afterInput: "?"
    },
    answers: ["is it an important fact", "is it an important fact?"]
}, {
    name: "045",
    hint: "they are not right",
    question: {
        beforeInput: "(they / right / not)  ",
        afterInput: "."
    },
    answers: ["they are not right"]
}, {
    name: "046",
    hint: "is she a young woman?",
    question: {
        beforeInput: "(a young woman / she)  ",
        afterInput: "?"
    },
    answers: ["is she a young woman", "is she a young woman?"]
}, {
    name: "047",
    hint: "it is not a bad thing",
    question: {
        beforeInput: "(it / a bad thing / not) ",
        afterInput: "."
    },
    answers: ["it is not a bad thing"]
}, {
    name: "048",
    hint: "is this city old",
    question: {
        beforeInput: "(old / this city)  ",
        afterInput: "?"
    },
    answers: ["is this city old", "is this city old?"]
}, {
    name: "049",
    hint: "these apples are cheap",
    question: {
        beforeInput: "(these apples / cheap)  ",
        afterInput: "."
    },
    answers: ["these apples are cheap"]
}, {
    name: "040",
    hint: "is this computer expensive",
    question: {
        beforeInput: "(this computer / expensive)   ",
        afterInput: "?"
    },
    answers: ["is this computer expensive", "is this computer expensive?"]
}];


/** Present Simple - Positive - 1 */


var presentSimplePos_1db = [{
    name: "011",
    hint: "wants",
    question: {
        beforeInput: "We want - she ",
        afterInput: "."
    },
    answers: ["wants"]
}, {
    name: "012",
    hint: "knows",
    question: {
        beforeInput: "I know - he ",
        afterInput: "."
    },
    answers: ["knows"]
}, {
    name: "013",
    hint: "works",
    question: {
        beforeInput: "They work - it ",
        afterInput: "."
    },
    answers: ["works"]
}, {
    name: "014",
    hint: "has",
    question: {
        beforeInput: "You have - she ",
        afterInput: "."
    },
    answers: ["has"]
}, {
    name: "015",
    hint: "comes",
    question: {
        beforeInput: "They come - she  ",
        afterInput: "."
    },
    answers: ["comes"]
}, {
    name: "016",
    hint: "goes",
    question: {
        beforeInput: "We go - it ",
        afterInput: "."
    },
    answers: ["goes"]
}, {
    name: "017",
    hint: "gives",
    question: {
        beforeInput: "You give - he ",
        afterInput: "."
    },
    answers: ["gives"]
}, {
    name: "018",
    hint: "sees",
    question: {
        beforeInput: "They see - she ",
        afterInput: "."
    },
    answers: ["sees"]
}, {
    name: "019",
    hint: "takes",
    question: {
        beforeInput: "I take - it ",
        afterInput: "."
    },
    answers: ["takes"]
}, {
    name: "020",
    hint: "does",
    question: {
        beforeInput: "We do - he ",
        afterInput: "."
    },
    answers: ["does"]
}];

/** Present Simple - Positive - 2 */


var presentSimplePos_2db = [{
    name: "011",
    hint: "want",
    question: {
        beforeInput: "We ",
        afterInput: "bananas (want)"
    },
    answers: ["want"]
}, {
    name: "012",
    hint: "uses",
    question: {
        beforeInput: "That man ",
        afterInput: "this computer (use)"
    },
    answers: ["uses"]
}, {
    name: "013",
    hint: "have",
    question: {
        beforeInput: "These people ",
        afterInput: "a big car (have)"
    },
    answers: ["have"]
}, {
    name: "014",
    hint: "goes",
    question: {
        beforeInput: "He ",
        afterInput: "there in the morning (go)"
    },
    answers: ["goes"]
}, {
    name: "015",
    hint: "like",
    question: {
        beforeInput: "I really ",
        afterInput: "apples (like)"
    },
    answers: ["like"]
}, {
    name: "016",
    hint: "thinks",
    question: {
        beforeInput: "She ",
        afterInput: "about it every evening (think)"
    },
    answers: ["thinks"]
}, {
    name: "017",
    hint: "come",
    question: {
        beforeInput: "I ",
        afterInput: "here every Sunday (come)"
    },
    answers: ["come"]
}, {
    name: "018",
    hint: "has",
    question: {
        beforeInput: "This company ",
        afterInput: "many problems (have)"
    },
    answers: ["has"]
}, {
    name: "019",
    hint: "does",
    question: {
        beforeInput: "This woman ",
        afterInput: "yoga every Saturday morning (do)"
    },
    answers: ["does"]
}, {
    name: "020",
    hint: "makes",
    question: {
        beforeInput: "He ",
        afterInput: "pizzas every Friday evening (make)"
    },
    answers: ["makes"]
}];





/**
 * HTML id's
 * */

var qWrapper = document.getElementById("questionsWrapperIs01");
var qWrapper12 = document.getElementById("psbn12");
var qWrapper13 = document.getElementById("psbq13");
var qWrapper14 = document.getElementById("psbm14");
var qWrapperPS1 = document.getElementById("present-simple-pos-1");
var qWrapperPS2 = document.getElementById("present-simple-pos-2");



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

if (qWrapper13){
    var questionHandler13 = new QuizModule(qWrapper13);
    questionHandler13.init(presentSimpleBeQuestions1_3db);
    document.addEventListener('click', function (e) {
        console.log(e);
        var input = document.getElementById(e.target.id.slice(0, e.target.id.indexOf("-")));
        if (e.target.id.indexOf("hint") !== -1) {
            questionHandler13.hint(e.target.id, input.id)
        } else if (e.target.id.indexOf("check") !== -1) {

            var userInputNoSpace = input.value.replace(/^\s+|\s+$/g, ""); //.replace(/^\s+|\s+$/g, "") - cutting all spaces before and after input.value
            questionHandler13.check(e.target.id, userInputNoSpace)
        } else {
            console.log("some error appears when Question was creating check question with name: ", e.target.id.slice(0, e.target.id.indexOf("-")));
        }
    });
}


if (qWrapper14){
    var questionHandler14 = new QuizModule(qWrapper14);
    questionHandler14.init(presentSimpleBeMixed1_4db);
    document.addEventListener('click', function (e) {
        console.log(e);
        var input = document.getElementById(e.target.id.slice(0, e.target.id.indexOf("-")));
        if (e.target.id.indexOf("hint") !== -1) {
            questionHandler14.hint(e.target.id, input.id)
        } else if (e.target.id.indexOf("check") !== -1) {

            var userInputNoSpace = input.value.replace(/^\s+|\s+$/g, ""); //.replace(/^\s+|\s+$/g, "") - cutting all spaces before and after input.value
            questionHandler14.check(e.target.id, userInputNoSpace)
        } else {
            console.log("some error appears when Question was creating check question with name: ", e.target.id.slice(0, e.target.id.indexOf("-")));
        }
    });
}

if (qWrapperPS1){
    var questionHandlerPS1 = new QuizModule(qWrapperPS1);
    questionHandlerPS1.init(presentSimplePos_1db);
    document.addEventListener('click', function (e) {
        console.log(e);
        var input = document.getElementById(e.target.id.slice(0, e.target.id.indexOf("-")));
        if (e.target.id.indexOf("hint") !== -1) {
            questionHandlerPS1.hint(e.target.id, input.id)
        } else if (e.target.id.indexOf("check") !== -1) {

            var userInputNoSpace = input.value.replace(/^\s+|\s+$/g, ""); //.replace(/^\s+|\s+$/g, "") - cutting all spaces before and after input.value
            questionHandlerPS1.check(e.target.id, userInputNoSpace)
        } else {
            console.log("some error appears when Question was creating check question with name: ", e.target.id.slice(0, e.target.id.indexOf("-")));
        }
    });
}

if (qWrapperPS2){
    var questionHandlerPS2 = new QuizModule(qWrapperPS2);
    questionHandlerPS2.init(presentSimplePos_2db);
    document.addEventListener('click', function (e) {
        console.log(e);
        var input = document.getElementById(e.target.id.slice(0, e.target.id.indexOf("-")));
        if (e.target.id.indexOf("hint") !== -1) {
            questionHandlerPS2.hint(e.target.id, input.id)
        } else if (e.target.id.indexOf("check") !== -1) {

            var userInputNoSpace = input.value.replace(/^\s+|\s+$/g, ""); //.replace(/^\s+|\s+$/g, "") - cutting all spaces before and after input.value
            questionHandlerPS2.check(e.target.id, userInputNoSpace)
        } else {
            console.log("some error appears when Question was creating check question with name: ", e.target.id.slice(0, e.target.id.indexOf("-")));
        }
    });
}


