function progAritimetica(n, a1, r) {
    let vetorderetorno = [];
    for (let i = 0; i < n; i++) {
        vetorderetorno.push(a1+(i-1)*r)
    }
    return vetorderetorno;
}
function proggeometrica(n, a1, q) {
    let vetorderetorno = [];
    for (let i = 0; i < n; i++) {
        vetorderetorno.push(a1*(q**(i-1)))
    }
    return vetorderetorno;
}


console.log(progAritimetica(5, 10, 5))
console.log(proggeometrica(5, 10, 5))