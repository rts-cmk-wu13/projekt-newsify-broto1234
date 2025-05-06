export default function footer() {
  
  const divElm = document.createElement("footer");
  divElm.className = "footer";
  divElm.innerHTML = `
    <ul class="footer__lists">
      <li class="footer--list"><a href="index.html" class="list active" data-sec="home"><i class='fas fa-home'></i><p>Home</p></a></li>
      <li class="footer--list"><a href="archive.html" class="list" data-sec="archive"><i class='far fa-bookmark'></i><p>Archive</p></a></li>
      <li class="footer--list"><a href="popular.html" class="list" data-sec="popular"><i class='far fa-star'></i><p>Popular</p></a></li>
      <li class="footer--list"><a href="setting.html" class="list" data-sec="setting"><i class='fas fa-cog'></i><p>Settings</p></a></li>
  </ul> `
  let path =  window.location.pathname;
  // console.log(path);  
  const currentPath = path.substring(1);  
  const lists = divElm.querySelectorAll(".list");  

  lists.forEach( list => {
    // console.log(list);    
    const itemPath = list.getAttribute('href');
    // console.log(itemPath);
    list.classList.remove('active');
    if(currentPath == itemPath) {
      list.classList.add('active');
    }
  })


  // currentPath = path.startsWith("/") + path;
  // console.log(currentPath);
  // const currentPath = path.startsWith("/") ? path.substring(1) : path; // if not all time "/" Ex. /index ==> index
  // let path = "index";
  // let withSlash = path.startsWith("/") ? path : "/" + path;
  // console.log(withSlash); // Outputs: "/index"

    // if(currentPath == itemPath) {
    // }
  // lists.forEach(list => {
  //   console.log(list);
    
      
      // Special case for home page (root path)
      // if ((currentPath === '/' || currentPath === '/index.html') && itemPath === '/') {
      //     list.classList.add('active');
          
      // } 
      // // For other pages
      // else if (currentPath === itemPath) {
      //     list.classList.add('active');
      //     // if (pageTitle) pageTitle.textContent = `${item.textContent.trim()} Page`;
      // };

  // Optional: Handle click events if you're using SPA-like behavior
  // navItems.forEach(item => {
  //     item.addEventListener('click', function(e) {
  //         // In a real multi-page app, the link would navigate naturally
  //         // This is just for demonstration if using a single page
  //         if (!this.href.includes('#')) {
  //             e.preventDefault();
  //             window.history.pushState({}, '', this.href);
  //             // Dispatch a popstate event to trigger our navigation logic
  //             window.dispatchEvent(new Event('popstate'));
  //         }
  //     });
  // });

  // Handle back/forward navigation
  // window.addEventListener('popstate', function() {
      // const currentPath = window.location.pathname;
      // lists.forEach(item => {
      //     item.classList.remove('active');
      //     const itemPath = item.getAttribute('href');
      //     console.log(itemPath);
          
          
      //     if ((currentPath === '/' || currentPath === '/index.html') && itemPath === '/') {
      //         item.classList.add('active');
      //         // if (pageTitle) pageTitle.textContent = 'Home Page';
      //     } 
      //     else if (currentPath == itemPath) {
      //         item.classList.add('active');
      //         // if (pageTitle) pageTitle.textContent = `${item.textContent.trim()} Page`;
      //     }
      // });
  // });

  //   if (path.includes("home")) {
  //   list.style.backgroundColor = "green";
  // } 
  // // else if (path.includes("about")) {
  // //   list.style.backgroundColor = "lightgreen";
    
  // // } 
  // else if (path.includes("setting")) {
  //   list.style.backgroundColor = "lightcoral";
  // } else {
  //   list.style.backgroundColor = "black"; // default
  // }
  
    
  // })
  // console.log(lists[0]);
    
    

  
  return divElm;
  
}