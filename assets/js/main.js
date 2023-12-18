const carousel = document.querySelector(".carousel");
const wordsContainer = document.querySelector(".words");
const words = document.querySelectorAll(".words span");

words.forEach((word) => {
  const clonedWord = word.cloneNode(true);
  wordsContainer.appendChild(clonedWord);
});

carousel.addEventListener("mouseenter", () => {
  wordsContainer.style.animationPlayState = "paused";
});

carousel.addEventListener("mouseleave", () => {
  wordsContainer.style.animationPlayState = "running";
});

// Função para abrir o modal e reproduzir o vídeo
var videoLink = "https://www.youtube.com/embed/5IvxzHrSFUU";
function openModal() {
  var modal = document.getElementById("videoModal");
  var iframe = modal.querySelector("iframe");
  iframe.src = videoLink;
  modal.style.display = "block";
}
// Função para fechar o modal e pausar o vídeo
function closeModal() {
  var modal = document.getElementById("videoModal");
  var iframe = modal.querySelector("iframe");
  iframe.src = "";
  modal.style.display = "none";
}

/* JSON que ira adicionar os speakers */

var speakers = [
  {
    speakers__name: "Nome Palestrante - Cargo",
    speakers__theme: "Carreira e tecnologia, uma ponte para o sucesso!",
    speakers__photo: "/assets/images/speakers/man.svg",
    date: "06 de Junho de 2024",
  },
  {
    speakers__name: "Nome Palestrante - Cargo",
    speakers__theme: "Carreira e tecnologia, uma ponte para o sucesso!",
    speakers__photo: "/assets/images/speakers/woman.svg",
    date: "06 de Junho de 2024",
  },
  {
    speakers__name: "Nome Palestrante - Cargo",
    speakers__theme: "Carreira e tecnologia, uma ponte para o sucesso!",
    speakers__photo: "/assets/images/speakers/man.svg",
    date: "06 de Junho de 2024",
  },
  {
    speakers__name: "Nome Palestrante - Cargo",
    speakers__theme: "Carreira e tecnologia, uma ponte para o sucesso!",
    speakers__photo: "/assets/images/speakers/woman.svg",
    date: "06 de Junho de 2024",
  },
  {
    speakers__name: "Nome Palestrante - Cargo",
    speakers__theme: "Carreira e tecnologia, uma ponte para o sucesso!",
    speakers__photo: "/assets/images/speakers/man.svg",
    date: "06 de Junho de 2024",
  },
  {
    speakers__name: "Nome Palestrante - Cargo",
    speakers__theme: "Carreira e tecnologia, uma ponte para o sucesso!",
    speakers__photo: "/assets/images/speakers/woman.svg",
    date: "06 de Junho de 2024",
  },
];

var grid = document.getElementById("speakersGrid");

for (var i = 0; i < speakers.length; i++) {
  var card = document.createElement("div");
  card.className = "speakers__card";

  var image = document.createElement("div");
  image.className = "speakers__image";

  var img = document.createElement("img");
  img.src = speakers[i].speakers__photo;
  img.alt = speakers[i].speakers__name;
  img.className = "speakers__photo";
  image.appendChild(img);

  var info = document.createElement("div");
  info.className = "speakers__info";

  var nameSpeark = document.createElement("span");
  nameSpeark.className = "speakers__name";
  nameSpeark.textContent = speakers[i].speakers__name;

  var theme = document.createElement("p");
  theme.className = "speakers__theme";
  theme.textContent = speakers[i].speakers__theme;

  var date = document.createElement("span");
  date.className = "date";

  date.textContent = speakers[i].date;

  grid.appendChild(card);
  card.appendChild(image);

  info.appendChild(nameSpeark);
  card.appendChild(info);
  info.appendChild(theme);
  info.appendChild(date);
}

/* CONTAGEM REGRESSIVA */

function countdown() {
  const targetDate = new Date("2024-06-06T00:13:00").getTime();
  const now = new Date().getTime();
  const timeDifference = targetDate - now;

  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  document.getElementById("days").innerText = `${days}`;
  document.getElementById("hours").innerText = `${hours}`;
  document.getElementById("minutes").innerText = `${minutes}`;
  document.getElementById("seconds").innerText = `${seconds}`;
}

setInterval(countdown, 1000);
countdown();
