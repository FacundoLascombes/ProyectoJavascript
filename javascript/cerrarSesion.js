document.getElementById("cerrarSesion").addEventListener("click", cerrar);

function cerrar() {
    bandera = 0;
    localStorage.setItem("bandera", bandera);
    location.reload();
}