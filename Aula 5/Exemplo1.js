/*let i = 0;

while (i < 11){
 console.log(`${i} x 5 = ${i * 5}`);   
 i++;
} */

let i = 1; // Inicializa a variável i com 1

while (i <= 10) { // Enquanto i for menor ou igual a 10
    if (i % 2 == 0) { // Verifica se i é par (resto da divisão por 2 é 0)
        console.log(`${i} é par`); // Exibe o número e que ele é par
    } else { // Se não for par
        console.log(`${i} é ímpar`); // Exibe o número e que ele é ímpar
    }
    i++; // Incrementa i em 1 para passar ao próximo número
}
