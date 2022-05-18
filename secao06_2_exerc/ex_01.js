function calculos(x, y){
    console.log(`A soma vale: ${x + y}`)
    console.log(`A subtracao vale: ${x - y}`)
    console.log(`A multiplicacao vale: ${x * y}`)
    console.log(`A divisao vale: ${x / y}`)
}

calculos(10,20)

//alternativa mais oo

function calculos2 (x,y){
    this.x = x
    this.y = y
    this.soma = function () {
        return x + y
    } 
    this.subtracao = function () {
        return x - y
    }
    this.multiplicacao = function () {
        return x * y
    }
    this.divisao = function () {
        return x / y
    }
}


var calculai = new calculos2(30,40)
console.log(calculai.soma())
console.log(calculai.subtracao())
console.log(calculai.multiplicacao())
console.log(calculai.divisao())




