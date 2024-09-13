"Elabore um pseudocódigo que receba a distância percorrida (km) e a quantidade de combustível utilizada (litros) para exibir o consumo médio do carro."

function calcularConsumoMedio(distancia, combustivel) {
    // Verifica se a distância e o consumo são válidos (maiores que zero)
    if (distancia <= 0 || combustivel <= 0) {
      console.log("Distância e consumo devem ser valores positivos.");
      return;
    }
  
    // Calcula o consumo médio
    const consumoMedio = distancia / combustivel;
  
    console.log(`O consumo médio do carro foi de ${consumoMedio.toFixed(2)} km/l.`);
  }
  
  // Exemplo de uso:
  const distanciaPercorrida = 200; // em km
  const combustivelUtilizado = 15; // em litros
  
  calcularConsumoMedio(distanciaPercorrida, combustivelUtilizado);