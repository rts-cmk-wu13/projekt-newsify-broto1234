// Apply dark mode class on initial load if saved in localStorage

// export default function darkMode(toggleDark) {
  
//   if (localStorage.getItem('dark-mode') === 'true') {
//     document.documentElement.classList.add('dark');
//   }
//     if (!toggleDark) return;
  
//     toggleDark.addEventListener('click', () => {
//       document.documentElement.classList.toggle('dark');
//       localStorage.setItem(
//         'dark-mode',
//         document.documentElement.classList.contains('dark')
//       );
//     });
//   // }

// }

//
export default function darkMode(dmElm) {

  console.log(dmElm);
  

  const rootElm = document.documentElement;
  console.log(rootElm);
  
  const darkmode = localStorage.getItem("darkmode");
  console.log(darkmode);  

  const browserDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  console.log(browserDark);

  // const storedCategories = JSON.parse(localStorage.getItem("nyt-categories")) || {};
  
  if(browserDark || darkmode == "true") {
    enableDarkMode();
    dmElm.checked = true;  // 
  } else {
    enableLightMode();
  }
  
  function enableDarkMode() {
    console.log("checked");
    rootElm.setAttribute("data-mode", "dark");
    localStorage.setItem("darkmode", "true");    
  }
  
  function enableLightMode() {
    rootElm.setAttribute("data-mode", "light")
    // console.log("not checked")
    localStorage.setItem("darkmode", "false");  
  }
  
  function handleChange() {
    if(dmElm.checked) {
      enableDarkMode();
    } else {
      enableLightMode();
    }
  }  
  
  // Toggle dark mode ----
  dmElm.addEventListener("click", handleChange)
    
  // Save the current mode to LocalStorage----
  function saveToLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
    // return "Data was saved with the key " + key
  }

}  


//
// export default function darkMode(dk) {

//   const isDark = localStorage.getItem('dark-mode') === 'true';

//     const dBodyClass = document.body.classList;
//     if (isDark) dBodyClass.add('dark');

//     dk.addEventListener('click', () => {
//       dBodyClass.toggle('dark');
//       localStorage.setItem('dark-mode', dBodyClass.contains('dark'));
//     });
// }