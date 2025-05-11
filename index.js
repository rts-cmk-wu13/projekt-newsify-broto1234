import '/src/styles/style.scss';

function onBoard() {
  setTimeout(() => {
    window.location.href = "/src/views/onboardingOne/index.html"; // Use an absolute path
  }, 2000); // 2 seconds delay
}

// Call the function to start the redirection
onBoard();

