/*
O cardápio de uma lanchonete é o seguinte: 
Código  Descrição do Produto  Preço 
100  Cachorro Quente  R$ 3,00 
200  Hambúrguer Simples  R$ 4,00 
300  Cheeseburguer  R$ 5,50 
400  Bauru  R$ 7,50 
500  Refrigerante  R$ 3,50 
600  Suco  R$ 2,80 
Implemente uma  função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor 
a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o 
comando switch. Crie um caso default para produto não existente.
*/

function Comprar(codigo, quantidade){
    switch(codigo){
        case 100:
            console.log("Cachorro quente , preço : R$" , (quantidade * 3).toFixed(2));
            break;
        case 200:
            console.log("Hambúrguer Simples , preço : R$" , (quantidade * 4).toFixed(2));
            break;
        case 300:
            console.log("Cheeseburguer  , preço : R$" , (quantidade * 5.5).toFixed(2));
            break;
        case 400:
            console.log("Bauru  , preço : R$" , (quantidade * 7.5).toFixed(2));
            break;
        case 500:
            console.log("Refrigerante  , preço : R$" , (quantidade * 3.5).toFixed(2));
            break;
        case 600:
            console.log("Suco  , preço : R$" , (quantidade * 2.8).toFixed(2));
            break;
        default:
            console.log('produto não existe');
        
    }
}
Comprar(100,3);
Comprar(200,3);
Comprar(300,3);
Comprar(400,3);
Comprar(500,3);
Comprar(600,3);
Comprar(700,3);