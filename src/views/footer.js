export default function footer() {
  const divElm = document.createElement("footer");
  divElm.className = "footer";
  divElm.innerHTML = `
    <ul class="footer__lists">
      <li><a href="#" class="list active" data-sec="home"><i class='fas fa-home'></i><p>Home</p></a></li>
      <li><a href="#" class="list" data-sec="archive"><i class='far fa-bookmark'></i><p>Archive</p></a></li>
      <li><a href="#" class="list" data-sec="popular"><i class='far fa-star'></i><p>Popular</p></a></li>
      <li><a href="#" class="list" data-sec="setting"><i class='fas fa-cog'></i><p>Settings</p></a></li>
    </ul>
  
  `
  
  
  return divElm;
}