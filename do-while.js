import leia from "readline-sync";

let num, somaPositivos = 0;

do {
  num = leia.questionInt("Digite um numero: ");
  if (num > 0) {
    somaPositivos += num;
  }
} while (num != 0);

console.log("Soma dos numeros positivos: " + somaPositivos);