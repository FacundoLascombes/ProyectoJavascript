var alumnos = [];
var i = 0;
var local_alumnos = localStorage.getItem('datos');
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

    if (i == 2) {
        $('ul.listaAlumnos').append("<h1 style = 'text-align: center;'> Top 3 mejores alumnos del curso </h1>");
    }
})