function imprimirOlaMundo(){
    console.log("Hello World!");
}

function somar(a, b){
    console.log(`${a} + ${b} = ${a + b}`)
}

somar(1, 2);
imprimirOlaMundo();

let i = 0
for(let i = 0; i<=10; i++){
    console.log(i);
}
console.log(i);

i = 0;
while(i <= 5){
    console.log(i);
    i++;
}

let idade = 18;
if(idade >= 18){
    console.log(`${idade} anos é maior de idade.`)
} else{
    console.log(`${idade} anos não é maior de idade.`)
}