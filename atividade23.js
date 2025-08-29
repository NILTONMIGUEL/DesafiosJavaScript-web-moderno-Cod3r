/*
Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do 
aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do 
aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e 
"REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo.
*/

function mediaPonderada(codigo , nota1 , nota2 , nota3){
    let mP=0;
    if(nota1 > nota2 && nota1 > nota3){
       mP= Math.floor((nota1 * 4 + nota2 * 3 + nota3 * 3) / (4 + 3 + 3));
    }
    else if(nota1 < nota2 && nota3 < nota2){
        mP= Math.floor((nota1 * 3 + nota2 * 4 + nota3 * 3) / (4 + 3 + 3));
    }
    else{
        mP= Math.floor((nota1 * 3 + nota2 * 3 + nota3 * 4) / (4 + 3 + 3));
    }

    mP >= 5 ? console.log(`código ${codigo} notas : ${nota1} , ${nota2} , ${nota3} , média ${mP} Aprovado`) : console.log(`código ${codigo} notas : ${nota1} , ${nota2} , ${nota3} , média ${mP} Reprovado`);
    
}

mediaPonderada(1,10,4.5,6.7);
mediaPonderada(2,10,1.5,2.7);
mediaPonderada(3,3,1.5,2.7);
mediaPonderada(4,1,1.5,2.7);
mediaPonderada(5,0,1.2,0.7);