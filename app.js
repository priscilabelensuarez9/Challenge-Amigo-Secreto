let NombreAmigos = [];

function agregarAmigo() {
    let nombre = document.getElementById("amigo").value;
    console.log(nombre);
    NombreAmigos.push(nombre);
    document.getElementById("amigo").value = ""; // Limpia el input después de agregar
}

function mostrarLista(elemento, texto) {
document.getElementById("listaDeAmigos").value = `${agregarAmigo}`;
if (NombreAmigos.length === 0) {
    elemento.innerHTML = "Por favor, inserte un nombre.";
    
}
}