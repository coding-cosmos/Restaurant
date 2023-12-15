function Menu() {
  const homeDiv = document.createElement("div");
  const heading = document.createElement("h1");
  heading.innerText = "Our menu";

  homeDiv.appendChild(heading);

  return homeDiv;
}

export default Menu;
