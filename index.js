// Import stylesheets
import './style.css';

// Write Javascript code!
var btn = document.createElement("button");
var valore = "Marianna"
btn.innerHTML = "P";
var posto = document.getElementById("posto");
posto.appendChild(btn);
btn.addEventListener("click", () => {
  document.getElementById("nome").innerHTML = valore
});