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