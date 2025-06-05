const slides = document.querySelector('.slides');
const slideImages = document.querySelectorAll('.slide');
const totalSlides = slideImages.length;
let index = 0;

document.querySelector('.next').addEventListener('click', () => {
  index = (index + 1) % totalSlides;
  updateSlide();
});

document.querySelector('.prev').addEventListener('click', () => {
  index = (index - 1 + totalSlides) % totalSlides;
  updateSlide();
});

function updateSlide() {
  slides.style.transform = `translateX(-${index * 100}%)`;
}

// Auto slide (opcional)
setInterval(() => {
  index = (index + 1) % totalSlides;
  updateSlide();
}, 10000); // 5 segundos

function abrirAba(evt, nomeAba) {
  const conteudos = document.querySelectorAll('.conteudo-aba');
  const botoes = document.querySelectorAll('.aba');

  conteudos.forEach((conteudo) => {
    conteudo.classList.remove('ativo');
  });

  botoes.forEach((btn) => {
    btn.classList.remove('ativa');
  });

  document.getElementById(nomeAba).classList.add('ativo');
  evt.currentTarget.classList.add('ativa');
}

