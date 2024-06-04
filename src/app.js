function generateExcuse() {
  const excuses = [
    "Mi perro se comió la tarea.",
    "Había mucho tráfico.",
    "Me quedé dormido.",
    "Se me olvidó.",
    "Me enfermé de repente.",
    "Tuve una emergencia familiar.",
    "El despertador no sonó.",
    "Perdí la noción del tiempo.",
    "Tuve un problema con el coche.",
    "Me caí y me lastimé.",
    "Se me rompió el zapato.",
    "El autobús se retrasó.",
    "Perdí las llaves de mi casa.",
    "Se cortó la luz en mi barrio.",
    "Me llamó un amigo en apuros.",
    "Tuve que ayudar a un vecino.",
    "Mi computadora no funcionaba.",
    "Tuve una reunión inesperada.",
    "Se inundó mi casa.",
    "Tuve un problema con mi mascota."
  ];
  const randomIndex = Math.floor(Math.random() * excuses.length);
  document.getElementById("excuse").innerText = excuses[randomIndex];
}

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("excuse-button").onclick = generateExcuse;
});
