document.addEventListener("DOMContentLoaded", function () {
  // Scroll do menu
  window.addEventListener("scroll", function () {
    const menuContainer = document.getElementById("containermenu");
    if (window.scrollY > 50) {
      menuContainer.classList.add("scrolled");
    } else {
      menuContainer.classList.remove("scrolled");
    }
  });

  // Botão Enviar por E-mail
  document.getElementById("enviar-email").addEventListener("click", function (e) {
    e.preventDefault();
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const mensagem = document.getElementById("mensagem").value;

    const assunto = `Orçamento - ${nome}`;
    const corpo = `Nome: ${nome}%0AEmail: ${email}%0AMensagem: ${mensagem}`;
    window.location.href = `mailto:joseluizgrama@gmail.com?subject=${assunto}&body=${corpo}`;
  });

  // Botão Enviar por WhatsApp
  document.getElementById("enviar-whatsapp").addEventListener("click", function (e) {
    const nome = document.getElementById("nome").value;
    const mensagem = document.getElementById("mensagem").value;

    const texto = `Olá, meu nome é ${nome}. Gostaria de um orçamento.%0A${mensagem}`;
    const url = `https://wa.me/5515996908090?text=${texto}`;
    this.href = url;
  });

  // Carrossel
  const slidesContainer = document.querySelector(".slides");
const slides = document.querySelectorAll(".slide");
let index = 0;

function resizeCarousel() {
  const totalSlides = slides.length;
  slidesContainer.style.width = `${100 * totalSlides}%`;
  slides.forEach(slide => {
    slide.style.width = `${100 / totalSlides}%`;
  });
}

// roda isso ao carregar e ao redimensionar
resizeCarousel();
window.addEventListener("resize", resizeCarousel);

function showNextSlide() {
  index = (index + 1) % slides.length;
  slidesContainer.style.transform = `translateX(-${index * (100 / slides.length)}%)`;
}

setInterval(showNextSlide, 3000); // troca a cada 3 segundos
  const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

menuToggle.addEventListener("click", function () {
  menu.classList.toggle("active");
});
});