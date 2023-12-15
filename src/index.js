import "./styles.css";
import Home from "./home";
import Nav from "./nav";
import Contact from "./contact";
import Menu from "./menu";

function markCurrent(currentTab) {
  const tabs = document.querySelectorAll(".tab");
  tabs.forEach((tab) => {
    if (tab === currentTab) {
      tab.classList = "tab current";
    } else {
      tab.classList = "tab";
    }
  });
}

function switchTabs() {
  const tabs = document.querySelectorAll(".tab");
  const container = document.querySelector("#content");
  console.log(tabs);
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      container.innerHTML = "";
      markCurrent(tab);
      switch (tab.id) {
        case "home":
          container.appendChild(Home());
          break;
        case "menu":
          container.appendChild(Menu());
          break;
        case "contact":
          container.appendChild(Contact());
          break;
      }
    });
  });
}

function render() {
  const container = document.querySelector("#content");
  const body = document.querySelector("body");

  body.appendChild(Nav());
  body.appendChild(container);
  container.appendChild(Home());
}

render();
switchTabs();
