/*
Crie um programa que imprima 11 vezes a frase " Hello World!" utilizando uma estrutura de repetição while. 
*/

function RepetirPalavra(palavra){
    let contador=1;
    while(contador <=11){
        console.log(contador ," = " ,palavra);
        contador++;
    }
}

RepetirPalavra("Hello World");

//testes
RepetirPalavra("Olá Brasil");