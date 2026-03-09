function hjms() {
    var numbsc = prompt("Une durée en secondes :");
    var s = parseInt(numbsc); 
    var jours = Math.floor(s / (24 * 3600));
    var rest = s % (24 * 3600);

    var heure = Math.floor(rest / 3600);
    var restH = rest % 3600;

    var minutes = Math.floor(restH / 60);
    var secondes = restH % 60;

    console.log("Une durée en secondes : " + s);
    console.log("cette durée équivaut à " + jours + " jours " + heure + " heures " + minutes + " minutes " + secondes + " secondes");
}
hjms();