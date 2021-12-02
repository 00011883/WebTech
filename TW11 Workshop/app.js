let question = document.getElementById("question");
let answers = document.getElementById("answers");
let score = document.getElementById('score');
let nextBtn = document.getElementById('next-btn');

let scores = 0;
let currentQuestion = 0;

window.addEventListener("load", () => {
    init (currentQuestion);
});

nextBtn.addEventListener("click", () => {
    currentQuestion++;
    init (currentQuestion);
})

function init (current) {
    nextBtn.style.visibility = "hidden";

    fetch("questions.json").then(res => {
        return res.json();
    }).then(data => {
        console.log(data);
        console.log(data[0]);
        setQuestion (data[current]);
    }).catch(() => {
        question.textContent = "Congrats, you wasted your time!";
    })
}

function setQuestion (q) {
    answers.innerHTML = '';

    question.textContent = q.question;

    q.answers.forEach(a => {
        let li = document.createElement("li");
        let p = document.createElement("p");
        let span = document.createElement("span");

        p.textContent = a.value;

        li.classList.add("answer");
        p.classList.add("answer-text");
        span.classList.add("answer-indicator");

        li.appendChild(span);
        li.appendChild(p);

        li.title = q.id;

        li.addEventListener("click", chooseAnswer);

        answers.appendChild(li);
    });
}

function chooseAnswer (event) {
    fetch("questions.json").then(res => {
        return res.json();
    }).then(data => {
        for (let item of data) {
            if (item.id == event.target.title) {
                for (let a of item.answers) {
                    if (event.target.getElementsByTagName('p')[0].textContent == a.value) {
                        if (a.is) {
                            event.target.getElementsByTagName("span")[0].classList.add("green");
                            nextBtn.style.visibility = "visible";
                            addScore ();
                            disable ();
                        } else {
                            event.target.getElementsByTagName("span")[0].classList.add("red");
                            nextBtn.style.visibility = "visible";
                            dedScore ();
                            disable ();
                        }
                    }
                }
            }
        }
    })
}

function addScore () {
    score.textContent = `Overall score: ${scores += 5}`;
}
function dedScore () {
    score.textContent = `Overall score: ${scores -= 2}`;
}
function disable () {
    let lis = document.querySelectorAll('li');

    lis.forEach(li => {
        li.removeEventListener("click", chooseAnswer, false);
    });
}