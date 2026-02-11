const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const popup = document.getElementById("popup");
const closePopup = document.getElementById("popupClose");

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

function closePopupClick() {
  popup.style.display = "none";
}

noBtn.addEventListener("mouseover", teleportButton);
noBtn.addEventListener("touchstart", teleportButton);
closePopup.addEventListener("touchstart", closePopupClick);

// ПОКАЗ POPUP при нажатии ДА
yesBtn.addEventListener("click", () => {
  popup.style.display = "flex";
});
