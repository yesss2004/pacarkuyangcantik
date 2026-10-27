// Awal dimuat: Sembunyikan semua konten agar halaman awal kosong
document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.card');
  items.forEach(item => {
    item.style.display = 'none';
  });
});

// Fitur Modal Pop-up Pesan Teks
function openModal(title, text) {
  document.getElementById('modal-title').innerText = title;
  document.getElementById('modal-text').innerText = text;
  document.getElementById('modal').style.display = 'flex';
}

function closeModal() {
  document.getElementById('modal').style.display = 'none';
}

// Fitur Modal Pop-up Foto Besar (Otomatis Ambil Gambar dari Kartu yang Diklik)
function openImageModal(element) {
  const imgElement = element.querySelector('img');
  if (imgElement) {
    document.getElementById('modal-img-src').src = imgElement.src;
    document.getElementById('image-modal').style.display = 'flex';
  }
}

function closeImageModal() {
  document.getElementById('image-modal').style.display = 'none';
}

// Fitur Filter Tab: Menampilkan isi sesuai tombol yang diklik
function filterCategory(type, element) {
  const buttons = document.querySelectorAll('.tab-btn');
  buttons.forEach(btn => btn.classList.remove('active'));
  element.classList.add('active');

  const items = document.querySelectorAll('.card');
  items.forEach(item => {
    if (item.classList.contains('item-' + type)) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}

// Fitur Animasi Tombol Pelukan (Emot Peluk 🤗 & Hati 💖)
function sendHug() {
  for (let i = 0; i < 18; i++) {
    setTimeout(createFloatingIcon, i * 120);
  }
}

function createFloatingIcon() {
  const icon = document.createElement('div');
  icon.classList.add('floating-icon');
  
  const emojis = ['🤗', '💖', '🫂', '💕'];
  icon.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
  
  icon.style.left = Math.random() * 80 + 10 + 'vw';
  icon.style.bottom = '0px';
  
  const size = Math.random() * 20 + 20;
  icon.style.fontSize = size + 'px';
  
  document.body.appendChild(icon);

  setTimeout(() => {
    icon.remove();
  }, 2500);
}