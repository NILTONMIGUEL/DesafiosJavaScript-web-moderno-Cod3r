/*
Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao 
dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch. 
*/

function dias(dia){
    switch(dia){
        case 1:
            return 'domingo dia invalido'
            
        case 2:
            return 'segunda dia valido'
        case 3:
            return 'terça dia valido'
        case 4:
            return 'quarta dia valido'
        case 5:
            return 'quinta dia valido'
        case 6:
            return 'sexta dia valido'
        case 7:
            return 'sabado dia invalido'
        default:{
            return 'algo deu errado'
        }
    }
}

console.log(dias(1));
console.log(dias(7));
console.log(dias(4));
console.log(dias(11));