function troisNombres() {
   
    var n1 = prompt("1er nombre :");
    var n2 = prompt("2ème nombre :");
    var n3 = prompt("3ème nombre :");

    var petit, moyen, grand;

    if (n1 <= n2 && n1 <= n3) {
        petit = n1;
        if (n2 <= n3) {
            moyen = n2;
            grand = n3;
        } else {
            moyen = n3;
            grand = n2;
        }
    } else if (n2 <= n1 && n2 <= n3) {
        petit = n2;
        if (n1 <= n3) {
            moyen = n1;
            grand = n3;
        } else {
            moyen = n3;
            grand = n1;
        }
    } else {
        petit = n3;
        if (n1 <= n2) {
            moyen = n1;
            grand = n2;
        } else {
            moyen = n2;
            grand = n1;
        }
    }

   
    console.log("1er nombre : " + n1);
    console.log("2ème nombre : " + n2);
    console.log("3ème nombre : " + n3);
    console.log("les nombres dans l'ordre croissant : " + petit + " " + moyen + " " + grand);
}

troisNombres();