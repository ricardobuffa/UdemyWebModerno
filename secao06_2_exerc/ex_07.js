function bhaskara(a, b, c) {
    let delta = (b * b) - (4 * a * c)
    console.log(delta)
    if (delta < 0) {
        return ('Delta é negativo')
    } else if (delta >= 0) {
        let vetorresposta = [(-b + Math.sqrt(delta)) / (2 * a), (-b - Math.sqrt(delta)) / (2 * a)]
        return (vetorresposta)
    }
}

console.log(bhaskara(2,-5,-12))
console.log(bhaskara(1,1,1))
console.log(bhaskara(3,4,-5))

console.log(bhaskara(2,5,-12))

console.log(bhaskara(4,4,1))