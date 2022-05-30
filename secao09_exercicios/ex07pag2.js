const estaEntre = function(num, nummin, nummax, inclusivo=false) {
    if (inclusivo) {
        if ((nummin<num) && (nummax>num)) {
            return true
        } else if (nummin==num) {
            return true
        } else if (nummax==num) {
            return true
        } else {
            return false
        }
    } else {
            if ((nummin<num) && (nummax>num)) {
                return true
            } else return false
        }
}

console.log(estaEntre(10,1,50))
console.log(estaEntre(16,100,150))
console.log(estaEntre(3,150,3))
console.log(estaEntre(3,150,3, true))
console.log(estaEntre(150,150,3, true))