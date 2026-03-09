function degreC() {
    
    var tempF = prompt("Une température en Fahrenheit :");
    
    
    var tempC = (5 / 9) * (tempF - 32);

   
    var resultat = "cette température équivaut à " + tempC + " degrés Celsius";
    
    
    console.log("Une température en Fahrenheit : " + tempF);
    console.log(resultat);
    alert(resultat);
}


degreC();