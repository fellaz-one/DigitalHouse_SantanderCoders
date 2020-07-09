// ===== EXERCÍCIOS ====== \\

// No fim de semana o elevador do nosso prédio quebrou, restringindo muito o fluxo de pessoas. Considerando isso, apenas os moradores dos apartamentos com número par poderão usar o elevador. Escreva um código que, com base na variável “moradores” nos informe quais moradores poderão utilizar o elevador. O número do apartamento é a sua posição no array, e o nome do morador é o valor.
// Imprima no console a lista a seguinte frase: 'O morador ' + nome do morador + ' pode usar o elevador'

var moradores = [
    "Fulano de Tal",
    "Beltrano da Cia",
    "Viajante do Tempo",
    "Morador da Lua",
    "Marciano Azul",
    "Et da Eslováquia",
    "Jedi do Lado Cinza da Força",
    "Baby Yoda Amarelo"
]

for (i=0; i < moradores.length; i++){
    if (i%2 == 0){
        console.log('O morador ' + moradores[i] + ' pode usar o elevador')
    }
}

// Em uma  academia está acontecendo um cadastro de vários usuários contendo as seguintes informações: nome, idade e altura. E para realizar um determinado treino, existe alguns requisitos: Ter 18 anos ou mais e ter uma altura igual ou maior a 1,70.
// Crie uma função chamada maiorAlto que retorne verdadeiro (true) caso ele atenda os requisitos, e falso (false) para o contrário. Nessa função você irá receber um parâmetro que será um array, contendo na primeira posição o nome, segunda posição a idade do aluno e na terceira contendo a altura em Centímetros.

var usuario1 = ['Et da Estônia', 17, 170]
var usuario2 = ['Pessoa do Pântano', 39, 198]
var usuario3 = ['Homem da Lua Virada', 21, 149]
var usuario4 = ['Pequena Paulistana', 18, 171]
var usuario5 = ['Menino da Porteira', 13, 142]

function maiorAlto (array){
    if (array[1] >= 18 && array[2] >= 170){
        return true
    }
    else{
        return false
    }
}

console.log(maiorAlto(usuario4))


// Uma academia precisa separar grupos de pessoas tendo como base a sua altura para que dessa forma consiga formar grupos para as aulas de zumba. Temos um array que lista a altura de cada aluno da academia, e outros 3 arrays (Grupo A, B e C) que são classificados da seguinte forma: 
// grupoA - Alunos com altura entre 150 a 159
// grupoB - Alunos com altura entre 160 a 169
// grupoC - Alunos com altura de 1.70 ou mais
// Seu trabalho é pegar cada valor do array alunos e colocar o valor correspondente em seu respectivo grupo. Para esse exercício, você precisará usar loops, condicionais e funções de arrays. 

var alunos = [170, 159, 151, 187, 156, 191, 165, 154, 167, 169, 171, 170, 160]

var grupoA = []
var grupoB = []
var grupoC = []

for (i=0; i < alunos.length; i++){
    if (alunos[i] >= 150 && alunos[i] <= 159){
        grupoA.push(alunos[i])
        
    }
    else if (alunos[i] >= 160 && alunos[i] <= 169){
        grupoB.push(alunos[i])
        
    }
    else{
        grupoC.push(alunos[i])
        
    }
}

console.log(grupoA)
console.log(grupoB)
console.log(grupoC)


// Um estacionamento deseja automatizar a cobrança de mensalistas. Para isso decidiu simplificar a forma de calcular o valor devido pelo seu cliente. A quantia a ser paga pelos seus usuários depende do número de entradas que o veículo realiza no estacionamento. A cada entrada, a placa do veículo é registrada. Ao final do mês, conta-se o número de entradas que o veículo realizou e faz-se o seguinte cálculo:

//Se o motorista realizou até 20 entradas, ele deve pagar R$ 10,00 por entrada realizada.
//Da vigésima primeira entrada em diante, cada entrada custa R$ 5,00 ao cliente.

//Agora, você vai deve ajudar na automatização da cobrança escrevendo duas funções.
//A primeira função se chama calcularNumeroDeEntradas(placa). Ela deve receber um único parâmetro que representa a placa de um carro. A função deve retornar o número de entradas que esse carro realizou no estacionamento. Em outras palavras, o número de vezes que a placa passada como parâmetro aparece no array placas.
//A segunda função se chama calcularValorDevido(placa). Ela deve receber um único parâmetro que representa a placa de um carro. A função deve calcular o valor que o proprietário do carro tem que pagar segundo a política de preços estabelecida. Naturalmente, será necessário utilizar a primeira função dentro da segunda.

var placas = [
    'RXB-2525', 'AKX-3333', 'ORO-7142','RXB-2525', 'AKX-3333', 'ORO-7142',
    'AKX-3333', 'RXB-2525', 'AKX-3333','AKX-3333', 'RXB-2525', 'AKX-3333',   
    'RXB-2525', 'AKX-3333', 'ORO-7142','AKX-3333', 'AKX-3333', 'RXB-2525',
    'AKX-3333', 'ORO-7142', 'ORO-7142','AKX-3333', 'AKX-3333', 'RXB-2525',
    'AKX-3333', 'AKX-3333', 'RXB-2525','AKX-3333', 'AKX-3333', 'RXB-2525',
    'AKX-3333', 'ORO-7142', 'ORO-7142','AKX-3333', 'ORO-7142', 'ORO-7142',
    'ORO-7142', 'RXB-2525', 'AKX-3333','AKX-3333', 'ORO-7142', 'ORO-7142',
    'AKX-3333', 'RXB-2525', 'AKX-3333','AKX-3333', 'RXB-2525', 'AKX-3333',
    'RXB-2525', 'AKX-3333', 'ORO-7142','AKX-3333', 'AKX-3333', 'RXB-2525',
    'AKX-3333', 'ORO-7142', 'ORO-7142','AKX-3333', 'AKX-3333', 'RXB-2525',
    'AKX-3333', 'AKX-3333', 'RXB-2525','AKX-3333', 'AKX-3333', 'RXB-2525'
 ]
 
 function calcularNumeroDeEntradas(placa){
    contador = 0
    for (i=0; i < placas.length; i++){
        if (placas[i] == placa){
            contador = contador + 1
        
        }
    }
    return contador
 }
  
 console.log(calcularNumeroDeEntradas('ORO-7142'))

 function calcularValorDevido(placa){
    var valorTotal = null; 
    var totalEntradas = calcularNumeroDeEntradas(placa);
    if (totalEntradas <= 20){
        valorTotal = 10*totalEntradas
    }
    else{
        valorTotal = 5*totalEntradas
    }

    return valorTotal
 }

 console.log(calcularValorDevido('ORO-7142'))


 // Em um site sobre cinema, os visitantes cadastrados podem dar notas de 0 a 5 para um filme que ele tenha assistido. Cada filme tem um grande array de notas atribuídas pelos visitantes. Contudo, além de dar notas para os filmes, os visitantes querem ver o que as outras pessoas acharam do filme! É aí que você entra com seu código! Escreva uma função calculaGostos(notas). Essa função deve ser escrita para receber somente um parâmetro: um array de notas. Ela deve retornar também um array com três elementos:
// O primeiro, com a quantidade de notas iguais a 0 ou 1. Seriam os que não gostaram do filme
// O segundo, com a quantidade de notas iguais a 2 ou 3. Seriam os que acharam o filme mediano
// O terceiro, com a quantidade de notas iguais a 4 ou 5. Seriam os que gostaram do filme.

var notas= [ 0, 1, 2, 4, 4, 5, 1, 2, 3, 5, 5, 2]


function calculaGostos(notas){
    var grupo1 = 0;
    var grupo2 =0;
    var grupo3 = 0;
    for(i=0; i < notas.length; i++){
        if (notas[i] == 0 || notas[i] == 1){
            grupo1 = grupo1 + 1
        
        }
        else if(notas[i] == 2 || notas[i] == 3){
            grupo2 = grupo2 + 1
        
        }
        else{
            grupo3 = grupo3 + 1
            
        }
    }
    return [grupo1, grupo2, grupo3]
}

console.log(calculaGostos(notas));