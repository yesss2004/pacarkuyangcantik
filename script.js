// Fitur Tombol "Enggak" Kabur saat di-hover/touch
const btnNo = document.getElementById('btn-no');
const btnYes = document.getElementById('btn-yes');
const questionText = document.getElementById('question-text');

function moveButton() {
  const x = Math.random() * (window.innerWidth - btnNo.offsetWidth - 100);
  const y = Math.random() * (window.innerHeight - btnNo.offsetHeight - 100);
  btnNo.style.position = 'fixed';
  btnNo.style.left = `${x}px`;
  btnNo.style.top = `${y}px`;
}

btnNo.addEventListener('mouseover', moveButton);
btnNo.addEventListener('touchstart', moveButton);

// Reaksi saat tombol "Mau" diklik
btnYes.addEventListener('click', () => {
  questionText.innerHTML = 'Yeay! Makasih yaa, I Love You! ❤️🥰';
  btnNo.style.display = 'none';
  btnYes.style.transform = 'scale(1.2)';
  btnYes.textContent = '💖💖💖';
});