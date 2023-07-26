/**
 * Esta função recebe dois números como argumentos e retorna a multiplicação deles.
 *
 * @param n1 - O primeiro número a ser multiplicado.
 * @param n2 - O segundo número a ser multiplicado.
 * @returns A multiplicação de n1 e n2.
 */
function multiplicar(n1: number, n2: number): number {
  return n1 * n2;
}

/**
 * Esta função recebe um nome como argumento e retorna uma saudação personalizada para esse nome.
 *
 * @param nome - O nome da pessoa a ser saudada.
 * @returns Uma string contendo uma saudação para o nome fornecido.
 */
function saudacao(nome: string): string {
  return `Olá ${nome}`;
}

// Chamada para as funções
console.log(multiplicar(2, 3));  // Imprimi 6 no console
console.log(saudacao("Glaucco"));  // Imprimi "Olá Glaucco" no console
