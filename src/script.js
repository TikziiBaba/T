const heartsContainer = document.querySelector('.hearts');

function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.textContent = '💖';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = (3 + Math.random() * 5) + 's';
  heart.style.fontSize = (12 + Math.random() * 28) + 'px';
  heartsContainer.appendChild(heart);

  setTimeout(() => heart.remove(), 8000);
}

setInterval(createHeart, 200);

function showHearts() {
  for (let i = 0; i < 60; i++) {
    setTimeout(createHeart, i * 60);
  }
  alert("💗 Keşke şu an yanında olsam... 💗");
}