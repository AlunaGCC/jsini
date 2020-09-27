//criar objetos, com estrutura de funções
function OperRelacional(esquerda,direita){
  this.valoresquerda=esquerda;
  this.valordireita= direita;


  this.maiorque = maior;// tornar o metodo publico
  this.menorque = menor;

  function maior(){
    if(this.valoresquerda > this.valordireita){
      return "Valor esquerda é Maior";
    }else{
      return "Valor da esquerda não é Maior"
    }
  }


  function menor(){
    if(this.valoresquerda < this.valordireita){
      return "Valor esquerda é Menor";
    }else{
      return "Valor da esquerda não é Menor"
    }
  }


}
module.exports={OperRelacional};

/**
 * teste no arquivo index.js
 * 
 * 
const Operacao_Maior = require ('./modules/objetos/OperRelacional.js');

var objetoTeste = new Operacao_Maior.OperRelacional(10,10);

console.log(objetoTeste.maiorque());
console.log(objetoTeste.menorque());


 */