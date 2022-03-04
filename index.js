// Import stylesheets
import './style.css';

// Write Javascript code!
const btn = document.createElement("button");
const valore = "Marianna"
btn.innerHTML = "P";
const posto = document.getElementById("posto");
posto.appendChild(btn);
btn.addEventListener("click", () => {
  document.getElementById("nome").innerHTML = valore
});