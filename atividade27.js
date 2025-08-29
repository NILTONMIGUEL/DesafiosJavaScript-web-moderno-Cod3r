/*
Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duas 
crianças e calcule se existe uma criança menor, caso exista se a criança menor ultrapassará a maior e em 
quantos anos isso acontecerá. Utilize centímetros para as unidades de medida
*/

function Crescimento(alturaP1 , taxaCresc1 , alturaP2 , taxaCresc2){
    let anos=0;
    const Maior= alturaP1;
    const Menor= alturaP2;
    console.log(CrescimentoTaxa(Maior , taxaCresc1 , Menor , taxaCresc2));

}


function CrescimentoTaxa(Pessoa1 , taxa1 , Pessoa2 , taxa2){
    let anos=0;
    if(Pessoa1 == Pessoa2 && (taxa1 == taxa2 || taxa1 != taxa2)){
        return "mesmo tamanho";
    }
    else if(Pessoa1 > Pessoa2){
        if(taxa1 < taxa2){
            while(Pessoa1 > Pessoa2){
                Pessoa1*= taxa1;
                Pessoa2*= taxa2;
                anos++;
            }
            return `Pessoa2 demora ${anos} anos para ficar maior que a Pessoa1`; 
        }
        else{
            return `não ficará maior`; 
        }
    }
    else if(Pessoa1 < Pessoa2){
        if(taxa1 > taxa2){
            while(Pessoa1 < Pessoa2){
                Pessoa1*= taxa1;
                Pessoa2*= taxa2;
                anos++;
            }
            return `Pessoa1 demora ${anos} anos para ficar maior que a Pessoa2`; 
        }
        else{
            return `não ficará maior`; 
        }
    }
    
}
Crescimento(150 , 2 , 150 , 2);
Crescimento(150 , 4 , 155 , 2);
Crescimento(155 , 4 , 155 , 2);
Crescimento(155 , 4 , 140 , 2);
Crescimento(135 , 2 , 140 , 4);
