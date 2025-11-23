const btn = document.getElementById("themeToggle");

// Aplicar modo guardado
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    btn.textContent = "☀️";
} else {
    btn.textContent = "🌙";
}

// Toggle modo oscuro
btn.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        btn.textContent = "☀️";
        localStorage.setItem("theme", "dark");
    } else {
        btn.textContent = "🌙";
        localStorage.setItem("theme", "light");
    }
});

// Carrito
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

function actualizarContador() {
    const contadorElem = document.getElementById("count");
    // actualizar el elemento si existe, si no, evitar error
    if (contadorElem) {
        contadorElem.textContent = carrito.length;
    }
    // mantener también en localStorage por si otras partes usan el array
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

// Inicializar contador en la UI
actualizarContador();

// Agregar producto
function agregarAlCarrito(id) {
    const servicios = [
        { nombre: "Diseño Web", precio: 100 },
        { nombre: "Reparación PC", precio: 50 }
    ];

    carrito.push(servicios[id]);
    localStorage.setItem("carrito", JSON.stringify(carrito));

    actualizarContador();

    alert(`Agregado: ${servicios[id].nombre}`);
}
