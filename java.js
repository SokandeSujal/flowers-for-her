// Update the JavaScript
onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);

  // Interactive elements
  let clickCount = 0;
  const interactiveArea = document.querySelector('.interactive-area');
  const loveSound = document.getElementById('loveSound');
  const messageContainer = document.querySelector('.message-container');
  const loveLetter = document.querySelector('.love-letter');

  // Click/Tap handler
  function createHeart(e) {
    const heart = document.createElement('div');
    heart.className = 'interactive-heart';
    heart.innerHTML = '❤';
    
    const x = e.clientX || e.touches[0].clientX;
    const y = e.clientY || e.touches[0].clientY;
    
    heart.style.left = `${x}px`;
    heart.style.top = `${y}px`;
    
    document.body.appendChild(heart);
    loveSound.play();
    
    setTimeout(() => heart.remove(), 2000);
    
    if(++clickCount === 7) {
      messageContainer.style.opacity = '1';
      loveLetter.style.transform = 'scale(1)';
    }
  }

  interactiveArea.addEventListener('click', createHeart);
  interactiveArea.addEventListener('touchstart', createHeart);

  // Add twinkling stars
  for(let i = 0; i < 50; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.animationDelay = `${Math.random() * 5}s`;
    document.body.appendChild(star);
  }
};