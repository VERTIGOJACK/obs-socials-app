import socials from "./config/socials.js";
import config from "./config/config.js";
import sleep from "./sleep.js";

const app = document.getElementById("app");

//change root css from config
document.documentElement.style.setProperty("--image-tint", config.imageTint);
document.documentElement.style.setProperty("--text-color", config.textColor);
document.documentElement.style.setProperty("--title-color", config.titleColor);

for (let index = 0; index < socials.length; index++) {
  const social = socials[index];

  //create containing elements
  const containerHTML = document.createElement("div");
  containerHTML.id = "container-" + index;
  containerHTML.classList.add("container");
  containerHTML.classList.add("deactivate");

  //extra container for name layout
  const namesContainerHTML = document.createElement("div");
  namesContainerHTML.classList.add("names-container");

  //create information elements
  const nameHTML = document.createElement("h1");
  const handleHTML = document.createElement("p");
  const imageHTML = document.createElement("img");

  //link info from json to html
  nameHTML.textContent = social.name;
  handleHTML.textContent = social.handle;
  imageHTML.src = "images/" + social.image;

  //append names to namescontainer
  namesContainerHTML.appendChild(nameHTML);
  namesContainerHTML.appendChild(handleHTML);

  //append to container
  containerHTML.appendChild(namesContainerHTML);
  if (social.image != "") {
    containerHTML.appendChild(imageHTML);
  }

  //append to app
  app.appendChild(containerHTML);
}

let firstLoop = true;

const animate = async () => {
  for (let index = 0; index < app.children.length; index++) {
    let current = app.childNodes[index];
    let last;

    if (index == 0) {
      last = app.childNodes[app.children.length - 1];
    } else {
      last = app.childNodes[index - 1];
    }

    if (last.classList.contains("activate")) {
      last.classList.remove("activate");
      last.classList.add("deactivate");
    }

    current.classList.remove("deactivate");
    current.classList.add("activate");

    await sleep(config.speedSeconds * 1000);
  }
  firstLoop = false;
  await sleep(config.delaySeconds * 1000);
  animate();
};

animate();
