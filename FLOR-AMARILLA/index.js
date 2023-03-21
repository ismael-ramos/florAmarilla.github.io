const flower = document.querySelector('.flower');

flower.addEventListener('click', () => {
  for (let i = 1; i <= 5; i++) {
    setTimeout(() => {
      alert(`¡Alerta ${i}!`);
    }, i * 1000);
  }
});