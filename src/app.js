import { freelancers } from "./data.js";


// === STATE ===
const body = document.querySelector("body");
const section = document.createElement("section");
const mainDiv = document.createElement("div");
const table = document.createElement("table");
//const tblHeader = document.createElement("thead");
const tblBody = document.createElement("tbody");
 
section.classList.add("container");
const names = freelancers.map((e) => e.name);
const occupations = freelancers.map((e) => e.occupation);
const prices = freelancers.map((e) => e.price); 
const MAX_PEOPLE = freelancers.length;
const people = [
  {
    name: "Marc",
    Occupation: "Dev",
    price: 80
  },
  {
    name: "Aaron",
    Occupation: "Dev",
    price: 95
  },
];
const customClasses =[
  'container',
  'bg-dark',
  'text-primary',
];

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

function buildTitles(price) {
  
  mainDiv.setAttribute('class',"content");
  //Title
  const title = document.createElement("h2");
  title.setAttribute('class',"title");
  title.innerHTML = "Freelance Stars";
  //Announce average cost of a freelancer
  const avgPriceText = document.createElement("h3");
  avgPriceText.setAttribute('class',"title");
  avgPriceText.setAttribute('id',"avgPrice");
  avgPriceText.innerHTML = `Average price per hour: $${price} `;
  const tblTitle = document.createElement("h2");
  //tblTitle.classList.add("table-title");
  tblTitle.setAttribute('class', "table-title bg-dark text-primary");
  tblTitle.innerHTML = "Available Freelancers";
  mainDiv.append(title);
  mainDiv.append(avgPriceText);
  mainDiv.append(tblTitle);

  section.append(mainDiv);
}


function buildTable() {
  
  //building rows
  for (let i = 0; i < people.length; i++) {
   console.log(people[i]);
    const row = document.createElement("tr");
    Object.entries(people[i]).forEach((k, v) => {
      let element = (k.toString().split(","))[1];
      const cell = document.createElement("td");
      const cellText = document.createTextNode(element);
      cell.append(cellText);
      row.append(cell);
    })
    tblBody.append(row);
  }
  table.append(tblBody);
  mainDiv.append(table);
  section.append(mainDiv);
}
function updateAveragePrice() { 
  const element = document.getElementById("avgPrice");
  //const price = averagePrice();
  element.innerHTML = `Average price per hour: $${averagePrice()}` ;
}

function addRow() {
  const i = people.length - 1;
  const row = document.createElement("tr");
  Object.entries(people[i]).forEach((k, v) => {
    let element = k.toString().split(",")[1];
    const cell = document.createElement("td");
    const cellText = document.createTextNode(element);
    cell.append(cellText);
    row.append(cell);
  });
  tblBody.append(row);
}

function main() {
  const avgPrice = averagePrice();
  buildTitles(avgPrice);
  buildTable();
  body.append(section);
}

main();

let intervalId = setInterval(() => {
  addPerson();
  addRow();
  updateAveragePrice();

  if (people.length >= freelancers.length) { 
    clearInterval(intervalId);
  }
  
}, 5000);