export const alunos = [
  {
    id: "aluno1",
    nome: "Anthoniely",
    foto: "/anthoniely.jpeg",
    codigos: [
      {
        tipo: "facil",
        titulo: "Funções",
        codigo: `/* Questão 1
Crie uma função chamada "saudacao" que não recebe nenhum argumento e retorna 
a string "Bom dia!". Envie na resposta a função criada, sem executá-la (basta 
enviar o nome da função sem os parênteses)
*/

function saudacao() {
  return "Bom dia!"
}

export const resposta01 = saudacao`,
        comentario: "Essa aqui é o nível 1 de funções. Não tem parâmetro, não tem lógica complexa, é só declarar e retornar um texto fixo. É perfeita para entender a sintaxe básica sem se preocupar com lógica.",
      },
      {
        tipo: "dificil",
        titulo: "Métodos",
        codigo: `/* Questão 8
Seguindo com a lista "animais" criada na questão 7, use os métodos pop e unshift
para fazer com que os animais inicialmente pertencentes a lista "invertebrados"
fiquem na frente.
*/
animais.unshift(animais.pop())
animais.unshift(animais.pop())
animais.unshift(animais.pop())
export const resposta08 = animais;`,
        comentario: "Essa aqui exige que você 'encadeie' o pensamento. Você pega o que o pop() remove e joga direto dentro do unshift(). Fazer isso três vezes seguidas para reordenar a lista requer que você visualize a lista mudando na sua cabeça a cada linha.",
      },
      {
        tipo: "aprendizado",
        titulo: "Listas",
        codigo: `/* Questão 09
Seguindo com a mesma lista de nomes, crie um novo array contendo apenas os nomes
que começam com vogal (considere A, E, I, O, U, inclusive acentuadas se houver).
*/
const vogais = ["A", "E", "I", "O", "U", "Á", "É", "Í", "Ó", "Ú", "Â", "Ê", "Ô", "Ã", "Õ"]
const comVogal = []
let indice09 = 0
while (indice09 < nomes.length) {
  if (vogais.includes(nomes[indice09][0])) {
    comVogal.push(nomes[indice09])
  }
  indice09++
}
export const resposta09 = comVogal`,
        comentario: "Mesma opinião de Bruna, achei muito massa a forma que a questão consegue clarear a mente sobre a estrutura dos dados",
      },
      {
        tipo: "semAprendizado",
        titulo: "índices",
        codigo: `/* Questão 2
Ainda utilizando o array criado na questão 1, armazene na variável "resposta02"
o último item da lista. Use a propriedade "length" para auxiliar.
*/
export const resposta02 = frutas[frutas.length - 1]`,
        comentario: "Embora seja importante, se você já dominou a lógica de acessar índices e entendeu que o length ajuda a achar o final, ela se torna apenas uma repetição de sintaxe que não adiciona um desafio novo após as questões anteriores.",
      },
    ],
  },
  {
    id: "aluno2",
    nome: "Bruna",
    foto: "/bruna.jpeg",
    codigos: [
      {
        tipo: "facil",
        titulo: "Listas",
        codigo: `/* Questão 1 
Crie um array chamado "frutas" com as frutas: "maçã", "banana", "laranja", "uva". 
Acesse o segundo elemento do array e armazene na variável "resposta01". 
*/
const frutas = ["maçã", "banana", "laranja", "uva"];
const resposta01 = frutas[1]`,
        comentario: "O maior aprendizado aqui é fixar que a contagem na programação começa no zero, então o 'segundo' é o índice [1]. Simples e direto.",
      },
      {
        tipo: "dificil",
        titulo: "Funções",
        codigo: `/* Questão 10
Crie uma função chamada "buscarPorNumeroAtomico" que recebe dois 
argumentos: a lista "elementos" e um número atômico. A função deve 
retornar o objeto do elemento que possui aquele número atômico, 
ou null se não encontrar.
*/

function buscarPorNumeroAtomico(lista, numeroAtomico) {
  let indice = 0

  while (indice < lista.length) {
    if (lista[indice].numeroAtomico === numeroAtomico) {
      return lista[indice]
    }
    indice = indice + 1
  }

  return null
}

export const resposta10 = buscarPorNumeroAtomico`,
        comentario: "O grau de dificuldade sobe aqui porque você precisa lidar com objetos dentro de um array, comparar uma propriedade específica (.numeroAtomico) e ainda gerenciar o retorno nulo caso o loop termine sem achar nada. É muita coisa para manter nos trilhos ao mesmo tempo.",
      },
      {
        tipo: "aprendizado",
        titulo: "Laços",
        codigo: `/* Questão 09
Seguindo com a mesma lista de nomes, crie um novo array contendo apenas os nomes
que começam com vogal (considere A, E, I, O, U, inclusive acentuadas se houver).
*/
const vogais = ["A", "E", "I", "O", "U", "Á", "É", "Í", "Ó", "Ú", "Â", "Ê", "Ô", "Ã", "Õ"]
const comVogal = []
let indice09 = 0
while (indice09 < nomes.length) {
  if (vogais.includes(nomes[indice09][0])) {
    comVogal.push(nomes[indice09])
  }
  indice09++
}
export const resposta09 = comVogal`,
        comentario: "Essa foi legal porque te forçou a pensar que uma string também é uma lista. Acessar o [0] da string dentro do índice do array é um truque que clareia muito a mente sobre como os dados se estruturam.",
      },
      {
        tipo: "semAprendizado",
        titulo: "Listas",
        codigo: `/* Questão 7 
Com o array "dias = ["segunda", "terça", "quarta", "quinta", "sexta"]", verifique qual elemento está no índice 2 e armazene em "resposta07". 
*/
const dias = ["segunda", "terça", "quarta", "quinta", "sexta"];
const resposta07 = dias[2]`,
        comentario: "Depois de já ter feito as questões 1, 5 e 6 dessa lista, essa aqui não traz nenhum desafio novo. É apenas repetir o conceito de acessar índice pela quarta vez no mesmo exercício.",
      },
    ],
  },
  {
    id: "aluno3",
    nome: "Laura",
    foto: "/lauraa.jpeg",
    codigos: [
      {
        tipo: "facil",
        titulo: "Índices",
        codigo: `/* Questão 1
Crie uma lista (com const) chamado "frutas" com os itens: "maçã", "banana", "laranja", 
"uva", "pêra", "manga". Armazene na variável "resposta01" o segundo item dessa lista.
*/
const frutas = ["maçã", "banana", "laranja", "uva", "pêra", "manga"];
export const resposta01 = frutas[1]`,
        comentario: "Serve para reforçar que, na programação, o 'segundo' item mora no índice 1. Se você entendeu isso, já passou da primeira barreira da manipulação de listas.",
      },
      {
        tipo: "dificil",
        titulo: "Laços",
        codigo: `/* Questão 05
Dada a lista de nomes acima, utilize um laço de repetição while para criar um
novo array contendo a mesma lista, mas em ordem reversa. Armazene o novo array
na variável resposta05.
*/
const reverso = []
let indice05 = nomes.length - 1
while (indice05 >= 0) {
  reverso.push(nomes[indice05])
  indice05--
}
export const resposta05 = reverso`,
        comentario: "O bglh aqui fica complicado porque a gente é acostumado a contar do 1 para frente, e inverter essa lógica pra contar para trás usando o índice do array dá um nó no cérebro de muita gente no começo.",
      },
      {
        tipo: "aprendizado",
        titulo: "Funções",
        codigo: `/* Questão 7
Crie uma função chamada "contarPalavrasTravaLingua" que recebe um 
número como argumento (representando um índice) e retorna a quantidade 
de palavras do trava-língua naquele índice. Dica: use o método .split(" ")
*/

function contarPalavrasTravaLingua(indice) {
  return travaLinguas[indice].split(" ").length
}

export const resposta07 = contarPalavrasTravaLingua`,
        comentario: "Essa questão ela ensina uns macetes, legais. Ela ensina como encadear métodos: você acessa o índice, quebra a string em uma lista com .split(' ')(aqui era pra ser aspas, mas fica dndo erro, ai coloquei esse apócrifo) e já mede o tamanho dessa nova lista com .length. É uma aula de eficiência em uma linha só.",
      },
      {
        tipo: "semAprendizado",
        titulo: "Laços",
        codigo: `/* Questão 07
Seguindo com a lista de itens domésticos, use um laço de repetição for (com contador)
para criar um novo array contendo os itens com mais de 6 letras.
*/
const maisDe6 = []
for (let i = 0; i < itensDomesticos.length; i++) {
  if (itensDomesticos[i].length > 6) {
    maisDe6.push(itensDomesticos[i])
  }
}
export const resposta07 = maisDe6`,
        comentario: "A gente já tinha feito filtragem por letra inicial (Questão 05) e filtragem por índice (Questão 06). Filtrar por tamanho de string (.length) acaba sendo mais do mesmo, sem apresentar um novo desafio de lógica.",
      },
    ],
  },
  {
    id: "aluno4",
    nome: "Severino",
    foto: "/neto.jpeg",
    codigos: [
      {
        tipo: "facil",
        titulo: "Laços",
        codigo: `/* Questão 01
Crie um laço de repetição while que armazene em uma variável a soma dos números
de 1 a 32. Envie o valor resultante na variável resposta01.
*/
let contador01 = 1
let soma01 = 0
while (contador01 <= 32) {
  soma01 += contador01
  contador01++
}
export const resposta01 = soma01`,
        comentario: "Essa aqui é o o mais básico da programação. É o exemplo clássico de como usar um contador e um acumulador sem nenhuma firula, por isso é a porta de entrada perfeita.",
      },
      {
        tipo: "dificil",
        titulo: "Índices",
        codigo: `/* Questão 7
Seguindo com a lista criada na questão 6, utilizando os índices de cada item,
avance eles em uma posição (e mande o último item para a primeira posição).
*/
let novoNumeros = numeros[numeros.length - 1];
numeros[6] = numeros[5];
numeros[5] = numeros[4];
numeros[4] = numeros[3];
numeros[3] = numeros[2];
numeros[2] = numeros[1];
numeros[1] = numeros[0];
numeros[0] = novoNumeros;
export const resposta07 = numeros`,
        comentario: "Essa é bem trabalhosa! Sem usar loops ou métodos como pop e unshift, você precisa mover peça por peça manualmente. É o tipo de questão que exige muita atenção para não sobrescrever um valor antes de salvá-lo, como você fez corretamente usando a variável novoNumeros.",
      },
      {
        tipo: "aprendizado",
        titulo: "Laços",
        codigo: `/* Questão 12
Encerrando com a lista de pets exóticos, use um laço de repetição for...of para
encontrar o primeiro nome que começa com a letra "s". Se encontrar, armazene este
nome na variável resposta12. Se não encontrar nenhum, armazene a string "não encontrado".
*/
let resultado12 = "não encontrado"
for (let pet of petsExoticos) {
  if (pet[0] === "s" && resultado12 === "não encontrado") {
    resultado12 = pet
  }
}
export const resposta12 = resultado12`,
        comentario: "Essa questão é muito valiosa porque introduz o conceito de busca e valor padrão. Você aprende a preparar uma variável com um estado negativo ('não encontrado') e só mudar se a condição for atingida. É o princípio básico de filtros de busca.",
      },
      {
        tipo: "semAprendizado",
        titulo: "Funções",
        codigo: `/* Questão 9
Crie uma função chamada "contarElementos" que recebe a lista "elementos" 
como argumento e retorna a quantidade total de elementos químicos na 
lista.
*/

function contarElementos(lista) {
  return lista.length
}

export const resposta09 = contarElementos`,
        comentario: "É a mesma coisa que a questão 5 dessa mesma lista, so muda o nome da variável, so precisa repetir o que ja foi feito e fazer algumas alterações",
      },
    ],
  },
  {
    id: "aluno5",
    nome: "Rafael",
    foto: "/rafael.jpeg",
    codigos: [
      {
        tipo: "facil",
        titulo: "Laços",
        codigo: `/* Questão 01
Utilizando um laço de repetição for, calcule a soma de todos os números de 1 a 100
(incluindo 100). Armazene o resultado na variável resposta01.
*/
let soma01 = 0
for (let i = 1; i <= 100; i++) {
  soma01 += i
}
export const resposta01 = soma01`,
        comentario: "Essa é a base do for. Ela serve perfeitamente para você decorar a sintaxe: o início, a condição e o incremento. Como não tem nenhum if lá dentro, é o exercício mais tranquilo para entender o fluxo do loop.",
      },
      {
        tipo: "dificil",
        titulo: "Laços",
        codigo: `/* Questão 04
Utilizando um laço de repetição for, calcule a média aritmética de todos os números
múltiplos de 3 entre 1 e 200 (incluindo os limites).
*/
let soma04 = 0
let quantidade04 = 0
for (let i = 1; i <= 200; i++) {
  if (i % 3 === 0) {
    soma04 += i
    quantidade04++
  }
}
export const resposta04 = soma04 / quantidade04 `,
        comentario: "O nível sobe aqui porque você precisa gerenciar duas variáveis ao mesmo tempo dentro do loop (soma e contagem) e lembrar de realizar uma operação matemática fora do laço para chegar ao resultado final. Exige uma visão mais ampla do problema.",
      },
      {
        tipo: "aprendizado",
        titulo: "Funções",
        codigo: `/* Questão 4
Crie uma função chamada "nomeCompleto" que recebe dois argumentos: 
"primeiroNome" e "sobrenome", e retorna o nome completo separado por 
um espaço.
*/

function nomeCompleto(primeiroNome, sobrenome) {
  return primeiroNome + " " + sobrenome
}

export const resposta04 = nomeCompleto`,
        comentario: "Aprendi umas coisas com essa questão, por tratar de concatenação e muito desse apredizado veio pelo erro bobo que é esquecer de colocar um espaço vazio, e acabar grudando os nomes. É coisa besta, mas muita gente acaba errando nisso.",
      },
      {
        tipo: "semAprendizado",
        titulo: "Laços",
        codigo: `/* Questão 04
Utilizando um laço de repetição while, faça a soma de todos os múltiplos de 7 
entre 1 e 100 (incluindo 100). Armazene o resultado na variável resposta04.
*/
let contador04 = 1
let soma04 = 0
while (contador04 <= 100) {
  if (contador04 % 7 === 0) {
    soma04 += contador04
  }
  contador04++
}
export const resposta04 = soma04`,
        comentario: "Sendo sincero, se você já fez a de números ímpares, essa aqui não te desafia em nada novo. É só trocar um número por outro, acaba sendo um trabalho repetitivo que não agrega conceito novo.",
      },
    ],
  },
];

export const membros = [
  {
    nome: "Anthoniely",
    descricao: "Deu uma ajuda geral, com enfoque no Main e na PaginaPrincipal.",
  },
  {
    nome: "Bruna",
    descricao: "Contribuiu bastante e ajudou em todas as partes, principalmente no 'dados.js .",
  },
  {
    nome: "Laura",
    descricao: "Foi quem deu a ideia de como o app poderia ser e ajudou nos arquivos Botão, Cabecalho e Card",
  },
  {
    nome: "Neto",
    descricao: "Organizou as fotos e, criou e estruturou o código do arquivo 'dados.js' ",
  },
  {
    nome: "Rafael",
    descricao: "Criou e desenvolveu os arquivos da pasta 'pages' e também deu uma auxiliada geral.",
  },
];