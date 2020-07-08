// ===== EXERCÍCIOS ====== \\

// Um mercado tem uma lista de produtos, que eles querem exibir para todo novo cliente que chegar! Como o processo é um pouco trabalhoso e repetitivo eles precisam do seu conhecimento em funções para ajudá-los. Seu trabalho é melhorar esse código, para ficar mais simples utilizá-lo. Precisamos que você transforme o código acima em uma função chamada listarProdutos.

function listarProdutos(){

    var lista = [ 'Leite', 'tomate', 'Biscoito', 'Tapioca']
    
    for(var i = 0; i < lista.length; i++){
        console.log(lista[i])
    }
    
}


// Crie uma função chamada cartaoDeVisitas, ela deverá imprimir o seu nome em conjunto com sobrenome! 

function cartaoDeVisitas(){
    console.log("Gabriela Pires")
}

// Uma professora quer ajudar os alunos a decorarem a tabuada do 7 exibindo o resultado para eles! Crie uma função chamada tabuadaDoSete que imprima a tabuada do sete!

function tabuadaDoSete(){
    for (var i=0; i<=10;i++){
        console.log(7 + " x " + i + " = " + 7*i)
    }  
}

// Escreva uma função chamada menorNumero. Ela deve receber dois números como parâmetro e retornar o menor entre eles. Caso os números sejam iguais, basta que se retorne qualquer um deles.

function menorNumero(numA, numB){
    if (numA<numB){
        return numA
    }
    else if (numA == numB){
        return numA
    }
    else
    return numB
}


// Os engenheiros de uma montadora estão projetando o computador de bordo de um carro. Eles precisam de uma função que possa calcular a autonomia atual do automóvel, em outras palavras, quantos quilômetros ele consegue andar com a quantidade de combustível atual. A autonomia pode ser obtida multiplicando a quantidade de combustível pelo rendimento. Será que você consegue ajudá-los?
//Escreva uma função chamada autonomia. Essa função deve receber dois parâmetros:
// O primeiro, que represente a quantidade de combustível que está no tanque
// O segundo, que represente o rendimento do automóvel
// A função deve retornar a autonomia do automóvel.

function autonomia(quantidadeDeCombustivel, rendimento){
	return quantidadeDeCombustivel * rendimento
}


// A lavanderia DigitalLaundry lava roupa por quilo. Ela cobra dos seus clientes R$ 5,00 por cada quilo de roupa suja. Atualmente, eles usam um caderninho e uma calculadora para descobrir o valor que cada cliente tem a pagar. Precisamos automatizar essa empresa!
// Escreva uma função calculaValorDevido. A função recebe como parâmetro o peso de roupa suja (em quilos) e deve retornar o valor a ser cobrado do cliente.

function calculaValorDevido(pesoDaRoupaSuja) {
	return 5*pesoDaRoupaSuja
}


// Depois de nossa consultoria, a lavanderia DigitalLaundry percebeu que poderia deixar a sua cobrança mais sofisticada e justa. Ela decidiu cobrar R$10,00 fixo, a título de taxa de serviço (independente da quantidade de roupa), mais R$ 3,00 por quilo de roupa suja. Reescreva a função calculaValorDevido. Essa função recebe como único parâmetro a quantidade de roupa suja. Ela deve retornar o valor a ser cobrado do cliente usando a nova política de preços.

function calculaValorDevido(pesoDeRoupaSuja){
	return 10 + (3*pesoDeRoupaSuja)
}

// O código abaixo já tem a função comecaComMaiuscula(palavra) definida. Essa função retorna true caso a palavra passada no parâmetro seja iniciada por uma letra maiúscula e false caso contrário. Use um for para imprimir para cada palavra no array de palavras as seguintes frases: “Começa com maiúscula” caso a palavra comece com maiúscula e “Não começa com maiúscula” caso contrário.

function comecaComMaiuscula(palavra){
    return /^[A-Z]/.test(palavra)
 }
  
 var palavras = ["Amor", "copo", "Bolacha", "biscoito"];
  
for (var i = 0; i < palavras.length; i++){
    if (comecaComMaiuscula(palavras[i])){
        console.log("Começa com maiúscula")
      }
    else{
    console.log("Não começa com maiúscula")
    }
 }

 // Temos no código abaixo uma função que já foi definida. Ela se chama validaCPF. Ela definida para receber um parâmetro que representa um possível CPF. Tudo que ela faz resumi-se em um único objetivo: Retornar true caso o parâmetro seja um CPF válido ou false caso contrário. Eis aqui algo legal sobre funções: tudo que você precisa para utilizá-las é saber o que ela faz. Você não precisa saber o como ela faz. Execute utilize a função validaCPF para imprimir “CPF válido” caso o “576.524.020-85” seja um cpf válido. Caso contrário, imprima “CPF inválido”

 if (validaCPF("576.524.020-85")){
    console.log("CPF válido")
}

else{
    console.log("CPF inválido")
}

// Uma rede de cinemas quer implementar um sistema para controlar a entrada nas suas salas. Os clientes, antes de entrar na sala, devem apresentar o RG em uma câmera. A câmera seria capaz de ler a data de nascimento do cliente e, caso ele não tenha idade suficiente para assistir a sessão, o acesso dele não seria autorizado. Um dos programadores já fez uma função que calcula a idade com base na data de nascimento. Ela recebe como parâmetro uma data de nascimento no formato dd/mm/aaaa (dia com dois dígitos, mês com dois dígitos e ano com quatro dígitos) e retorna idade da pessoa hoje.
// Precisamos agora que você escreva a função deixaEntrar(dataDeNascimento, censura). A função deve receber dois parâmetros: O primeiro deve representar a data de nascimento do cliente no formato dd/mm/aaaa. O segundo deve representar a censura da sessão, ou seja, a idade mínima do cliente para que ele possa acessar a sala.
// A função deve retornar true caso o cliente tenha idade maior ou igual a censura e false caso contrário.

function calcularIdade(dataDeNascimento) {
    var [dia, mes, ano] = dataDeNascimento.split('/');
    var d = new Date();
    var anoAtual = d.getFullYear();
    var mesAtual = d.getMonth() + 1;
    var diaAtual = d.getDate();
    ano = +ano; mes = +mes; dia = +dia;
    var quantosAnos = anoAtual - ano;
    if (mesAtual < mes || mesAtual == mes && diaAtual < dia) {
        quantosAnos--;
    }
    return quantosAnos < 0 ? 0 : quantosAnos;
 }
  
 
function deixaEntrar(dataDeNascimento, censura){
    calcularIdade(dataDeNascimento)>=censura
        return true
}


// Uma loja virtual permite a seus visitantes filtrar produtos pelo preço. Existe um array com os preços dos produtos. Um programador já criou uma função maisBaratosQue(valor, precos) que retorna um array com os preços dos produtos mais baratos que o valor passado como parâmetro. Outro programador já criou uma função maisCarosQue(valor, precos) que retorna um array com os preços mais caros que o valor passado como parâmetro. Chegou sua vez!
// Crie uma função precosEntre(valorMenor, valorMaior, precos) que deve utilizar as funções maisBaratosQue e maisCarosQue para retornar os preços que estão entre o valorMenor e o valorMaior. Sua função deve receber então dois parâmetros: valorMenor para representar o valor mínimo dos preços a serem listados e valorMaior para representar o valor máximo dos preços a serem listados precos para representar um array com os preços dos produtos. Ela deve retornar um array com todos os preços entre valorMenor e valorMaior.

function maisBaratosQue(valor, precos) {
    return precos.filter(p => p <= valor);
 }
  
 function maisCarosQue(valor, precos){
    return precos.filter(p => p >= valor);
 }
 
   function precosEntre(valorMenor, valorMaior, precos){
     return maisCarosQue(valorMenor, maisBaratosQue(valorMaior, precos));
 }

 // Nas escolas do futuro não haverá necessidade de chamadas. Ao entrar em sala, uma câmera fará o reconhecimento facial do aluno e registrará sua presença! Imagine que, a cada aula, um array guardasse o nome de todos os alunos que estiveram presentes na aula.
// Escreva uma função estavaPresenteNaAula(nomeDoAluno, nomesDosPresentes). Essa função deve receber dois parâmetros:O primeiro deve representar o nome de um aluno e o segundo deve representar um array com o os nomes dos alunos presentes. A sua função deve retornar true caso o nome do aluno passado como parâmetro estiver entre os presentes. false caso contrário.

function estavaPresenteNaAula(nomeDoAluno, nomesDosPresentes){
    if (nomesDosPresentes.indexOf(nomeDoAluno) == -1){
        return false
    }
    else{
        return true
    }

}

// Algumas vezes precisamos padronizar as informações antes de guardá-las no nosso sistema. Escreva uma função transformaParaMaiusculo(palavras). Essa função recebe como parâmetro um array de palavras. Ela deve retornar um array com a versão MAIÚSCULA de todas as palavras contidas no array passado como parâmetro.

function transformaParaMaiusculo(palavras){
    var novaLista=[]
    for(var i=0;i<palavras.length;i++){
        novaLista.push(palavras[i].toUpperCase())
    }    
    return novaLista    
}


// Uma fábrica de biscoitos da sorte precisa de um sistema. O sistema deve gerar seis dezenas aleatórias para serem impressas. Sabe como é: Palpites para seus clientes jogarem na mega sena! O seu trabalho é escrever uma função gerarDezenas(). Essa função não recebe nenhum parâmetro. Tudo que ela deve fazer é gerar e retornar um array contendo seis números aleatórios entre 1 e 60.

function gerarDezenas(){
    lista=[]
    for (i=0; i<6; i++){
        lista.push(Math.round(Math.random() * 60)) 
    }
    return lista
}

// Escreva uma função maxmin(a, b, c, d, e) que receba cinco números como parâmetros. Sua função deve retornar um array onde o primeiro elemento é o menor dos parâmetros e o segundo elemento é o maior dos parâmetros.

function maxmin(a,b,c,d,e){
    var lista = []
    lista.push(Math.min(a,b,c,d,e))
    lista.push(Math.max(a,b,c,d,e))
    return lista
}

console.log(maxmin(2,3,4,5,6))
