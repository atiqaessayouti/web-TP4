function Fibo1(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    let a = 0, b = 1;
    for (let i = 2; i <= n; i++) {
        let c = a + b;
        a = b;
        b = c;
    }
    return b;
}
 
console.log("Le terme u(10) de Fibonacci = " + Fibo1(10));
console.log("Le terme u(15) de Fibonacci = " + Fibo1(15));
