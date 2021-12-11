document.getElementById("iniciar").addEventListener("click", login);
document.getElementById("registrar").addEventListener("click", register);

var i = 0;
var usuarios = [];

var usuarios_local = localStorage.getItem('users');
usuarios_local = JSON.parse(usuarios_local);
var bandera = 0;

if (bandera = 0) {
    $("#iniciado").css('visibility', 'hidden');
}

class usuario {
    constructor(user, contras) {
        this.user = user;
        this.contras = contras;
    }
}

//Get length of usuarios
const getLengthOfObject = (usuarios_local) => {
    console.log('Getting Lenght of local_alumnos');
    let length0fObject = 0;
    for (let key in usuarios_local) {
        length0fObject++;
    }
    return length0fObject;
}

if (usuarios_local != null) {
    console.log('copying local_alumnos to alumnos');
    var usuarios_length = getLengthOfObject(usuarios_local);
    i = usuarios_length;
    for (let j = 0; j < usuarios_length; j++) {
        usuarios[j] = usuarios_local[j];
        console.log(usuarios[j].user);
        console.log(usuarios[j].contras);
    }
}

function register(usuari, contrasena) {
    usuari = String(document.getElementById("usuar").value);
    contrasena = Number(document.getElementById("pass").value);

    usuarios[i] = new usuario(usuari, contrasena);
    localStorage.setItem('users', JSON.stringify(usuarios));
    i++;
}

function login() {
    let nombrusuario = String(document.getElementById("usuar").value);
    let contra = Number(document.getElementById("pass").value);

    var usuarios_length = getLengthOfObject(usuarios);
    var bandera = 0;

    console.log(nombrusuario);
    console.log(contra);

    for (let q = 0; q < usuarios_length; q++) {
        if (nombrusuario == usuarios[q].user && contra == usuarios[q].contras) {
            bandera = 1;
        }
    }

    if (bandera == 1) {
        localStorage.setItem("bandera", bandera);
        window.location.href = '/index.html';
    }
    if (bandera == 0) {
        alert("Usuario y/o contrasena incorrectos");
    }
}