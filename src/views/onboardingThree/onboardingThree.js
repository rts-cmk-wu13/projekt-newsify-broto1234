import '../../styles/style.scss';

const continueBtn = document.querySelector('.continue-button');
const skipBtn = document.querySelector('.skip-button');

continueBtn.addEventListener('click', () => {
  window.location.href = "/src/views/auth/index.html"; // Use an absolute path
});

skipBtn.addEventListener('click', () => {
  window.location.href = "/src/views/auth/index.html"; 
});