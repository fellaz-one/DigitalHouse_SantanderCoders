// ===== EXERCÍCIOS ====== \\


// Precisamos de um código que verifique a idade do usuário para ver se já tem idade mínima para adquirir carta de habilitação. Para isso, teremos uma variável nome que guarda um valor do tipo string, e uma variável idade que guarda um valor do tipo numérico. O sistema deve cumprimentar o usuário independente da idade, o resultado seria assim:

// Caso o usuário tenha idade mínima para dirigir imprima: “Olá, NOME_DO_USUARIO_AQUI” ”Você passou no nosso teste e já pode dirigir!”.

// Caso o usuário não tenha a idade mínima para dirigir imprima somente o cumprimento: “Olá, NOME_DO_USUARIO_AQUI”

var nome = "João"
var idade = 18

console.log("Olá, " + nome);
if (idade>=18){
     console.log("Você passou no nosso teste e já pode dirigir!")};



// Queremos um código que oriente o usuário de acordo com o saldo da conta bancária. Para isso precisamos de uma variável saldo que guarda um número decimal(float), e imprime uma mensagem de acordo com a situação financeira. Se o saldo for maior que 0 (zero) imprima “Seu saldo está positivo! Gostaria de fazer um investimento?”, agora, se o saldo for menor que zero(0) imprima “Seu saldo está negativo! Gostaria de fazer um empréstimo?” 

var saldo=100.00;

if (saldo>0){
    console.log("Seu saldo está positivo! Gostaria de fazer um investimento?")};

if (saldo<0){  
    console.log("Seu saldo está negativo! Gostaria de fazer um empréstimo?")};



// No sistema político atual, temos algumas regras para participar das eleições. A principal delas, é que o voto é obrigatório a partir dos 18 anos, e opcional a partir dos 16! Diante desse cenário, escreva um código que de acordo com a variável idade informe ao usuário usando console.log(), “Você é obrigado a votar” caso ele cumpra o requisito ou “Seu voto é opcional”.

var idade = 17

if (idade>=18){
    console.log("Você é obrigado a votar")};

if (idade>=16){
    console.log("Seu voto é opcional")};

// Vamos otimizar nosso sistema de autoescola! Caso o usuário tenha 18 anos ou mais, ele pode dirigir, se a afirmação for negativa precisamos imprimir a mensagem “Ops, você ainda não tem a idade mínima para dirigir!”.

var idade = 15

if (idade >= 18) {
    console.log("Você já pode dirigir!")
}
else{
    console.log("Ops, você ainda não tem a idade mínima para dirigir!")
}


//Utilize a condicional if/else para verificar a variável estrangeiro que guarda um valor booleano. Caso o valor seja verdadeiro solicite o Registro Nacional de Estrangeiros(RNE). Se o valor for falso solicite o Cadastro de Pessoa Física (CPF).
// Mensagem para estrangeiro: “Você poderia apresentar seu RNE, por favor?”
// Mensagem para brasileiro: “Você poderia apresentar seu CPF, por favor?”

var estrangeiro = true

if (estrangeiro) {
  console.log("Você poderia apresentar seu RNE, por favor?");
}
else{
  console.log("Você poderia apresentar seu CPF, por favor?");
}

// Precisamos verificar se uma pessoa pode se aposentar com base na idade. Utilize a condicional if else para verificar se a variável idade é maior que 65 e imprima uma mensagem para cada caso:
// Condição verdadeira : “Você já pode se aposentar”
// Condição falsa: “Você ainda não pode se aposentar”

var idade = 40;

 if (idade>65){
     console.log("Você já pode se aposentar")
 }  else {
     console.log("Você ainda não pode se aposentar");
 }

 // Dentro do código estará criada uma variável numeroDaSorte  contendo um número. Sua missão é verificar se o valor da variável é par ou ímpar. Imprima “Par” ou “Ímpar” de acordo com o resultado.

 var numeroDaSorte = 18

 if (numeroDaSorte%2 == 0){
     console.log("Par")
 }  else {
     console.log("Ímpar");
 }

 // Precisamos criar um código que ajude um petshop a dizer se o pet está com o peso ideal. E para isso eles deixaram para você as informações que ele usam para fazer essa classificação: Abaixo de 4kg = Abaixo do Peso; Maior que 10kg = Acima do Peso; Se tiver entre esses dois valores =  Peso normal. Utilizando o ELSE IF e crie o código para suprir essa necessidade e imprimindo as mensagens de acordo com a lista acima!

 var petPeso = 7

if (petPeso <4){
    console.log("Abaixo do Peso")
}
else if(petPeso > 10){
    console.log("Acima do Peso")
}
else{
    console.log("Peso normal")
}

// Precisamos de ajuda para escrever um código que de acordo com a quantidade de lados iguais de um triângulo, exiba com console.log se ele é Equilátero, Isósceles ou Escaleno, sem a necessidade de repetir no código a palavra “triângulo”. 
// Triângulo Equilátero: possui os 3 lados iguais.	
// Triângulo Isósceles: possui 2 lados iguais.	
// Triângulo Escaleno: possui 3 lados diferentes

var ladosIguais = 0

if (ladosIguais==3){
    console.log("Equilátero")
}
else if (ladosIguais==2){
    console.log("Isósceles")
}
else{
    console.log("Escaleno")
}

// Queremos criar um código que ajude o usuário a saber se ele pode comprar um produto ou não. Para acontecer a venda, a quantidade do produto no estoque tem que ser maior que zero e o produto está ativo. Faça uma condição que supra a necessidade acima, se o usuário puder comprar o produto exiba a seguinte mensagem “Você pode finalizar essa compra”. Caso contrário exiba “Produto não está disponível para compra”

var produtoQtd = 3
var produtoAtivo = true

if(produtoQtd>0 && produtoAtivo){
    console.log("Você pode finalizar essa compra")
}
else{
    console.log("Produto não está disponível para compra")
}

// Precisamos criar um código que ajude os usuários a saber se pode ir ao banco. Sabemos que o banco está aberto em todos os os dias da semana, exceto em  finais de semana. Caso o usuário possa ir ao banco você deve exibir com console.log a seguinte mensagem: “Você pode ir ao banco”, caso contrário, ‘O banco está fechado, tente outro dia’
// Para esse exercício leve em consideração as seguintes informações:
// Dias da semana pro sistema: segunda, terca, quarta, quinta, sexta, sabado e domingo.
// Você terá a seguinte variável no código: diaSemana
// Para esse exercício você deve usar na condição do if o operador && para juntar as condições lógicas junto ao operador diferente de(!=)

var diaSemana = 'sabado'

if (diaSemana == 'sabado' && diaSemana == 'domingo'){
    console.log('O banco está fechado, tente outro dia')
} 
else{
    console.log('Você pode ir ao banco')
}
