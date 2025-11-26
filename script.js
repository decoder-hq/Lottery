const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const header = document.querySelector('.header');
const navbar = document.querySelector('.navbar');
const main = document.querySelector('.main');
const description = document.querySelector('.description');
const resultSection = document.querySelector('#results')
const headerHeight = document.querySelector('.header').offsetHeight;

let isActive = false

hamburger.addEventListener('click', () => {
  isActive = !isActive
  hamburger.classList.toggle('active')
  header.classList.toggle('expand');
})

window.addEventListener('scroll', function () {
  header.classList.toggle('active', window.scrollY > 0);
});

function gotoTop() {
  hamburger.classList.remove('active')
  header.classList.remove('expand');
  window.scrollTo(0, 0)
}

function gotoResults() {
  hamburger.classList.remove('active')
  header.classList.remove('expand');
  window.scrollTo({
  top: resultSection.offsetTop - headerHeight,
  behavior: 'smooth'
});
}