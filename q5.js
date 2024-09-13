/*(Suponha que um caixa eletrônico disponha apenas de notas de 1, 10 e 50 reais. Considerando que o cliente está querendo fazer um saque de um valor qualquer (considere esse valor inteiro). Faça um algoritmo que mostre o número mínimo de notas que o caixa deve fornecer para o cliente. Mostre também, o valor do saque, e a quantidade de cada nota a ser entregue. Obs: O caixa não trabalha com moedas)!** */

function calcularSaque(valorSaque) {
    const notas50 = Math.floor(valorSaque / 50);
    valorSaque %= 50;
  
    const notas10 = Math.floor(valorSaque / 10);
    valorSaque %= 10;
  
    const notas1 = valorSaque;
  
    const totalNotas = notas50 + notas10 + notas1;
  
    console.log("Valor do saque:", valorSaque + notas50 * 50 + notas10 * 10);
    console.log("Notas de 50:", notas50);
    console.log("Notas de 10:", notas10);
    console.log("Notas de 1:", notas1);
    console.log("Total de notas:", totalNotas);
  }
  
  // Exemplo de uso:
  const valorASacar = 123;
  calcularSaque(valorASacar);