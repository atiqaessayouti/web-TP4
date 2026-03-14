function pyramide() {
    let tailleSaisie = prompt("donnez taille du motif :");
    let taille = parseInt(tailleSaisie);
    for (let i = 1; i <= taille; i++) {
        let ligne = "";
        let nbEtoiles = (2 * i) - 1;  
        for (let j = 0; j < nbEtoiles; j++) {
            ligne += "*";
        }
        console.log(ligne);
    }
}
pyramide();