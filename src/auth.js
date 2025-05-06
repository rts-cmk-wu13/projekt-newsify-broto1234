
let loginDialog = document.querySelector('#login-dialog');
let loginBtn = document.querySelector(".pass--btn");
console.log(loginBtn);


// if (localStorage.getItem("loggedin") == "true") {
//   loginBtn.classList.add("hidden")
// }
//  else {
//   logoutBtn.classList.add("hidden")
// }

loginBtn.addEventListener('click', () => {
  // console.log('hi');  
  loginDialog.showModal()
})

// function showLoginDialog() {
//   loginDialog.showModal()
// }

// function closeLoginDialog() {
//   loginDialog.close()  
// }

// function createPass() {
//   let passInput = document.querySelector("#pass")
//   let registerDialog = document.querySelector("#register-succes")
  
//   localStorage.setItem("password", passInput.value)
//   registerDialog.show()
// }

// function logOut() {
//   //her kommer noget kode
//   localStorage.setItem("loggedin", "false")
//   alert("Du er logged ud")
//   window.location.reload()
// }