function planodesaude(idade){
    switch (true){
        case (idade<10): {
            return 180;
            break;
        }
        case (idade<30): {
            return 150;
            break;
        }
        case (idade<=60): {
            return 195;
            break;
        }
        case (idade>60): {
            return 230;
            break;
        }

    }
}

console.log(planodesaude(61))