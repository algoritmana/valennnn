const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const popup = document.getElementById("popup");

// телепорт кнопки НЕТ
function teleportButton() {
  const btnWidth = noBtn.offsetWidth;
  const btnHeight = noBtn.offsetHeight;

  const maxX = window.innerWidth - btnWidth;
  const maxY = window.innerHeight - btnHeight;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  noBtn.style.position = "fixed";
  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
}

noBtn.addEventListener("mouseover", teleportButton);
noBtn.addEventListener("touchstart", teleportButton);

// ПОКАЗ POPUP при нажатии ДА
yesBtn.addEventListener("click", () => {
  popup.style.display = "flex";
});
