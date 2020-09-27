/*  estrutura basica
class <nome_classe>
{

}
*/
class Pessoa{
  constructor(peso, altura){
    //definir os atributos
    this.peso = peso;
    //está recebendo esse valor
    this.altura= altura;
    //valores do contrutor está recebendo valor da classe Pesoa
  }
 

    //não precisar usar o nome function
    imc(){ //calcular o indice de massa corporea
      let imc = this.peso / (this.altura * this.altura);
      return imc;
    }
} 

//definir funcinalidades/metodos baseada nos atributos/caracteristica 
  //instancia de classe pessoa

  //exportando um objeto

  module.exports = Pessoa;


/*

--------------------
Conteudo do arquivo index.js para uso da classe Pessoa
-------------------


const Pessoa = require('./modules/objetos/Pessoa.js');

//a variavel PESSOA, represente a classe Pessoa, para criar objetos da clase


  const joao = new Pessoa(80,1.75);//instanciando o objeto
    console.log (joao.imc());


*/