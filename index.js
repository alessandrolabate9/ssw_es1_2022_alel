// Import stylesheets
import './style.css';

const platea = document.getElementById('platea');
const nome = document.getElementById('nome');
const palchi = document.getElementById('palchi');
const posti = 10;
const file = 5;
const posti_palchi = 4;
const file_palchi = 3;
const prenotazione = new Array(file).fill("").map(()=>Array(posti).fill('x'));
const prenotazione_palchi = new Array(3).fill("").map(()=>
  new Array(posti_palchi).fill('x')
);
prenotazione[0][7] = "Aldo";
prenotazione[1][3] = "Giovanna";
prenotazione[4][2] = "Giacomo";
prenotazione_palchi[1][2] ="Anna";
prenotazione_palchi[2][0] = "Marlena";
console.log(prenotazione, prenotazione_palchi);
prenotazione.map((p, pindex) =>{
  platea.appendChild(document.createElement("br"));
  p.map((f, findex)=>{
    const btn = document.createElement('button');
    btn.value = f;
    btn.innerHTML = "P"+findex+pindex;
    if (btn.value=='x')
      btn.style ="color:green";
    else
      btn.style="color:red";
    btn.onclick = () => nome.innerHTML = btn.value;
    platea.appendChild(btn);
  });
});
prenotazione_palchi.map(  (prenota, prenotaindex)=>{
  palchi.appendChild(document.createElement("br"));
  prenota.map((poltrona, poltronaindex) => {
      const btn = document.createElement('button');
      btn.value=poltrona;
      btn.innerHTML = "PA"+poltronaindex+prenotaindex;
      if(btn.value=='x')
        btn.style = "color:green";
      else
        btn.style="color:red";
      btn.onclick = () => nome.innerHTML = btn.value;
      palchi.appendChild(btn);
  });
});