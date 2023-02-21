import '../scss/styles.scss';
//import { loquesea } from './dondesea.js';

const menuClick = document.getElementById('menu');
const menuShow = document.getElementById('menu-list');
const leftIcon = document.getElementById('icon-left');
const rightIcon = document.getElementById('icon-right');
const presentationPhoto = document.getElementById('presentation-photo');
const presentationText = document.getElementById('presentation-text');
function callback(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      presentationPhoto.classList.add('appear-left');
      presentationText.classList.add('appear-right');
    }
  });
}

const options = {
  root: null,
  rootMargin: '-150px',
  threshold: 0.5
};

const observer = new IntersectionObserver(callback, options);

observer.observe(document.querySelector('.presentation__title'));

menuClick.addEventListener('click', e => {
  if (e.target.localName != 'p') return;
  menuShow.classList.toggle('menu-show');
  leftIcon.classList.toggle('translate-left');
  rightIcon.classList.toggle('translate-right');
});
