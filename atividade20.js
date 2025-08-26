/*
Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas 
para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1. 
Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve 
informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1 
nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1.
*/

function Notas(quantidade){
    let quantidades=[0,0,0,0,0];
    const valorInicial=quantidade;
    while(quantidade > 0){
        if(quantidade >=100){
            quantidades[0]+= 1;
            quantidade-=100;
        }
        else if(quantidade >=50){
            quantidades[1]+= 1;
            quantidade-=50;
        }
        else if(quantidade >=10){
            quantidades[2]+= 1;
            quantidade-=10;
        }
        else if(quantidade >=5){
            quantidades[3]+= 1;
            quantidade-=5;
        }
        else if(quantidade >=1){
            quantidades[4]+= 1;
            quantidade-=1;
        }
    }

    console.log(`sua nota foi ${valorInicial} . ${quantidades[0]} de 100 , ${quantidades[1]} de 50 , ${quantidades[2]} de 10 , ${quantidades[3]} de 5 , ${quantidades[4]} de 1`)

}

Notas(100);
Notas(110);
Notas(150);
Notas(160);
Notas(268);

