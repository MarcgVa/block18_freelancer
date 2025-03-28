import { freelancers } from "./data.js";
import { buildTable, addRow, deleteRow } from "./tables.js";

// === STATE ===

// === DOM ===
const body = document.querySelector("body");
const section = document.createElement("section");
const mainDiv = document.createElement("div");
const table = document.createElement("table");
const tblBody = document.createElement("tbody");
section.setAttribute('class',"container");

// === arrays ===

const names = freelancers.map((e) => e.name);
const occupations = freelancers.map((e) => e.occupation);
const prices = freelancers.map((e) => e.price); 
const MAX_PEOPLE = freelancers.length;
const people = [
  {
    name: "Marc",
    Occupation: "programmer",
    price: 80
  },
  {
    name: "Aaron",
    Occupation: "programmer/teacher",
    price: 95
  },
];


// === functions ===

function addPerson() {
  const name = names[Math.floor(Math.random() * names.length)];
  const occupation = occupations[Math.floor(Math.random() * occupations.length)];
  const price = prices[Math.floor(Math.random() * prices.length)];
  people.push({ name, occupation, price });
}

function averagePrice() {
  const totalPrice = people.reduce((t, n) => t + n.price, 0);
  return Math.round(totalPrice / people.length);
}

function buildTitles() {
  mainDiv.setAttribute('class',"content");
  //Title
  const title = document.createElement("h2");
  title.setAttribute('class',"title");
  title.innerHTML = "Freelance Stars";
  const avgPriceText = document.createElement("h3");
  avgPriceText.setAttribute('class',"title");
  avgPriceText.setAttribute('id',"avgPrice");
  avgPriceText.innerHTML = `Average price per hour: $${averagePrice()} `;
  const tblTitle = document.createElement("h2");
  tblTitle.setAttribute('class', "table-title");
  tblTitle.innerHTML = "Available Freelancers";
  mainDiv.append(title);
  mainDiv.append(avgPriceText);
  mainDiv.append(tblTitle);
  section.append(mainDiv);
}

function updateAveragePrice() { 
document.getElementById("avgPrice").innerHTML = `Average price per hour: $${averagePrice()}` ;
}

function main() {
  const avgPrice = averagePrice();
  buildTitles(avgPrice);
  buildTable(table, tblBody, people);
  mainDiv.append(table);
  section.append(mainDiv);
  body.append(section);
}

// === main ===

main();

let intervalId = setInterval(() => {
  addPerson();
  addRow(tblBody,people[people.length - 1]);
  updateAveragePrice();

  if (people.length >= MAX_PEOPLE) { 
    clearInterval(intervalId);
  }
  
}, 5000);
