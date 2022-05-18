function ImprimeReais(valor){
    let text = valor.toString()
    const myArray = text.split(".");
    if (myArray.length == 1) {
        return (`R$${text}`)
    } else if (myArray.length == 2) {
        let esqvirgula = myArray[0]
        let dirvirgula = myArray[1]
        return (`R$${esqvirgula}`+','+`${dirvirgula.substring(0,2)}`)
    }
}
console.log(ImprimeReais(100.99209))