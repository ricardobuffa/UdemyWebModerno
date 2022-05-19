function encontraParesEntre (n, m) {
    let vetorretorno = [];
    for (let i = n; i < (m+1); i ++){
        if ((i%2)==0) {
            vetorretorno.push(i)
        }
    }
    return vetorretorno;
}

console.log(encontraParesEntre(1,100))
console.log(encontraParesEntre(10,200))