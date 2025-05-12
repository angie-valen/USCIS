const traducciones = {
  es: {
    titulo: "Bienvenido",
    descripcion: "Esta es una página web multilingüe.",
  },
  en: {
    titulo: "Welcome",
    descripcion: "This is a multilingual website.",
  },
};

function cambiarIdioma() {
  const idioma = document.getElementById("selector-idioma").value;
  document.getElementById("titulo").textContent = traducciones[idioma].titulo;
  document.getElementById("descripcion").textContent = traducciones[idioma].descripcion;
}
