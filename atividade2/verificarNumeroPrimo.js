function verificarNumeroPrimo(n){
     if (n < 2) return false;
    
    for (let i = 2; i < n; i++) {
        if (n % i === 0) return false;
    }
    
    return true;
}


function apresentarMensagem(numero){
    if (verificarNumeroPrimo(numero)) {
        console.log(`${numero} é um número primo!`);
    } else {
        console.log(`${numero} não é primo.`);
    }
}

apresentarMensagem(0);
apresentarMensagem(1);
apresentarMensagem(2);
apresentarMensagem(3);
apresentarMensagem(83);
apresentarMensagem(100);
apresentarMensagem(991);
apresentarMensagem(104729);
apresentarMensagem(14348907);


