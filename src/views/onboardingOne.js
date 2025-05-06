const continueBtn = document.querySelector('.continue-button');
const skipBtn = document.querySelector('.skip-button');

continueBtn.addEventListener('click', () => {
  window.location.href = "onboardingTwo.html"; 
});

skipBtn.addEventListener('click', () => {
  window.location.href = "auth.html"; 
});

// Dark mode--
if (localStorage.getItem('darkmode') === 'true') {
  // document.documentElement.classList.add('dark');
  document.documentElement.setAttribute("data-mode", "dark");
}
//----