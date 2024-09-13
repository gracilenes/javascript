/*Construa um pseudocódigo que informe se o aluno foi aprovado, reprovado ou fará uma nova avaliação (recuperação) em uma determinada disciplina, sabendo que:
A média é calculada com a leitura de 3 notas
O aluno será reprovado se a média for menor que 50
O aluno será aprovado se a média for maior ou igual a 70
O aluno fará uma nova avaliação (recuperação) caso sua média seja 50 (inclusive) ou menor que 70.

Construa um pseudocódigo que informe se o aluno foi aprovado, reprovado ou fará uma nova avaliação (recuperação) em uma determinada disciplina, sabendo que:
A média é calculada com a leitura de 3 notas
O aluno será reprovado se a média for menor que 50
O aluno será aprovado se a média for maior ou igual a 70
O aluno fará uma nova avaliação (recuperação) caso sua média seja 50 (inclusive) ou menor que 70.

function calcularSituacaoAluno(nota1, nota2, nota3) {
  // Calculando a média
  const media = (nota1 + nota2 + nota3) / 3;

  // Verificando a situação do aluno
  if (media < 50) {
    console.log("Reprovado");
  } else if (media >= 70) {
    console.log("Aprovado");
  } else {
    console.log("Recuperação");
  }
}

// Exemplo de uso:
const nota1 = 60;
const nota2 = 45;
const nota3 = 55;

calcularSituacaoAluno(nota1, nota2, nota3);