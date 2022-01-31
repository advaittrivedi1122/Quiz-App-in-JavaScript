const quizData = [
    {
        question : "What is the best programming language?",
        a : "Java",
        b : "C",
        c : "Python",
        d : "JavaScript",
        correct : "d"
    },
    {
        question : "Who is the president of India?",
        a : "Donald Trump",
        b : "Ramnath Kovind",
        c : "Narendra Modi",
        d : "Amit Shah",
        correct : "b"
    },
    {
        question : "What does HTML stand for?",
        a : "Hypertext Markup Language",
        b : "Cascading Style Sheet",
        c : "JSON Object Notation",
        d : "Helicopters Terminals Motorboats Lamborghinis",
        correct : "a"
    },
    {
        question : "What does Css stand for?",
        a : "Hypertext Markup Language",
        b : "Cascading Style Sheet",
        c : "JSON Object Notation",
        d : "Cake Styling Standards",
        correct : "b"
    },
    {
        question : "What year was JavaScript launched?",
        a : "1996",
        b : "1994",
        c : "1995",
        d : "none of the above",
        correct : "c"
    }
]

const quizHeader = document.getElementById('quiz-header');
const question = document.getElementById('question');
const a = document.getElementById('a-question');
const b = document.getElementById('b-question');
const c = document.getElementById('c-question');
const d = document.getElementById('d-question');
const btn = document.getElementById('btn');
const answer = document.getElementsByName('answer');
var questionNumber = 0;
var score = 0;

function fillCard(){
    question.innerText = quizData[questionNumber].question;
    a.innerText = quizData[questionNumber].a;
    b.innerText = quizData[questionNumber].b;
    c.innerText = quizData[questionNumber].c;
    d.innerText = quizData[questionNumber].d;
    return;
}

fillCard();

function checkAnswer(){
    answer.forEach((element)=>{
        if (element.checked == true && element.id == quizData[questionNumber].correct) {
            element.checked = false;
            score++;
        }
    });
    return;
}

function clearAnswer(){
    answer.forEach((element)=>{
        if (element.checked == true) {
            element.checked = false;
        }
    });
    return;
}

btn.addEventListener('click',()=>{
    checkAnswer();
    questionNumber++;
    if(questionNumber < quizData.length){
        clearAnswer();
        fillCard();
    }
    else{
        quizHeader.innerHTML = `<h2>You answered ${score}/${quizData.length} questions correctly.</h2>`;
        btn.innerText = "Reload";
        btn.addEventListener('click',()=>{
            window.location.reload();
        });
    }
});