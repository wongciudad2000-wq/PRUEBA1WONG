const planta = document.getElementById("planta");
const boton = document.getElementById("regarBtn");

boton.addEventListener("click", () => {
  planta.style.boxShadow = "0 0 60px rgba(0, 255, 0, 0.7)";
  boton.innerText = "🌿 Creciendo...";
  setTimeout(() => {
    planta.style.boxShadow = "0 0 40px rgba(0, 128, 0, 0.3)";
    boton.innerText = "💧 Regar planta";
  }, 2000);
});
