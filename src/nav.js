function Nav() {
  const nav = document.createElement("nav");
  nav.innerHTML = `
     <div class="logo">Dev Cafe</div>
        <ul>
            <li class = "tab current" id="home">Home</li>
            <li class = "tab" id="menu">Menu</li>
            <li class = "tab" id="contact">Contact</li>
        </ul>`;

  return nav;
}

export default Nav;