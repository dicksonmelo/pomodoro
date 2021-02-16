let min = 25;
let sec = 00;
let cron;
let breakCounting = 1;
let sinal = new Audio();
sinal.src = "./assets/salamisound-6268402-slower-speed-for-example.mp3";

function iniciarFoco() {
  min = 25;
  sec = 0;
  cron = setInterval(() => {
    timer();
  }, 1000);
  document.getElementById("descanso").innerHTML = "";
}

function pararFoco() {
  clearInterval(cron);
  document.getElementById("contador").innerText = "00:00";
}

function timer() {
  sec--;
  if (sec == -1) {
    sec = 59;
    min--;
  }
  document.getElementById("contador").innerHTML = `${
    min < 10 ? `0${min}` : min
  }:${sec < 10 ? `0${sec}` : sec}`;

  if (min === 0 && sec === 0) {
    clearInterval(cron);
    sinal.play();
    document.getElementById("descanso").innerHTML =
      breakCounting % 4 == 0 && breakCounting > 1
        ? `
    Agora podemos tirar uma pausa longa de 10 minutos!
    <button onclick="iniciarDescansoLongo()">Pausa longa</button>
    <button onclick="iniciarDescanso()">Pausa curta</button>
    <button onclick="iniciarFoco()">Continuar focado!</button>
    `
        : `
   Deseja descansar?
   <button onclick="iniciarDescanso()">Sim</button>
   <button onclick="iniciarFoco()">Não</button>
   `;
  }
}

function timerDescanso() {
  sec--;
  if (sec == -1) {
    sec = 59;
    min--;
  }
  document.getElementById("contador").innerHTML = `${
    min < 10 ? `0${min}` : min
  }:${sec < 10 ? `0${sec}` : sec}`;

  if (min === 0 && sec === 0) {
    clearInterval(cron);
    sinal.play();
    document.getElementById("contador").innerHTML = `
      Vamos voltar ao trabalho?
      <button onclick="iniciarFoco()">Sim</button>
     <button onclick="pararFoco()">Não</button>
     `;
  }
}

function iniciarDescanso() {
  ++breakCounting;
  document.getElementById("descanso").innerHTML =
    "Aproveite seus 5 minutinhos para descansar um pouco a mente :)";
  min = 5;
  sec = 0;
  cron = setInterval(() => {
    timerDescanso();
  }, 1000);

  if (min === 0 && sec === 0) {
    clearInterval(cron);
    sinal.play();
  }
}

function iniciarDescansoLongo() {
  ++breakCounting;
  document.getElementById("descanso").innerHTML =
    "Aproveite seus 10 minutos para tomar um cafezinho :)";
  min = 10;
  sec = 0;
  cron = setInterval(() => {
    timerDescanso();
  }, 1000);

  if (min === 0 && sec === 0) {
    clearInterval(cron);
    sinal.play();
  }
}
