import leia from "readline-sync";

let idade, jovens = 0, velhos = 0;

idade = 0;

while (true) {
  idade = leia.questionInt("Digite a idade: ");
  //if para validar se o número digitado é uma idade factível
  if (idade < 125 && idade >= 0) {
    console.log("Idade válida!");
  }    else if (idade > 0){
    console.log("Idade inválida, tente novamente!");
    continue;
  }  if (idade < 0){
    const final = leia.keyInYN("Deseja inserir mais idades? ");
    if (!final) {
      break;
    }
  } if (idade < 21 && idade >= 0) {
    jovens++;
  }   if (idade > 50) {
    velhos++;
  }
}   console.log("Total de pessoas menores de 21 anos: ", jovens);
console.log("Total de pessoas maiores de 50 anos: ", velhos);

