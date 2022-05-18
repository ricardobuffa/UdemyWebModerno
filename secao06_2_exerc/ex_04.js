function divisaoResto(a, b) {
    console.log(a/b, a%b)
}

divisaoResto(7,3)

//pegada mais oo
function parnumeros(a,b) {
    this.a = a,
    this.b = b,
    this.divisao = function(){
        return(a/b)
    },
    this.resto = function(){
        return(a%b)
    }
}

cincoedois = new parnumeros(5,2)
console.log(cincoedois.divisao())
console.log(cincoedois.resto())
