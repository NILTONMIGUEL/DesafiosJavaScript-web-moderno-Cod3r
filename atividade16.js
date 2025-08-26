/*
 Utilizando a estrutura do Switch faça um programa que simule uma calculadora básicaO programa recebe 
como parâmetros dois valores numéricos e uma string referente à operação e a realize com os valores 
*/

const numero1=2;
const numero2=2;
const operacao="--";

switch(true){
    case operacao == "*" :
        console.log(`${numero1} X ${numero2} = ${numero1 * numero2}`);
        break;
    case operacao == "/":
        console.log(`${numero1} / ${numero2} = ${numero1 / numero2}`);
        break;
    case operacao == "+":
        console.log(`${numero1} + ${numero2} = ${numero1 + numero2}`);
        break;
    case operacao == "-":
        console.log(`${numero1} - ${numero2} = ${numero1 - numero2}`);
        break;
    default :
        console.log("operação invalidas");
        break;
}