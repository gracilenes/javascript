"Faça um pseudocódigo para um programa que recebe um número e mostre seu sucessor e o seu antecessor."

// Função para encontrar antecessor e sucessor
function encontrarAntecessorESucessor(numero) {
    const antecessor = numero - 1;
    const sucessor = numero + 1;
  
    console.log(`O antecessor de ${numero} é ${antecessor}.`);
    console.log(`O sucessor de ${numero} é ${sucessor}.`);
  }
  
  // Exemplo de uso:
  const numero = 10;
  encontrarAntecessorESucessor(numero);