// Import stylesheets
import './style.css';

const posto = document.getElementById('posto');
const nome = document.getElementById('nome');
const posti = 10;
const file = 5;
const prenotazione = new Array(file).fill("").map(()=>Array(posti).fill('x'));
const prenotazione_palchi ="";
prenotazione[0][7] = "Aldo";
prenotazione[1][3] = "Giovanna";
prenotazione[4][2] = "Giacomo";
console.log(prenotazione);
prenotazione.map((p, pindex) =>{
  posto.appendChild(document.createElement("br"));
  p.map((f, findex)=>{
    const btn = document.createElement('button');
    btn.value = f;
    btn.innerHTML = "P"+findex+pindex;
    if (btn.value=='x')
      btn.style ="color:green";
    else
      btn.style="color:red";
    btn.onclick = () => nome.innerHTML = btn.value;
    posto.appendChild(btn);
  });
})