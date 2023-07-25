// Criação do array de objetos com nome e nota dos alunos
const alunos = [
  { nome: "João", nota: 8 },
  { nome: "Maria", nota: 6 },
  { nome: "Pedro", nota: 7 },
  { nome: "Ana", nota: 5 },
  { nome: "Lucas", nota: 9 },
];

// Função que retorna apenas os alunos com nota maior ou igual a 6
// Recebe como parâmetro o array de alunos (arrayAlunos)
function alunosAprovados(arrayAlunos) {
  // Utiliza o método filter() para filtrar os alunos com nota maior ou igual a 6
  // O método filter() retorna um novo array contendo os elementos que atendem ao critério de filtragem
  const alunosAprovados = arrayAlunos.filter((aluno) => aluno.nota >= 6);

  // Retorna o novo array com os alunos aprovados
  return alunosAprovados;
}

// Chamando a função e exibindo o resultado
// Chama a função alunosAprovados() passando o array de alunos como argumento
const alunosAprovadosArray = alunosAprovados(alunos);

// Mostra o resultado no console
console.log("Alunos aprovados:", alunosAprovadosArray);
