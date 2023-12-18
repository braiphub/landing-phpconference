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
