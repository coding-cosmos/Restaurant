function Contact() {
  const homeDiv = document.createElement("div");
  const heading = document.createElement("h1");
  heading.innerText = "Contact us";

  homeDiv.appendChild(heading);

  return homeDiv;
}

export default Contact;
