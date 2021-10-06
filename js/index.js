import { getRandomInt } from "../js/random.js";
var numberTarget = 1;

const createCard = () => {
  //   Header
  const target = document.createElement("article");
  target.className = "target";
  target.id = "target" + numberTarget;
  const head = document.createElement("header");
  const imagen = document.createElement("img");
  imagen.src = `https://source.unsplash.com/random/${getRandomInt()}`;
  head.appendChild(imagen);
  //   main plan
  const main = document.createElement("main");
  const title = document.createElement("h1");
  const titleText = document.createTextNode("Order Summary " + numberTarget);
  title.appendChild(titleText);
  const paragraph = document.createElement("p");
  const paragraphText = document.createTextNode(
    "You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!"
  );
  paragraph.appendChild(paragraphText);
  const section1 = document.createElement("section");
  section1.className = "plan";
  const div1 = document.createElement("div");
  div1.className = "div1"
  const imgIcon = document.createElement("img");
  imgIcon.src = `../images/icon-music.svg`;
  div1.appendChild(imgIcon);
  const div2 = document.createElement("div");
  div2.className = "div2"
  const sp1 = document.createElement("span");
  sp1.className = "span1";
  const sp1Text = document.createTextNode("Annual Plan");
  sp1.appendChild(sp1Text);
  const sp2 = document.createElement("span");
  sp2.className = "span2";
  const sp2Text = document.createTextNode("$59.99/year");
  sp2.appendChild(sp2Text);
  div2.appendChild(sp1);
  div2.appendChild(sp2);
  const div3 = document.createElement("div");
  div3.className = "div3"
  const aref = document.createElement("a");
  aref.href = "#";
  const arefText = document.createTextNode("Change");
  aref.appendChild(arefText);
  div3.appendChild(aref);
  section1.appendChild(div1);
  section1.appendChild(div2);
  section1.appendChild(div3);
  main.appendChild(title);
  main.appendChild(paragraph);
  main.appendChild(section1);
  //   botones
  const section2 = document.createElement("section");
  section2.className = "fooder";
  const btn1 = document.createElement("button");
  btn1.className = "button1";
  const btn1Text = document.createTextNode("Proceed to Payment");
  btn1.appendChild(btn1Text);
  const btn2 = document.createElement("button");
  btn2.className = "button2";
  const btn2Text = document.createTextNode("Cancel Order");
  btn2.appendChild(btn2Text);
  section2.appendChild(btn1);
  section2.appendChild(btn2);

  parseInt(numberTarget ++);
  target.appendChild(head);
  target.appendChild(main);
  target.appendChild(section2);

  return target;
};

const appCard = document.querySelector("#app");
const addCardButton = document.querySelector("#add");
const removeCardButton = document.querySelector("#remove");

const addCard = () => {
  appCard.appendChild(createCard());
};

const removeCard = () => {
    if (numberTarget > 0) {
        parseInt(numberTarget --);
        const deleteTarget = document.getElementById("target" + numberTarget);
        appCard.removeChild(deleteTarget);
    }
};

addCardButton.addEventListener("click", addCard);
removeCardButton.addEventListener("click", removeCard);
