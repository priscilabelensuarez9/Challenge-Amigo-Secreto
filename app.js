let NombreAmigos = [];

function agregarAmigo() {
    let nombre = document.getElementById("amigo").value;
    console.log(nombre);
    NombreAmigos.push(nombre);
    document.getElementById("amigo").value = ""; // Limpia el input después de agregar
    ListarAmigos(); // Llama a la función para actualizar la lista
}



function ListarAmigos() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpia la lista antes de agregar
    for (let i = 0; i < NombreAmigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = NombreAmigos[i];
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    if (NombreAmigos.length === 0) {
        alert("Por favor, inserte un nombre.");
        return;
    } else {
        let amigoSeleccionado = NombreAmigos[Math.floor(Math.random() * NombreAmigos.length)];
      let resultadoSorteo = document.getElementById("resultado");
       resultadoSorteo.textContent = "El amigo secreto es: " + amigoSeleccionado;
    innerHTML = ""; // Limpia el input después de sortear
    ListarAmigos(); // Llama a la función para actualizar la lista
    }
}


