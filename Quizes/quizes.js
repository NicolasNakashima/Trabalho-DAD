const id = document.getElementById("tema");
const tema = id.textContent.split(" ")[1];
const enviar = document.getElementById("enviar");
const pontos = document.getElementById("pontos");
const reiniciar = document.getElementById("reiniciar");

console.log(tema);
console.log(pontos.textContent);

const respostasCorrestas = {
  //q1 q2 q3 q4
  1: [1, 2, 3], // --> QUIZ 1 - questão1 resposta correta: opção 1
  2: [3, 2, 1], // --> QUIZ 2 - questão1 resposta correta: opção 3
  3: [1, 3, 2], // --> QUIZ 3 - questão1 resposta correta: opção 1
  4: [1, 1, 2], // --> QUIZ 4 - questão1 resposta correta: opção 1
};
let pontuacao = 0;

enviar.addEventListener("click", (event) => {
  event.preventDefault();
  if (
    localStorage.getItem("verificacao") ||
    localStorage.getItem("verificacao") == undefined
  ) {
    const questoes = document.getElementsByClassName("questoes");
    console.log(questoes);
    const acertos = [];

    for (let i = 0; i < questoes.length; i++) {
      let questao = questoes[i].value[2];
      if (questoes[i].checked) {
        acertos.push(+questao);
      }
    }
    if (JSON.stringify(acertos) == JSON.stringify(respostasCorrestas[tema])) {
      console.log("certinho, parabéns");
    }

    for (i = 0; i < acertos.length; i++) {
      if (acertos[i] == respostasCorrestas[tema][i]) {
        pontuacao++;
      }
    }

    const respostasCertas = respostasCorrestas[tema];

    localStorage.setItem("acertos", JSON.stringify(respostasCertas));
    localStorage.setItem("pontuacao", JSON.stringify(pontuacao));
    console.log(JSON.parse(localStorage.getItem("acertos")));
    console.log(JSON.parse(localStorage.getItem("pontuacao")));

    pontos.textContent = "Pontos: " + pontuacao;
    pontos.classList.remove("invisivel");

    // verificação de acesso
    setTimeout(500);

    if (tema == 1) {
      localStorage.setItem("verificacao1", JSON.stringify(0));
    } else if (tema == 2) {
      localStorage.setItem("verificacao2", JSON.stringify(0));
    } else if (tema == 3) {
      localStorage.setItem("verificacao3", JSON.stringify(0));
    } else {
      localStorage.setItem("verificacao4", JSON.stringify(0));
    }

    enviar.classList.add("disabled_button");
  }
  window.alert("Quiz finalizado! Veja sua pontuação voltando para cima.");
});

setTimeout(() => {
  console.log(localStorage.getItem("verificacao1"));

  for (let i = 0; i < 4; i++) {
    if (localStorage.getItem("verificacao" + tema) == 0) {
      pontos.textContent = "Pontos: " + pontuacao;
      pontos.classList.remove("invisivel");
      enviar.classList.add("disabled_button");
    }
  }
}, 1);

reiniciar.addEventListener("click", (event) => {
  event.preventDefault();
  pontuacao = 0;
  pontos.textContent = "Pontos: " + pontuacao;
  enviar.classList.remove("disabled_button");
  localStorage.removeItem("verificacao" + tema);
});
