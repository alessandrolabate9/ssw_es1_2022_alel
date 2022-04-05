// Import stylesheets
import './style.css';

const posto = document.getElementById('posto');
const nome = document.getElementById('nome');
//const posti = new Array(10).fill('x');
//const file = new Array(5);
//file.fill(posti);
const posti = 10;
const file = 5;
const prenotazione = new Array(file).fill("").map(()=>Array(posti).fill('x'));
prenotazione[1][3] = "Gio";
console.log(prenotazione);
/*
file.map((y, i) => {
  var br = document.createElement('br');
  var  p = document.createElement('p');
  posto.append(br);
  posti.map((j, l)=> {
      const btn = document.createElement('button');
      btn.value = j;
      btn.innerHTML = "P"+i+l;
      btn.onclick = () => nome.innerHTML = btn.value;
      posto.appendChild(btn);
      
  });
})
/*
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
*/