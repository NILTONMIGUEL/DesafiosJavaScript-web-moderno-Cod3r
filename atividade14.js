/*
Crie uma estrutura condicional switch que receba uma string com o nome de uma fruta e que possua três 
casos: Caso maçã, retorne no console: “Não vendemos esta fruta aqui”. Caso kiwi, retorne: “Estamos com 
escassez de kiwis”. Caso melancia, retorne: “Aqui está, são 3 reais o quilo”. Teste com estas três opções .Crie 
também um default, que retornará uma mensagem de erro no console.  
*/

function venderFrutas(fruta){

    switch(fruta){
        case 'maçã':
            return 'não vendemos esta fruta aqui';
        case 'kiwi':
            return 'estamos com escassez de kiwis';
        case 'melancia':
            return 'aqui está, são 3 reais o quilo';
        default:{
            return 'erro no console';
        }
    }
}
console.log(venderFrutas('maçã'));
console.log(venderFrutas('kiwi'));
console.log(venderFrutas('melancia'));
console.log(venderFrutas('banana'));
