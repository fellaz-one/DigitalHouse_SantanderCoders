// ===== EXERCÍCIOS ====== \\

// Programar uma função filme que recebe três arrays com os nomes de personagens, filmes e ano de estréia no cinema. A função deve receber também um valor de id escolhido pelo usuário com intervalo de 1 até o tamanho máximo dos arrays fornecidos e retornar uma frase com o seguinte modelo: "personagem é um personagem do filme filme que estreou no cinema em lançamento." Se o valor de id for inválido, a função deve retornar a frase "Essa não é uma opção válida."


personagens = ["Hermione", "Trinity", "Leia"]
filmes = ["Harry Potter", "Matrix", "Star wars"]
lancamentos = [2001, 1999, 1977]
id = 2

function filme(personagens, filmes, lancamentos, id){
    if ((id > 0) && (id <= filmes.length)) {
        var i = id - 1;
        return personagens[i] + " é um personagem do filme " + filmes[i] + " que estreou no cinema em " + lancamentos[i] + ".";

 }else{
    return "Essa não é uma opção válida.";
 }

}

   
console.log(filme(personagens, filmes, lancamentos, id))



// Programe uma função series que recebe dois parâmetros, um prefixo com o nome da série e um array com a lista de todos os episódios da série. A função deve retornar um novo array com a lista de episódios iniciando com o nome da série.

harryPotterPrefixo = "Harry Potter";
harryPotterSeries = [
  "e a Pedra Filosofal",
  "e a Câmara Secreta",
  "e o Prisioneiro de Azkaban",
  "e o Cálice de Fogo",
  "e a Ordem da Fênix",
  "e o Enigma do Príncipe",
  "e as Relíquias da Morte"
];

function series(prefixo, array){
    var resultado = []
    for(i=0; i < array.length; i++){
        resultado.push(prefixo + " " +array[i])
    }
    return resultado
}

console.log(series(harryPotterPrefixo, harryPotterSeries));


// Programe uma função maiorQueNum que busca em um dado array apenas os números maiores do que o número fornecido no segundo parâmetro da função e retorna um novo array apenas com esses números.

numeros = [10, 4, 7, 128, 42, -1, 0, 300, -5]
num = 5

function maiorQueNum(array, num){
    var resposta = []
    for(var i=0; i < array.length; i++){
        if(num < numeros[i]){
            resposta.push(numeros[i]);
      }
  }
  return resposta
}

console.log(maiorQueNum(numeros, num))


// Programe uma função buscarDivisivelPor que recebe dois parâmetros, um array de números e um número de teste, retornando como resposta o primeiro número do array que seja divisível pelo número dado e diferente de zero. Caso nenhum número do array passe no teste, retorne o texto "Nenhum número válido encontrado!".


numeros = [1, 2, 3, 4, 5, 10, 20]
num = 2

function buscarDivisivelPor(array, num){
  for(var i=0; i < array.lenght; i++){
    if (array[i]%num == 0 && array !=0){
        return array[i];
      } else{
          console.log("Nenhum número válido encontrado")
      }
  }

}

console.log(buscarDivisivelPor(numeros,num));

// Crie uma função que receba dois valores, o primeiro será uma palavra qualquer, e o segundo será a quantidade de vezes que o sistema irá imprimir essa palavra.

function repete(valor,qtd){
    return valor.repeat(qtd)
 
}

console.log(repete("cafe",5));


// Crie um sistema para calcular a comissão dos vendedores de uma loja. Crie uma função que tenha dois argumentos: preço e porcentagem de comissão.

function comissao(preco,porcentagem){
    return preco*(porcentagem/100)
 
}

console.log(comissao(100,2))