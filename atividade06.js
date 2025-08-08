/*
Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A 
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda 
retornará o valor da aplicação sob o regime de juros compostos. 
*/
function Jsimples(capitalI,juros,tempo){
    const montante=capitalI + capitalI * ((juros /100) * tempo);
    const rendimento=capitalI * (juros /100) * tempo;
    return `montante ${montante} rende ${rendimento}` ; 
}

console.log(Jsimples(100, 2 , 2));

function Jcompostos(capitalI, juros, tempo){
    
    const montante=capitalI * Math.pow(1 + (juros/100) , tempo);
    const rendimento=montante - capitalI;
    return `montante ${montante} rendimento ${rendimento}`
}
console.log(Jcompostos(100, 2 , 2));