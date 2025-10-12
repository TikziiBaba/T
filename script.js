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

// Sürpriz otomatik gelsin
window.addEventListener('DOMContentLoaded', () => {
  setTimeout(showSurprise, 4000);
});

function showSurprise() {
  const surprise = document.getElementById('surprise-message');
  const emojiList = ['🍰','🍭','🍫','🧁','🍦','🍩','🍬','🍪','🍒','🍓','🦄','🌈','🐻','🐣','🦋','🌻','🌟'];
  document.getElementById('surprise-emoji').textContent = emojiList[Math.floor(Math.random()*emojiList.length)];
  surprise.style.display = 'block';

  // Konfeti kalpler
  for (let i = 0; i < 80; i++) {
    setTimeout(() => {
      const heart = document.createElement('div');
      heart.classList.add('heart');
      heart.textContent = ['💖','💗','💓','💞','💝','💕'][Math.floor(Math.random()*6)];
      heart.style.left = Math.random() * 100 + 'vw';
      heart.style.animationDuration = (2 + Math.random() * 3) + 's';
      heart.style.fontSize = (18 + Math.random() * 32) + 'px';
      heartsContainer.appendChild(heart);
      setTimeout(() => heart.remove(), 6000);
    }, i * 30);
  }

  // Günün önerisi
  const suggestionDiv = document.getElementById('suggestion');
  suggestionDiv.textContent = "Bekir'in: pazartesi günü öpiyimm barışalımm";
  suggestionDiv.style.display = 'block';
}