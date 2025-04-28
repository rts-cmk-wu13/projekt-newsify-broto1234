import logoNewsify from '/logoNewsify.svg';

export default function header() {
  const divElm = document.createElement("header");
  divElm.classList = "header";

  divElm.innerHTML = `
    <img src="${logoNewsify}" class="logo" alt="" />  
  `
  return divElm;
}