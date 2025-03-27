import { freelancers } from "./data.js";


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


function addPerson() {
  const name = names[Math.floor(Math.random() * names.length)];
  const occupation = occupations[Math.floor(Math.random() * occupations.length)];
  const price = prices[Math.floor(Math.random() * prices.length)];

  people.push({ name, occupation, price });

}
