let NombreAmigos = [];

function agregarAmigo() {
    let nombre = document.getElementById("amigo").value;
    console.log(nombre);
    NombreAmigos.push(nombre);
    document.getElementById("amigo").value = ""; // Limpia el input después de agregar
}

