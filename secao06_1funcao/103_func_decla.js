//vantagem do declaration faz o içamento - hoisting
console.log (soma(3, 4))

//da erro fazer isso com o sub - lá embaixo ela funciona
//console.log (sub(3, 4))
//o mesmo vale para named function expression - da erro - lá embaixo ela funciona
//console.log (mult(3, 4))

//function declaration
function soma(x, y) {
    return x + y
}

// function expression (anonima)
const sub = function(x, y) {
    return x - y
}
console.log (sub(3, 4))

//named function expression, uma constante ganha e nao e anonima
const mult = function mult(x, y) {
    return x * y
}
console.log (mult(3, 4))