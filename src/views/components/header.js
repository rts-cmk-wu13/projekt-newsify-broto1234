import logoNewsify from '/src/assets/images/logoNewsify.svg';
// import logo from '/logo.svg';

export default function header() {
  const divElm = document.createElement("header");
  divElm.classList = "header";

  divElm.innerHTML = `
    <img src="${logoNewsify}" class="header--logo" alt="" />  
  `
  return divElm;
}