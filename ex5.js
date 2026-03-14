function Premier() {
    var n = parseInt(prompt("Un entier positif :"));

    if (n < 2) {
        console.log(n + " n'est pas un nombre premier.");
        return;
    }

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            console.log(n + " n'est pas un nombre premier, il est divisible par " + i);
            return;
        }
    }

    console.log(n + " est un nombre premier");
}

Premier();