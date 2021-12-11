const api = new XMLHttpRequest;
const kelvin = 273.15;

const url = `https://api.openweathermap.org/data/2.5/weather?id=3833875&appid=322fcec4646b0573f1b5e1f02181c8e1`;

api.open('GET', url, true);
api.send();

api.onreadystatechange = function() {

    if (this.status == 200 && this.readyState == 4) {
        let clima = JSON.parse(this.responseText);

        var cielo = clima.weather[0].description;
        var temp = (clima.main.temp - kelvin).toFixed(2);
        var icono = clima.weather[0].icon;
        var ciudad = clima.name;
        icono = `http://openweathermap.org/img/wn/${icono}@2x.png`;

        document.getElementById("ciudad").innerHTML = ciudad;
        document.getElementById("cielo").innerHTML = cielo;
        document.getElementById("temp").innerHTML = `${temp} °C`;
        document.getElementById("ciudad").innerHTML = ciudad;
        document.getElementById('icon-clima').src = icono;
    }
}