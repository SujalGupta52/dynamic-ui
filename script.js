let i = 3
const nextButton = document.querySelector("button#next");
const prevButton = document.querySelector("button#prev");
console.log(nextButton);
prevButton.addEventListener("click", moveRight);
nextButton.addEventListener("click", moveLeft);

function moveLeft() {
  const container = document.querySelector(".container");
  if (container.style.left == "") container.style.left = "0px";
  if (parseInt(container.style.left) < (i - 2) * -875) return;
  container.style.left = `${parseInt(container.style.left) - 875}px`;
}

function moveRight() {
  const container = document.querySelector(".container");
  if (container.style.left == "") container.style.left = "0px";
  if (parseInt(container.style.left) == 0 ) return;
  container.style.left = `${parseInt(container.style.left) + 875}px`;
}
