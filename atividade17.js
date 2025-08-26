/*
Um funcionário irá receber um aumento de acordo com o seu plano de 
trabalho, de acordo com a tabela abaixo:  
Plano  Aumento 
A  10% 
B  15% 
C  20% 
Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu 
novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido. 
*/

let salario=1200;
const planoTrabalho="a";
let percento=0;

switch(true){
    case planoTrabalho == 'a':
        percento = salario * (10 / 100);
        salario+=percento;
        console.log('seu salario novo é : ' , salario);
        break;
    case planoTrabalho == 'b':
        percento = salario * (15 / 100);
        salario+=percento;
        console.log('seu salario novo é : ' , salario);
        break;
    case planoTrabalho == 'c':
         percento = salario * (20 / 100);
        salario+=percento;
        console.log('seu salario novo é : ' , salario);
        break;
    default:
        console.log("plano invalido");
}