const matriz = [
  [1, 2],
  [3, 4],
  [5, 6],
];

function transporMatriz(matrizOriginal) {
  const linhas = matrizOriginal.length;       
  const colunas = matrizOriginal[0].length;    
  const novaMatriz = [];

  for (let j = 0; j < colunas; j++) {
    novaMatriz[j] = [];
    for (let i = 0; i < linhas; i++) {
      novaMatriz[j][i] = matrizOriginal[i][j];
    }
  }

  return novaMatriz;
}

const resultado = transporMatriz(matriz);
console.log(resultado); 