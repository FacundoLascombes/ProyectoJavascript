var alumnos = [];
var i = 0;
var local_alumnos = localStorage.getItem('datos');
var top_alumnos = 6;
local_alumnos = JSON.parse(local_alumnos);

var x = (local_alumnos.length);
console.log(x);
var auxiliar = [];

for (let i = 0; i < local_alumnos.length; i++) {
    j = i;
    auxiliar = local_alumnos[i];
    while (j > 0 && auxiliar.promedio > local_alumnos[j - 1].promedio) {
        local_alumnos[j] = local_alumnos[j - 1];
        j = j - 1;
    }
    local_alumnos[j] = auxiliar;
    console.log(auxiliar);
}

$.each(local_alumnos, function(i, value) {
    $('ul.listaAlumnos').append("<li> Nombre: " + value.nombre + " - Apellido: " + value.apellido + " - Documento: " + value.documento + " - " + value.estado + " - Nota: " + value.promedio + "</li>");

    if (i == top_alumnos - 1) {
        $(`li:nth-child(${top_alumnos})`).css("margin-bottom", "50px");
    }
})

if (local_alumnos.length >= 1 && local_alumnos.length <= top_alumnos) {
    console.log(local_alumnos.length);
    $('header').after("<h1 class = 'titulo';> Estos " + local_alumnos.length + " Alumnos estan en el Top </h1>");
} else {
    $('header').after("<h1 class = 'titulo';> Estos " + top_alumnos + " Alumnos estan en el Top </h1>");
}