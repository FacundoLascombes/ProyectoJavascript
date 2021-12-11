var alumnos = [];
var i = 0;
var local_alumnos = localStorage.getItem('datos');
local_alumnos = JSON.parse(local_alumnos);
var i = 0;

/*
$.each(local_alumnos, function(i, value) {
    $('ul.listaAlumnos').append("<li> Nombre: " + value.nombre + " - Apellido: " + value.apellido + " - Documento: " + value.documento + " - " + value.estado + " - Nota: " + value.promedio + "</li>");
})*/

$("#1").click(function() {
    $.each(local_alumnos, function(i, value) {
        if (local_alumnos[i].materia == 'fisica') {
            $('ul.listaAlumnos').append("<li> Nombre: " + value.nombre + " - Apellido: " + value.apellido + " - Documento: " + value.documento + " - " + value.estado + " - Nota: " + value.promedio + "</li>");
        }
    })
});

$("#2").click(function() {
    $.each(local_alumnos, function(i, value) {
        if (local_alumnos[i].materia == 'literatura') {
            $('ul.listaAlumnos').append("<li> Nombre: " + value.nombre + " - Apellido: " + value.apellido + " - Documento: " + value.documento + " - " + value.estado + " - Nota: " + value.promedio + "</li>");
        }
    })
});

$("#3").click(function() {
    $.each(local_alumnos, function(i, value) {
        if (local_alumnos[i].materia == 'matematica') {
            $('ul.listaAlumnos').append("<li> Nombre: " + value.nombre + " - Apellido: " + value.apellido + " - Documento: " + value.documento + " - " + value.estado + " - Nota: " + value.promedio + "</li>");
        }
    })
});

$("#4").click(function() {
    $.each(local_alumnos, function(i, value) {
        if (local_alumnos[i].materia == 'quimica') {
            $('ul.listaAlumnos').append("<li> Nombre: " + value.nombre + " - Apellido: " + value.apellido + " - Documento: " + value.documento + " - " + value.estado + " - Nota: " + value.promedio + "</li>");
        }
    })
});