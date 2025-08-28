import leia from "readline-sync";

let numero1, numero2;

console.log("-> Digite dois valores, o primeiro menor do que o segundo <-");
numero1 = leia.questionInt("Digite o primeiro numero: ");
numero2 = leia.questionInt("Digite o segundo numero: ");

if (numero1 < numero2) {
  for (let i = numero1; i <= numero2; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("São múltiplos de 3 e 5 dentro do intervalo: ", i);
    }
  }

} else {
  console.log("Número inválido, siga as instruções!");
}