// ===== EXERCÍCIOS ====== \\

// Declare duas variáveis chamadas  idade  e  peso,  e atribua um valor numérico a ambas.

var idade = 28;
var peso = 60;

console.log(idade);
console.log(peso);

// Declare 4 variáveis: nome, sobrenome, numeroDaSorte, idade e atribua seus respectivos valores nas variáveis.

var nome ="Gabriela";
var sobrenome="Pires";
var numeroDaSorte=17;
var idade=28;

//Escreva as variáveis expostas abaixo substituindo os tipos de dados por valores: var idade = Number | var sobrenome = String | var salarioMinimo = Float

var idade=28;
var sobrenome="Pires";
var salarioMinimo=980.65;

// Declare cinco variáveis com os seguintes dados: seu nome, idade, altura, solteiro e suas séries favoritas utilizando os tipos de dados adequados para cada uma das variáveis.

var nome="Gabriela";
var idade=28;
var altura=1.65;
var solteiro=false;
var seriesFavoritas=["Dark", "Mr Robot"];

// Precisamos criar um código que gera cartão de visita com nome, sobrenome e profissão. Crie uma variável para guardar cada informação, depois faça a concatenação das informações numa variável chamada cartaoDeVisita.

var nome="Gabriela";
var sobrenome="Pires";
var profissao="Programadora";
var cartaoDeVisita= nome + " " + sobrenome + " - " + profissao;

console.log(cartaoDeVisita)

// Declare e atribua duas variáveis: numeroA e numeroB, em que ambas precisam conter um valor numérico. Em seguida, faça as variáveis de soma, subtração, multiplicação e divisão utilizando essas duas variáveis.

var numeroA = 10;
var numeroB = 2;

var soma=numeroA+numeroB;
var subtracao=numeroA-numeroB;
var multiplicacao=numeroA*numeroB;
var divisao=numeroA/numeroB;

console.log(soma);
console.log(subtracao);
console.log(multiplicacao);
console.log(divisao);

// Uma empresa separou os seus ganhos dos meses nas seguintes variáveis: 
// var janeiro =  100
// var fevereiro = 300
//var março = 90
// Ela precisa da sua ajuda para saber o total do lucro adquirido. Sua missão é usar os operadores junto com as variáveis para fazer esse cálculo e use o console.log para imprimir o resultado!

var janeiro =  100
var fevereiro = 300
var marco = 90

var valorTotal = janeiro+fevereiro+marco

console.log(valorTotal);

// Em uma escola, um professor quer calcular a média de notas dos seus alunos. Ele tem separado em variáveis cada nota dos trabalhos realizados por cada aluno. O professor já sabe que a média é calculada com a soma de todas as notas e dividindo pelo total. Mas ele se perdeu um pouco no código, e precisa da sua ajuda para terminar essa tarefa! Sua missão é ajudar o professor com o seu conhecimento dos operadores aritméticos para calcular a média dos alunos. Atribua na variável media o cálculo matemático para chegar no valor requisitado.

var trabalhoDeHistoria = 8.0
var trabalhoDeMatematica = 7.0
var trabalhoDeCiencia = 10
var trabalhoDeGeografia = 9.5
var totalDeTrabalhos = 4


var media=(trabalhoDeHistoria+trabalhoDeMatematica+trabalhoDeCiencia+trabalhoDeGeografia)/totalDeTrabalhos

console.log(media);