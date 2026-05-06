# Atividade de projeto

Sigam as instruções abaixo para a realização das atividades:

- [Arquivos para consulta](#arquivos-para-consulta)
- [Formato da atividade](#formato-da-atividade)
- [Para responder as atividades](#para-responder-as-atividades)
- [Instruções da atividade](#instruções-da-atividade)
- [Dicas](#dicas)

## Arquivos para consulta

A pasta `docs` contém arquivos no formato markdown (igual a este) para consulta, e eles estão divididos em tópicos:

- `tags`: Referência das várias tags html básicas, falando sobre suas funções e quais atributos principais de cada uma.
- `componentes`: Referência dos componentes já disponibilizados pelo React Native. Fala sobre as funções de cada um e atributos principais. Se houver um componente que faça o mesmo que uma tag em particular, dê preferência a usar o componente.
- `react`: Referência para como funciona o React e o React Native, explicando a lógica, sintaxe e funcionalidades principais.

## Formato da atividade

A atividade consiste na elaboração de um aplicativo que serve como "vitrine" para códigos que os integrantes do grupo produziram ao longo do trimestre. Para isso, cada integrande do grupo deve escolher dentre as lições feitas por si mesmo códigos de questões que representam melhor:

1. Uma questão que achou **muito fácil**
2. Uma questão que achou **muito difícil**
3. Uma questão que o ajudou a **entender muita coisa**
4. Uma questão que **não ajudou a entender nada**

As questões devem fazer parte de dos exercícios a seguir:

1. Revisão geral (variáveis e operadores)
2. Listas
3. Laços de repetição
4. Funções

A estrutura da aplicação deve seguir as regras abaixo:

1. Deve conter duas páginas:
    - Página principal: Possui um menu com botões representando os integrantes do time. Ao clicar em um dos botões deve exibir os códigos eleitos por este aluno. Ao clicar em outro aluno, a página deixa de exibir os códigos do aluno anterior e passa a exibir os do novo aluno.
    - Sobre a equipe: Deve ser uma página simples contendo uma lista dos alunos que integram o time (apenas as pessoas de programação) e uma descrição do que cada um fez no projeto (apoio moral não conta). Exemplo:
        - Victor: Programou o funcionamento do componente "Botao"
        - Matheus: Criou e programou o componente "Cabecalho"
2. Deve conter os seguintes componentes, com **nome escrito de forma idêntica** seguindo a descrição a seguir:
    - `Cabecalho`: Contém botões (que funcionam como links) pra alternar entre as páginas principal e "sobre a equipe". Ao clicar em um destes botões, o aplicativo muda para a página clicada. O cabeçalho deve ser exibido em ambas as páginas, sempre no topo.
    - `Rodape`: Contém link para o repositório do GitHub desta atividade, e um texto abaixo do link escrito: "Criado por: [nomes dos alunos no lugar deste texto dentro dos colchetes, e sem os colchetes]". Deve ser exibido em ambas as páginas, sempre no final.
    - `Menu`: Apenas um elemento para organizar os botões na mesma sessão. Pode ser horizontal ou vertical, fica a critério da equipe. Deve existir apenas na página principal.
    - `Botao`: Botão que possui uma foto do aluno e o nome deste aluno. Usado para exibir os códigos escolhidos por ele. Deve existir dentro do componente `Menu` na página principal.
    - `Card`: Componente onde os códigos de cada aluno serão exibidos. O design fica por conta da equipe. Deve existir apenas na página principal.
    - `Conteudo`: Componente onde a lista de alunos com a descrição do que fizeram é exibida. Deve existir apenas na página de "Sobre a equipe".
3. Os nomes dos arquivos dos componentes devem ser iguais aos nomes dos componentes, exemplo:
    - `export default function Card({conteudo}) { }` dentro do arquivo `Card.jsx`
4. Cada componente deve ser seu próprio arquivo, isolado. Não devem ser criados múltiplos componentes no mesmo arquivo. O componente deve ser exportado com a sintaxe `export default function MeuComponente() { }`
5. Os componentes **DEVEM** ser criados na pasta `src/components/`
6. Os estilos dos componentes preferencialmente devem ser registrados dentro do objeto `styles` no arquivo `main.js` dentro da pasta `src/styles/`
7. Dentro da pasta `src/components/` vocês encontrarão um componente de exemplo. Após terminarem de criar a aplicação, podem apagar ele caso queiram.

## Para responder as atividades

1. Cada grupo de Projeto Integrado possui uma "branch" cujo nome corresponde ao nome de cada integrande do grupo. Ao clicar no botão com o texto "master" acima da lista de arquivos deste projeto, aparece um menu onde você deve escolher a "branch" cujo nome é o mesmo que o nome de seu usuário no GitHub.  
![Botão para selecionar branches](./assets/readme/branch-01.png)  
![Menu para selecionar branches](./assets/readme/branch-02.png)  

2. Após selecionar sua branch, faça um dos dois passos abaixo (o resultado é o mesmo):
    - Aperte a tecla de ponto final no teclado, uma única vez
    ou
    - Se a opção acima não funcionar, no endereço da página onde tem "github.com" mude o ".com" para ".dev", e mantenha o restante do endereço da mesma forma.
    Ex: "github.com/viccalq/3c-01-variaveis" -> "github.dev/viccalq/3c-01-variaveis"

3. Espere o VSCode online carregar por completo antes de mexer no projeto. Demora um pouco.

4. Confirme se na parte de baixo a esquerda no VSCode online o nome da branch é o mesmo que o nome de seu usuário. Se não for, clique no nome que aparece na branch, e no menu que aparecer selecione a sua branch.  
![Botão para selecionar branches](./assets/readme/branch-03.png)  

5. As instruções para as atividades se encontram na próxima sessão (Formato dos exercícios). Quando terminar, volte para o passo 6 desta sessão.

6. Para salvar as modificações e enviar a atividade, clique no terceiro botão dos ícones na borda esquerda do VSCode para abrir um outro menu.  
![Menu de versionamento de código](./assets/readme/commit-01.png)  

7. Feche a mensagem que aparece sobre o commit.  
![Aviso chato](./assets/readme/commit-02.png)  

8. Escreva uma mensagem informando quais exercícios você respondeu da lista. Exemplo: "Respondidos os exercícios 1, 4, 5 e 7".  
![Mensagem de commit](./assets/readme/commit-03.png)  

9. Clique no botão "Commit & push" e espere um pouco. Após o botão ficar desabilitado, a atividade foi enviada.  
![Botão de commit](./assets/readme/commit-04.png)  