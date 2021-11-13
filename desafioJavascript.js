document.getElementById("calcular").addEventListener("click",
    calcularPromedio);
document.getElementById("limpiarStorage").addEventListener("click", limpiarStorage);

/*----------------Clase Alumno----------------*/

class alumno {
    constructor(nombre, apellido, documento, promedio, estado) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.documento = documento;
        this.promedio = promedio;
        this.estado = estado;
    }
}

/*----------------Guardar Alumno----------------*/

var alumnos = [];
var i = 0;
var local_alumnos = localStorage.getItem('datos');
local_alumnos = JSON.parse(local_alumnos);
createList();

//Get length of alumnos
const getLengthOfObject = (local_alumnos) => {
    console.log('Getting Lenght of local_alumnos');
    let length0fObject = 0;
    for (let key in local_alumnos) {
        length0fObject++;
    }
    return length0fObject;
}

if (local_alumnos != null) {
    console.log('copying local_alumnos to alumnos');
    var alumnos_length = getLengthOfObject(local_alumnos);
    i = alumnos_length;
    for (let k = 0; k < alumnos_length; k++) {
        alumnos[k] = local_alumnos[k];
    }
    listarAlumnos();
}

function createList() {
    var ul = document.createElement('ul');
    ul.setAttribute('id', 'listview');
    const contenedor = document.getElementsByClassName('contenedor')[0];
    contenedor.appendChild(ul);
    var listview = document.getElementById('listview');
}

function listarAlumnos() {
    limpiarLista();
    console.log('List alumnos');

    for (const alumno of alumnos) {
        var itemList = document.createElement('li');
        itemList.innerHTML = `${alumno.nombre} ${alumno.apellido}, ${alumno.documento}, Promedio: ${alumno.promedio}, Estado ${alumno.estado}`;
        itemList.classList.add('alumno');
        listview.appendChild(itemList);
    }
}

function calcularPromedio(nota1, nota2, nota3) {
    console.log('calculating average');

    var nota1 = parseInt(document.getElementById("n1").value);
    var nota2 = parseInt(document.getElementById("n2").value);
    var nota3 = parseInt(document.getElementById("n3").value);

    if ((nota1 < 1 || nota2 < 1 || nota3 < 1) || (nota1 > 10 || nota2 > 10 || nota3 > 10)) {
        alert("Ingrese numeros validos");
        console.log('invalid input');
    } else {
        console.log('saveing input to localstorage');
        var promedio = (nota1 + nota2 + nota3) / 3;

        if (promedio >= 7) {
            estado = 'Aprobado';
        } else {
            estado = 'Desaprobado';
        }

        nombre = String(document.getElementById("nomb").value);
        apellido = String(document.getElementById("ape").value);
        documento = parseInt(document.getElementById("doc").value);

        alumnos[i] = new alumno(nombre, apellido, documento, promedio, estado);

        localStorage.setItem('datos', JSON.stringify(alumnos));
        i++;
        listarAlumnos();
    }
}

function limpiarStorage() {
    console.log('cleaning local storage');
    localStorage.clear();
    location.reload();
    limpiarLista();
}

function limpiarLista() {
    console.log('removing list');
    listview.innerHTML = "";
}