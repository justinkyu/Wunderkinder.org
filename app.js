const app = document.getElementById("app");

let quiz = [];
let current = 0;
let score = 0;

function shuffle(arr){
  return [...arr].sort(() => Math.random() - 0.5);
}

function startQuiz(){
  quiz = shuffle(questions).slice(0,10);
  current = 0;
  score = 0;
  render();
}

function render(){
  const q = quiz[current];

  app.innerHTML = `
  <div class="card">
    <h2>${q.category}</h2>
    <p>Question ${current + 1} of ${quiz.length}</p>

    <h3>${q.question}</h3>

    ${q.choices.map((choice,i)=>
      `<button onclick="answer(${i})">${choice}</button>`
    ).join("")}
  </div>
  `;
}

function answer(choice){
  if(choice === quiz[current].answer){
    score++;
  }

  current++;

  if(current < quiz.length){
    render();
  }else{
    app.innerHTML = `
    <div class="card">
      <h1>⭐ Great Job! ⭐</h1>

      <h2>You scored ${score} / ${quiz.length}</h2>

      <p>Keep learning through play!</p>

      <button onclick="startQuiz()">
        Play Again
      </button>
    </div>
    `;
  }
}

window.onload = startQuiz;
