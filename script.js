const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const popup = document.getElementById("popup");
const closePopup = document.getElementById("popupClose");

let yesScale = 1;

// телепорт кнопки НЕТ + увеличение ДА
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

  // увеличивается кнопка ДА
  yesScale += 0.12;
  yesBtn.style.transform = `scale(${yesScale})`;
}

noBtn.addEventListener("mouseover", teleportButton);
noBtn.addEventListener("touchstart", teleportButton);


// конфетти из твоих сердечек

const heartImages = [
  "images/heart1.png",
  "images/heart2.png",
  "images/heart3.png"
];

function createHeart() {
  const heart = document.createElement("img");
  heart.src = heartImages[Math.floor(Math.random() * heartImages.length)];
  heart.classList.add("heart-confetti");

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = 3 + Math.random() * 3 + "s";
  heart.style.width = 20 + Math.random() * 40 + "px";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 6000);
}

function startConfetti() {
  for (let i = 0; i < 35; i++) {
    setTimeout(createHeart, i * 120);
  }
}


// popup

yesBtn.addEventListener("click", () => {
  popup.style.display = "flex";
  startConfetti();
});

closePopup.addEventListener("click", () => {
  popup.style.display = "none";
});
