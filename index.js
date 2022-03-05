// Import stylesheets
import './style.css';

var posizioni = new Array(10);
//prima posizione - esercizio precedente
const posto = document.getElementById("posto");
const primo_posto = document.createElement("button");
posto.appendChild(primo_posto);
primo_posto.innerHTML = "P0";
primo_posto.setAttribute('class', 'posto');
primo_posto.value = "Giovanni";
//assegnamento nuove posizioni da oggetto-array 
for (let i =1; i<posizioni.length; i++){
  let btn00 = document.createElement("button");
  btn00.setAttribute("id", "P"+i);
  btn00.setAttribute('class', 'posto');
  btn00.innerHTML = "P"+i;
  posto.appendChild(btn00);
}
//assegnamento nuovi valori
document.getElementById("P3").value = "Marianna";
document.getElementById("P6").value = "Giacomo";
//gestione click button
const elementi = Array.from(document.getElementsByClassName('posto'));
for(let el of elementi){
  el.addEventListener('click', () => {document.getElementById("nome").innerHTML = el.value});
}