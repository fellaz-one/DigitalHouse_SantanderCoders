// ===== EXERCÍCIOS ====== \\

// Precisamos de um código que calcule a tabuada de multiplicação do 7 e imprima a expressão seguido do resultado. Exemplo:
// 7 x 1 = 7
// 7 x 2 = 14
// 7 x 3 = 21
// Lembre-se de fazer a multiplicação do 7x1 até 7x10! 

for (i=1;i <11;i++){
    console.log(7 + " x " + i + " = " + 7*i )
}


// Vamos criar um robô que manda “Bom dia, grupo!” para cada dia da semana, ou seja,  7 vezes. Utilize o laço de repetição for para fazer com mais praticidade!

for(i=1;i<8;i++){
    console.log("Bom dia, grupo!")
}


// Uma agência de carros quer exibir seu catálogo para os clientes. Eles exportaram os nomes dos carros no formato de array que se chama listaDeCarros, que vai estar disponível no código. Seu trabalho é percorrer essa array exibindo os nomes dos carros:
// “Nome do Carro: Fox”
// “Nome do Carro: Uno”
// Crie um loop que atenda o problema acima utilizando uma variável chamada i como contador, e que use o console.log para exibir o nome dos carro de acordo com o exemplo acima.

var listaDeCarros = [ "Fox", "Uno", "Gol", "Astra", "Fiesta"]

for(i=0; i < listaDeCarros.length; i++){
    console.log("Nome do Carro: " + listaDeCarros[i])
}


// Uma empresa mandou uma lista contendo os números mensais de tudo o que ela faturou, e nosso trabalho é ajudá-los a criar um relatório que exiba em quantos meses eles tiveram o saldo negativo.
// var listaDeGanhos = [10, 30, -10, -5, -1, 40]
// Com base no array acima, que está disponível no código, faça um loop que verifique quantos meses tiveram valores negativos e armazene a contagem uma variável chamada totalNegativos que também está disponível no código

var listaDeGanhos = [10, 30, -10, -5, -1, 40]
var totalNegativos = 0

for(var i=0; i < listaDeGanhos.length; i++){
    if (listaDeGanhos[i] < 0){
        totalNegativos = totalNegativos + 1
    };

}
    
console.log(totalNegativos)


// Um sacolão montou uma lista com as frutas que eles vendem, e de acordo com a fruta que o usuário busca eles querem informar se existe a fruta na lista ou não! 
// var listaDeFrutas = [ "Uva", "Banana",  "Manga", "Cajá", "Pinha"]
// Você deverá criar um loop que verifique se a fruta contida na variável busca existe na lista de frutas do sacolão. Se existe basta exibir uma mensagem, “Sim, temos a fruta banana disponível”. Use a variável busca para exibir o nome da fruta nessa mensagem de forma dinâmica. 

var listaDeFrutas = [ "Uva", "Banana",  "Manga", "Cajá", "Pinha"]
var busca = "Cajá"

for (var i=0; i < listaDeFrutas.length; i++){
    if (listaDeFrutas[i] == busca){
        console.log("Sim, temos a fruta " + listaDeFrutas[i] + " disponível.");
        
    }
}

// Vamos criar um bingo, onde os números da cartela serão representados por um array chamado cartela, e o número sorteado deve ficar em uma variável chamada numeroSorteado. Seu trabalho será  verificar se existe o número sorteado na cartela, quando encontrar deve imprimir “Encontrei o número!” e parar o loop! 

var cartela = [8, 13, 18, 22, 42, 49]
  var numeroSorteado = 42

  for (var i=0; i < cartela.length; i++){
    if (cartela[i] == numeroSorteado){
      console.log("Encontrei o número!")
      break
    }
  }

  // Precisamos imprimir somente os números pares de 0 à 20. Mas temos alguns requisitos, você precisa utilizar, o loop for, o comando continue e o numero deve ser o contador do loop!

  for (var i = 0; i < 20; i++){
    if (i%2 == 0){
        console.log(i)
        continue
    }
}

// Temos uma lista com nomes de todos os integrantes da família mas esqueceram de colocar o sobrenome! Seu desafio será imprimir nome junto com o sobrenome “Macedo” para cada integrante da família. Mas temos uma exceção, temos um integrante com sobrenome diferente, se tiver algum “Pedro”, coloque o sobrenome “Sousa”.

var familia = ["Joana", "Felipe", "Gabriela", "Carlos", "Pedro", "Bruno"]

for (var i=0;  i < familia.length; i++){
    if(familia[i] == "Pedro"){
        console.log(familia[i] + " Sousa")
        continue
    }
    console.log(familia[i] + " Macedo")
}

// Temos um array em uma variável chamada baralho e precisamos de um script que procure a carta “Rei” entre as cartas do baralho. Assim que encontrar o “Rei” pare o loop utilizando break  e exiba um console.log a seguinte frase: Encontrei o Rei!

var baralho = ["Ás", "Dama", "Rei", "Valete"]
  
for (var i=0; i < baralho.length; i++){
 if (baralho[i] == "Rei"){
   console.log("Encontrei o Rei!")
   break
 }
}