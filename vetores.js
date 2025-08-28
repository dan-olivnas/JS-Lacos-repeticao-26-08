import leia from "readline-sync";

const vetor = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6];
let numeroEncontrar, posicao;

numeroEncontrar = leia.questionInt("Digite o numero que deseja encontrar: ");

posicao = vetor.indexOf(numeroEncontrar);

if (posicao == -1){
  console.log("O numero ", numeroEncontrar, "nao foi encontrado!");
} else {
  console.log("O numero ", numeroEncontrar, "esta localizado na posicao ", posicao);
}