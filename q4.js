/*Construir um algoritmo para calcular as raízes de uma equação do 2 grau, sendo que os valores a,b e c são fornecidos pelo usuário. Entrada: obter os valores de a,b e c do usuário. Consideremos somente a obtenção de raízes reais.**

function calcularRaizesEquacaoSegundoGrau(a, b, c) {
    // Calculando o discriminante
    const delta = b*b - 4*a*c;
  
    // Verificando as condições e calculando as raízes
    if (delta < 0) {
      console.log("Não existem raízes reais.");
    } else if (delta === 0) {
      const x = -b / (2*a);
      console.log("A equação possui uma raiz real e dupla: x =", x);
    } else {
      const x1 = (-b + Math.sqrt(delta)) / (2*a);
      const x2 = (-b - Math.sqrt(delta)) / (2*a);
      console.log("As raízes da equação são:", x1, "e", x2);
    }
  }
  
  // Obtendo os valores de a, b e c do usuário (pode ser substituído por uma função de entrada)
  const a = parseFloat(prompt("Digite o valor de a:"));
  const b = parseFloat(prompt("Digite o valor de b:"));
  const c = parseFloat(prompt("Digite o valor   
   de c:"));
  
  // Chamando a função para calcular as raízes
  calcularRaizesEquacaoSegundoGrau(a, b, c.
  