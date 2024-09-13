"Construir um algoritmo que receba um valor inteiro qualquer e mostre o resto da divisão desse valor por 3. Use o operador %."

function calcularRestoDivisaoPorTres(numero) {
    // Calcula o resto da divisão por 3
    const resto = numero % 3;
  
    // Exibe o resultado
    console.log(`O resto da divisão de ${numero} por 3 é ${resto}.`);
  }
  
  // Exemplo de uso:
  const numero = 10;
  calcularRestoDivisaoPorTres(numero);