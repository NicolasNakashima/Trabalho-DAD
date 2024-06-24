const body = document.querySelector("body");
function abrirMenu() {
  const menu = document.querySelector("#menu");
  const fundo = document.createElement("div");

  menu.classList.add("aparecido");

  fundo.style.position = "fixed";
  fundo.style.width = "100%";
  fundo.style.height = "100vh";
  fundo.style.backgroundColor = "#0009";
  fundo.style.position = "fixed";
  fundo.style.top = "0";
  fundo.style.left = "0";
  fundo.style.zIndex = "6";
  fundo.style.display = "block";

  body.appendChild(fundo);

  fundo.addEventListener("click", () => {
    menu.classList.remove("aparecido");
    body.removeChild(fundo);
  });
}

const words = document.querySelectorAll("[draggable='true']");
const boxdrops = document.querySelectorAll(".box-comand");
const boxbtn = document.querySelectorAll(".box-btn");
const btnAnswer = document.querySelectorAll(".btn-answer");

const correctAnswers = [
  ["docker", "pull", "postgres"],
  ["docker run", "--name", "py", "-it", "python:3.9", "bash"],
  ["docker-compose", "up"],
  ["docker", "push", "userName/", "repositoryName:1.0"],
  ["docker", "login", "docker.io"],
  ["docker", "build", "-t", "imageName", "."],
  ["docker", "rmi", "imageID"],
  ["docker", "pull", "userName/", "repositoryName:1.0"],
];

words.forEach((word) => {
  word.addEventListener("dragstart", (event) => {
    event.target.classList.add("optionDrag");
    event.dataTransfer.setData("text/plain", event.target.id);
  });

  word.addEventListener("dragend", (event) => {
    event.target.classList.remove("optionDrag");
  });
});

boxdrops.forEach((boxdrop) => {
  boxdrop.addEventListener("dragover", (event) => {
    event.preventDefault(); // Necessário para permitir o drop
    event.currentTarget.classList.add("hover");
  });

  boxdrop.addEventListener("dragleave", (event) => {
    event.currentTarget.classList.remove("hover");
  });

  boxdrop.addEventListener("drop", (event) => {
    event.preventDefault(); // Necessário para permitir o drop
    const id = event.dataTransfer.getData("text/plain");
    const elementDrag = document.getElementById(id);
    if (elementDrag) {
      event.currentTarget.appendChild(elementDrag);
      elementDrag.classList.remove("optionDrag");
    }
    event.currentTarget.classList.remove("hover");
  });
});

function checkAnswer(event) {
  let btnClicado = event.target.id;
  const boxResult = document.getElementById(event.target.id).parentNode;
  let correctAnswersExercise;
  let caixaResposta;
  let verificacaoResposta;
  let numberBtn;

  if (btnClicado == "btn1") {
    correctAnswersExercise = correctAnswers[0];
    caixaResposta = document.querySelector("#comand1");
    verificacaoResposta = document.querySelector("#box-option-1");
    numberBtn = "1";
  } else if (btnClicado == "btn2") {
    correctAnswersExercise = correctAnswers[1];
    caixaResposta = document.querySelector("#comand2");
    verificacaoResposta = document.querySelector("#box-option-2");
    numberBtn = "2";
  } else if (btnClicado == "btn3") {
    correctAnswersExercise = correctAnswers[2];
    caixaResposta = document.querySelector("#comand3");
    verificacaoResposta = document.querySelector("#box-option-3");
    numberBtn = "3";
  } else if (btnClicado == "btn4") {
    correctAnswersExercise = correctAnswers[3];
    caixaResposta = document.querySelector("#comand4");
    verificacaoResposta = document.querySelector("#box-option-4");
    numberBtn = "4";
  } else if (btnClicado == "btn5") {
    correctAnswersExercise = correctAnswers[4];
    caixaResposta = document.querySelector("#comand5");
    verificacaoResposta = document.querySelector("#box-option-5");
    numberBtn = "5";
  } else if (btnClicado == "btn6") {
    correctAnswersExercise = correctAnswers[5];
    caixaResposta = document.querySelector("#comand6");
    verificacaoResposta = document.querySelector("#box-option-6");
    numberBtn = "6";
  } else if (btnClicado == "btn7") {
    correctAnswersExercise = correctAnswers[6];
    caixaResposta = document.querySelector("#comand7");
    verificacaoResposta = document.querySelector("#box-option-7");
    numberBtn = "7";
  } else if (btnClicado == "btn8") {
    correctAnswersExercise = correctAnswers[7];
    caixaResposta = document.querySelector("#comand8");
    verificacaoResposta = document.querySelector("#box-option-8");
    numberBtn = "8";
  }

  if (verificacaoResposta.children.length == 0) {
    let acertos = 0;
    const btn = document.querySelector("#btn" + numberBtn);
    const correct = document.createElement("div");
    for (let i = 0; i < caixaResposta.children.length; i++) {
      if (
        caixaResposta.children[i].textContent.trim() ==
        correctAnswersExercise[i]
      ) {
        btn.remove();
        acertos++;
        caixaResposta.children[i].classList.add("optionCorrect");
      } else {
        btn.remove();
        caixaResposta.children[i].classList.add("optionWrong");
      }
    }
    if (acertos == caixaResposta.children.length) {
      correct.textContent = "Correto";
      correct.classList.add("correct");
      boxResult.appendChild(correct);
    } else {
      const wrong = document.createElement("div");
      wrong.textContent = "Errado";
      wrong.classList.add("wrong");
      boxResult.appendChild(wrong);
    }
    boxResult.style.flexDirection = "row-reverse";
  }
}

function reloadAnswer(event) {
  let reloadClicado = event.target.id;
  let caixaResposta;
  let verificacaoResposta;
  let numberBtn;
  const boxResult = document.getElementById(event.target.id).parentNode;

  if (reloadClicado == "reload1") {
    caixaResposta = document.querySelector("#comand1");
    verificacaoResposta = document.querySelector("#box-option-1");
    numberBtn = "1";
  } else if (reloadClicado == "reload2") {
    caixaResposta = document.querySelector("#comand2");
    verificacaoResposta = document.querySelector("#box-option-2");
    numberBtn = "2";
  } else if (reloadClicado == "reload3") {
    caixaResposta = document.querySelector("#comand3");
    verificacaoResposta = document.querySelector("#box-option-3");
    numberBtn = "3";
  } else if (reloadClicado == "reload4") {
    caixaResposta = document.querySelector("#comand4");
    verificacaoResposta = document.querySelector("#box-option-4");
    numberBtn = "4";
  } else if (reloadClicado == "reload5") {
    caixaResposta = document.querySelector("#comand5");
    verificacaoResposta = document.querySelector("#box-option-5");
    numberBtn = "5";
  } else if (reloadClicado == "reload6") {
    caixaResposta = document.querySelector("#comand6");
    verificacaoResposta = document.querySelector("#box-option-6");
    numberBtn = "6";
  } else if (reloadClicado == "reload7") {
    caixaResposta = document.querySelector("#comand7");
    verificacaoResposta = document.querySelector("#box-option-7");
    numberBtn = "7";
  } else if (reloadClicado == "reload8") {
    caixaResposta = document.querySelector("#comand8");
    verificacaoResposta = document.querySelector("#box-option-8");
    numberBtn = "8";
  }

  for (; caixaResposta.children.length > 0; ) {
    verificacaoResposta.appendChild(
      caixaResposta.children[caixaResposta.children.length - 1]
    );
  }

  for (let i = 0; i < boxResult.children.length; i++) {
    if (
      boxResult.children[i].classList.contains("wrong") ||
      boxResult.children[i].classList.contains("correct")
    ) {
      boxResult.children[i].remove();

      let palavra;

      for (let i = 0; i < verificacaoResposta.children.length; i++) {
        palavra = verificacaoResposta.children[i];
        palavra.classList.remove("optionWrong");
        palavra.classList.remove("optionCorrect");
        console.log(verificacaoResposta.children[i]);
      }
    }
  }
  const addBtn = document.getElementById(event.target.id).parentNode;
  addBtn.appendChild(btnAnswer[numberBtn - 1]);
  addBtn.style.flexDirection = "row-reverse";
}
