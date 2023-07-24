// Classe abstrata Animal
// A classe abstrata Animal que servirá como uma base para outras classes
// Ela possui um construtor que recebe os parâmetros nome e idade, e atribui esses valores às propriedades nome e idade do objeto
// Além disso, possui um método emitirSom(), que será implementado pelas classes filhas
class Animal {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  emitirSom() {
    // Como essa é uma classe abstrata, o método emitirSom() não possui uma implementação específica
    // Ao ser chamado, ele lança um erro indicando que deve ser implementado nas classes filhas
    throw new Error("O método 'emitirSom()' deve ser implementado nas classes filhas.");
  }
}

// Classe Cachorro, herdeira de Animal
// A classe Cachorro que herda da classe Animal usando 'extends Animal'
// Ela possui um construtor que recebe os parâmetros nome, idade e raça, e chama o construtor da classe pai usando 'super()'
// Além das propriedades herdadas (nome e idade), ela possui a propriedade raca que é específica para a classe Cachorro
// Também implementa o método emitirSom(), que retorna a string "Au au!" indicando o som do cachorro
class Cachorro extends Animal {
  constructor(nome, idade, raca) {
    super(nome, idade);
    this.raca = raca;
  }

  emitirSom() {
    return "Au au!";
  }
}

// Classe Gato, herdeira de Animal
// A classe Gato que herda da classe Animal usando 'extends Animal'
// Ela possui um construtor que recebe os parâmetros nome, idade e pelagem, e chama o construtor da classe pai usando 'super()'
// Além das propriedades herdadas (nome e idade), ela possui a propriedade pelagem que é específica para a classe Gato
// Também implementa o método emitirSom(), que retorna a string "Miau!" indicando o som do gato
class Gato extends Animal {
  constructor(nome, idade, pelagem) {
    super(nome, idade);
    this.pelagem = pelagem;
  }

  emitirSom() {
    return "Miau!";
  }
}

// Criando instâncias de objetos
// Criamos três instâncias de objetos, cada uma usando as classes Cachorro e Gato que foram definidas anteriormente
// Cada instância é criada com valores diferentes para os parâmetros do construtor (nome, idade e atributos específicos da classe)
const cachorro1 = new Cachorro("Rex", 5, "Labrador");
const gato1 = new Gato("Bolinha", 3, "Branca e preta");
const cachorro2 = new Cachorro("Luna", 2, "Golden Retriever");

// Testando as instâncias
// Exibimos o nome de cada instância seguido do som emitido pelo animal usando o método emitirSom()
console.log(cachorro1.nome + " diz: " + cachorro1.emitirSom()); // Rex diz: Au au!
console.log(gato1.nome + " diz: " + gato1.emitirSom()); // Bolinha diz: Miau!
console.log(cachorro2.nome + " diz: " + cachorro2.emitirSom()); // Luna diz: Au au!
