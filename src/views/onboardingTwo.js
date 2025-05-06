const continueBtn = document.querySelector('.continue-button');
const skipBtn = document.querySelector('.skip-button');

continueBtn.addEventListener('click', () => {
  window.location.href = "onboardingThree.html"; 
});

skipBtn.addEventListener('click', () => {
  window.location.href = "auth.html"; 
});

