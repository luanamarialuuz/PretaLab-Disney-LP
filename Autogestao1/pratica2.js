//Definindo um array de frutas
const frutas = ["Maça", "Banana", "Laranja", "Manga"]

//exibindo o arry completo
console.log("Lista de frutas ", frutas)

//acessando o primeiro elemento da array
console.log("A primeira fruta da lista é", frutas[0])

//acessando o último elemento do array
console.log("A última fruta da lista é", frutas[frutas.length -1])

//adicionando uma nova fruta ao final da array
frutas.push("Abacaxi")
console.log("Após adicionar nova fruta", frutas)

/* remover a primeira fruta do array
frutas.shift()
console.log("Após remover a primeira fruta", frutas) */

const posicaoParaApagar = 1; //índice da banana
frutas.splice(posicaoParaApagar, 1) //remover 1 item
console.log("Após apagar a fruta da posição 1", frutas)

