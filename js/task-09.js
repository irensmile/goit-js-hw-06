function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const btn = document.querySelector(".change-color");
btn.addEventListener("click", handleSubmit);
function handleSubmit(e) {
  const color = getRandomHexColor();
  document.querySelector(".color").innerHTML = color;
  document.querySelector("body").style.backgroundColor = color;
}

