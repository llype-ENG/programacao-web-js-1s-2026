let nome = 'Romario';
const sobrenome = 'Juju';

nome = 'João';

let templateString = `O meu nome é ${nome} ${sobrenome}`

console.log(templateString);

let a = 2;
let b = 5.56;
let c = -3.14;
const pi = 3.14;

let potencia = a ** c;

console.log(typeof a);
console.log(typeof c);
console.log(`${a} ^ ${c} é igual a = ${potencia}`); 

let verdadeiro = true;
let falso = false;
console.log(typeof verdadeiro);

let e = verdadeiro && falso;
let ou = verdadeiro || falso;
console.log(e);
console.log(ou);

let maiorQue = b > a;
console.log(`${b} > ${a} = ${maiorQue}`);

let numeros = [1 , 3.14 , -7, 99, 505.67];
console.log(`numeros[0] = ${numeros[0]}`);
console.log(`numeros[3] = ${numeros[3]}`);
console.log(typeof numeros);


let pessoa = {
    nome1: "João",
    cpf: 123,
    telefone: 61991498484
}

console.log(pessoa);
console.log(`pessoa nome = ${pessoa.nome}`);