// Import stylesheets
import './style.css';

const posto = document.getElementById('posto');
const nome = document.getElementById('nome');
// due array con la stessa dimensione , posti e prenotazione
var posti = new Array(
  new Array(10).fill('x'),
  new Array(10).fill('x'),
  new Array(10).fill('x'),
  new Array(10).fill('x'),
  new Array(10).fill('x'),
  new Array(10).fill('x'),
  new Array(10).fill('x'),
  new Array(10).fill('x'),
  new Array(10).fill('x'),
  new Array(10).fill('x'),
);
var prenotazioni = new Array(10);
posti[0][2] = "Aldo";
posti[2][5] = "Marianna";
posti[8][7] = "Giacomo";
console.log(posti);
// posti.forEach((posto, index)=>{console.log(posto, index);});
posti.map((x, index) => {
  let btn = document.createElement('button');
  btn.innerHTML = "P"+index;
  btn.value = x;
  posto.appendChild(btn);
  btn.onclick = () => nome.innerHTML = btn.value;
});



//assegnamento nuovi valori
