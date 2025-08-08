/* 
Faça um algoritmo que calcule o fatorial de um número. 
*/
let fator=1;
function fatorial(numero){
    if(numero == 0){
        return 1;
    }
    else{
        console.log(numero);
        fator*=numero;
        fatorial(numero - 1);
    }
    return fator;
}

console.log(fatorial(5));