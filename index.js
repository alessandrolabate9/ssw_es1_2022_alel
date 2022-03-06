// Import stylesheets
import './style.css';

const posto = document.getElementById('posto');
const nome = document.getElementById('nome');
// due array con la stessa dimensione , posti e prenotazione
var posti = new Array(10);
var prenotazioni = new Array(10);

posti.fill("x");
posti[0] = "Giovanni";
posti[3] = "Marianna";
posti[6] = "Giacomo";
// posti.forEach((posto, index)=>{console.log(posto, index);});
posti.map((x, index) => {
  let btn = document.createElement('button');
  btn.innerHTML = "P"+index;
  btn.value = x;
  posto.appendChild(btn);
  btn.onclick = () => nome.innerHTML = btn.value;
});



//assegnamento nuovi valori
