import './styles/style.scss';

window.addEventListener('load', () => {
  setTimeout(() => {
    document.querySelector('.container').classList.add('active');
  }, 500); // Delay before starting the animation
});