const noBtn = document.getElementById("noBtn");

// функция случайной позиции по всему экрану
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

// для ПК
noBtn.addEventListener("mouseover", teleportButton);

// для смартфонов (тач)
noBtn.addEventListener("touchstart", teleportButton);
