import '../../styles/style.scss';

const continueBtn = document.querySelector('.continue-button');
const skipBtn = document.querySelector('.skip-button');

continueBtn.addEventListener('click', () => {    
  window.location.href = "/src/views/onboardingTwo/index.html";   
});

skipBtn.addEventListener('click', () => {
  window.location.href = "/src/views/auth/auth.html"; 
});

// Dark mode--
// if (localStorage.getItem('darkmode') === 'true') {
//   // document.documentElement.classList.add('dark');
//   document.documentElement.setAttribute("data-mode", "dark");
// }
//----