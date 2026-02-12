const floatingHeartsContainer = document.getElementById("floatingHearts");
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

  yesScale += 0.12;
  yesBtn.style.transform = `scale(${yesScale})`;
}

noBtn.addEventListener("mouseover", teleportButton);
noBtn.addEventListener("touchstart", teleportButton);


// конфетти из твоего heart1

const heartImages = [
  "https://github.com/algoritmana/valennnn/blob/main/heart1.png?raw=true"
];

function createHeart() {
  const heart = document.createElement("img");
  heart.src = heartImages[0];
  heart.classList.add("heart-confetti");

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = 3 + Math.random() * 3 + "s";
  heart.style.width = 22 + Math.random() * 38 + "px";

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

  // убираем фоновые сердечки
  floatingHeartsContainer.innerHTML = "";

  // запускаем конфетти
  startConfetti();
});

closePopup.addEventListener("click", () => {
  popup.style.display = "none";
});

const floatingHeartImg = "https://github.com/algoritmana/valennnn/blob/main/heart1.png?raw=true";

function createFloatingHeart() {
  const heart = document.createElement("img");
  heart.src = floatingHeartImg;
  heart.classList.add("floating-heart");

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.width = 16 + Math.random() * 26 + "px";
  heart.style.animationDuration = 6 + Math.random() * 6 + "s";

  floatingHeartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 12000);
}

// создаем постоянный поток сердечек
setInterval(createFloatingHeart, 800);
