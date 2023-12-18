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
