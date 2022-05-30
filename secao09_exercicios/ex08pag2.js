const multiplicar = function(num1, num2) {
    var temp = 0
    if ((num1==0)||(num2==0)) {return 0}
    else {
        for (let i = 0; i<num2; i++){
            
            temp = temp + num1
//            console.log(i, temp)
        }
    }
    return temp
}

console.log(multiplicar(5, 5))

console.log(multiplicar(0, 5))

console.log(multiplicar(5, 0))

console.log(multiplicar(5, 3))

console.log(multiplicar(5, 7))