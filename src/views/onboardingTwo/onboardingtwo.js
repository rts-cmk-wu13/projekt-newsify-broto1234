import '../../styles/style.scss';

const continueBtn = document.querySelector('.continue-button');
const skipBtn = document.querySelector('.skip-button');

continueBtn.addEventListener('click', () => {
  window.location.href = "/src/views/onboardingThree/index.html"; 
});

skipBtn.addEventListener('click', () => {
  window.location.href = "/src/views/auth/auth.html"; 
});

