var alumnos = [];
var i = 0;
var local_alumnos = localStorage.getItem('datos');
local_alumnos = JSON.parse(local_alumnos);

$("#1").click(function() {
    $.each(local_alumnos, function(i, value) {
        for (let k = 0; k < 3; k++) {
            if (local_alumnos[i].materia[k] == 'fisica') {
                $('ul.listaAlumnos').append("<li> Nombre: " + value.nombre + " - Apellido: " + value.apellido + " - Documento: " + value.documento + " - " + value.estado + " - Nota: " + value.promedio + "</li>");
            }
        }
    })
});

$("#2").click(function() {
    $.each(local_alumnos, function(i, value) {
        for (let k = 0; k < 3; k++) {
            if (local_alumnos[i].materia[k] == 'literatura') {
                $('ul.listaAlumnos').append("<li> Nombre: " + value.nombre + " - Apellido: " + value.apellido + " - Documento: " + value.documento + " - " + value.estado + " - Nota: " + value.promedio + "</li>");
            }
        }
    })
});

$("#3").click(function() {
    $.each(local_alumnos, function(i, value) {
        for (let k = 0; k < 3; k++) {
            if (local_alumnos[i].materia[k] == 'matematica') {
                $('ul.listaAlumnos').append("<li> Nombre: " + value.nombre + " - Apellido: " + value.apellido + " - Documento: " + value.documento + " - " + value.estado + " - Nota: " + value.promedio + "</li>");
            }
        }
    })
});


$("#4").click(function() {
    $.each(local_alumnos, function(i, value) {
        for (let k = 0; k < 3; k++) {
            if (local_alumnos[i].materia[k] == 'quimica') {
                $('ul.listaAlumnos').append("<li> Nombre: " + value.nombre + " - Apellido: " + value.apellido + " - Documento: " + value.documento + " - " + value.estado + " - Nota: " + value.promedio + "</li>");
            }
        }
    })
});