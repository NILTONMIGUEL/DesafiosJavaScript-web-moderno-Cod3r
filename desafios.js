/*
12)Faça um algoritmo que calcule o fatorial de um número.
*/

function fatorial(numero){
    if(numero==0){
        return 1;
    }
    else{
        console.log(numero);
        return numero * fatorial(numero-1);
    }
}


//console.log(fatorial(100));



