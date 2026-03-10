function verificarParidade(n){
    let validar;
    if(n % 2 == 0){
        return validar = true;
    }else{
        return validar = false;
    }
}

function apresentarMensagemParidade(n){
    if(verificarParidade(n) == true){
        console.log(`${n} é par`)
    }else{
        console.log(`${n} é impar`);
    }
}

apresentarMensagemParidade(1);
apresentarMensagemParidade(11);
apresentarMensagemParidade(12);
apresentarMensagemParidade(2);
apresentarMensagemParidade(355489);
apresentarMensagemParidade(111111110);

// Atividade 2 em sala

function calcularIMC(peso ,altura){
    let imc = { 
        valor: peso / (altura * altura),
        categoria: ""
    }

    if(imc < 18.5){
        imc.categoria = "baixo peso"
    }else if(imc.valor < 24.9){
        imc.categoria = "peso normal"
    }else if(imc.valor < 29.9){
        imc.categoria = "excesso de peso"
    }else if(imc.valor < 35){
        imc.categoria = "obesidade"
    }else{
        imc.categoria = "obesidade extrema"
    }
    
    console.log(`Peso = ${peso}, Altura = ${altura}, IMC.valor = ${imc.valor}, IMC.categoria = ${imc.categoria}`)

}

calcularIMC(75, 1.80);
