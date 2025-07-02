// ANO ATUAL INSERIDO DE FORMA AUTOMÁTICA NO RODAPÉ
const date = document.getElementById('date')
const setCurrentYear = () => {
	const currentYear = new Date().getFullYear()
	date.textContent = currentYear
}
setCurrentYear()

// MENU HAMBÚRGUER PARA MOBILE
const hamburger = document.querySelector('.hamburger')
const navList = document.querySelector('.nav-list')
const socials = document.querySelector('.social-nav')
const navLinks = document.querySelectorAll('.nav-links')

// FUNÇÃO PARA ABRIR E FECHAR O MENU
const toggleMobileMenu = () => {
	hamburger.classList.toggle('open')
	navList.classList.toggle('open')
	socials.classList.toggle('open')
	document.body.classList.toggle('open')
}

// QUANDO UM LINK DO MENU É CLICADO, O MENU FECHA
navLinks.forEach(link => link.addEventListener('click', toggleMobileMenu))
hamburger.addEventListener('click', toggleMobileMenu)

// INICIALIZA A BIBLIOTECA AOS (ANIMATE ON SCROLL) - ANIMAÇÃO AO ROLAR PÁGINA
AOS.init()

// AVISO DE MENSAGEM ENVIADA
const contactForm = document.querySelector('.contact-form');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  alert('Mensagem enviada com sucesso!');

  contactForm.reset();
});