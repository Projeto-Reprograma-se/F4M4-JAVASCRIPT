const prompt = require('prompt-sync')();

var alturas = []
var count = 0;

// Implementar a entrada de dados
for(i = 0;i <= 9;i++){
  a = parseFloat(prompt("Digite a altura: "));
      alturas.push(a);
}
// Implementar o processamento de dados
// Fazer for dentro de for
for(i = 0; i < alturas.length;i ++){
  count = 0;
  for(j = 0;j < alturas.length;j++){
    if(alturas[j] < alturas[i]){
      count++;
  }
// Implementar a saída de dados
  }
console.log("O aluno:", i, "é maior que",count,"alunos.");
}
