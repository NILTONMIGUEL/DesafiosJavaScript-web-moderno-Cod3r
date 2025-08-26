/*
Um homem decidiu ir à uma revenda comprar um carro. Ele deseja comprar um carro hatch, e a revenda 
possui, além de carros hatch, sedans, motocicletas e caminhonetes. Utilizando uma estrutura switch, caso o 
comprador queira o hatch, retorne: “Compra efetuada com sucesso”. Nas outras opções, retorne: “Tem certeza 
que não prefere este modelo?”. Caso seja especificado um modelo que não está disponível, retorne no console: 
“Não trabalhamos com este tipo de automóvel aqui”.
*/

const carro='hatch';
const carroComprar="sedans"
switch(true){
    case carroComprar == "hatch":
        console.log('compra efetuada com sucesso !');
        break;
    case carroComprar == "sedans":
        console.log(`tem certeza que não deseja o ${carro}`);
        break;
    case carroComprar == "motocicletas":
        console.log(`tem certeza que não deseja o ${carro}`);
        break;
    case carroComprar == "caminhonetes" :
        console.log( `tem certeza que não deseja o ${carro}`);
        break;
    default:
        console.log( `não trabalhamos com este tipo de automóvel aqui ${carroComprar}`);
        break;
}