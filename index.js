// Import stylesheets
import './style.css';

// Write Javascript code!
const btn = document.createElement('button');
const valore = 'Marianna';
var posto = document.getElementById('posto');
//per ogni posizione creare un button
// associamo un value vuoto
// in alcuni value pieno
const posizione = new Array(10);
for(let i = 0; i<posizione.length; i++){
  const btn00 = document.createElement("button");
  btn00.innerHTML = "P"+i;
  posto.appendChild(btn00);
};
btn.addEventListener('click', () => {
  document.getElementById('nome').innerHTML = valore;
  
});
