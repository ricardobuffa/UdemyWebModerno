function tipoTriangulo(a, b, c) {
    if ((a == b) && (b == c)) {
        return 'Equilatero'
    } else if ((a == b) && (b != c)) {
        return 'Isóceles'
    } else if ((a != b) && (b == c)) {
        return 'Isóceles'
    } else if ((a == c) && (a != b)) {
        return 'Isóceles'
    } else if ((a != b) && (b != c)) {
        return 'Escaleno'
    }
}

//abordagem mais OO
console.log(tipoTriangulo(3,4,5))

function triangulo(a, b, c) {
    this.a = a
    this.b = b
    this.c = c
    this.tipoTriangulo = function(){
        if ((a == b) && (b == c)) {
            return 'Equilatero'
        } else if ((a == b) && (b != c)) {
            return 'Isóceles'
        } else if ((a != b) && (b == c)) {
            return 'Isóceles'
        } else if ((a == c) && (a != b)) {
            return 'Isóceles'
        } else if ((a != b) && (b != c)) {
            return 'Escaleno'
        }
    }
}

retangulo = new triangulo(3,4,5)
console.log(retangulo.tipoTriangulo())
equilatero = new triangulo(3,3,3)
console.log(equilatero.tipoTriangulo())