const media1 = 7.5
const media2= 6.0
const media3 = 8.5

const mediaFinal = (media1 + media2 + media3) /3

let resultado;

if (mediaFinal >= 7){
    resultado = "Aprovado, tá de férias"
} else if (mediafinal <=5 ){
    resultado = "Em recuperação"
} else {
    resultado = "Reprovado"
}

console.log(`Média final: ${mediaFinal.toFixed(2)}`)
console.log (`Resultado: ${resultado}`)