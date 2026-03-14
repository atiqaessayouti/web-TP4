function Raca1(A) {
    let u = A / 2;
    while (Math.abs(u * u - A) >= 1e-6) {
        u = 0.5 * (u + A / u);
    }
    console.log("Pour un nombre A = " + A);
    console.log("Valeur approchée de la racine carrée = " + u);
}
 
Raca1(19.23);
Raca1(25);
Raca1(2);
