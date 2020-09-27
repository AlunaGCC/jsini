/*------
teste aula- operadores de igualdade
--------
*/

//importa a classe, (onde está o objeto)
const Op_de_igualdade = require('./modules/objetos/OperIgualdade.js');
const Op_logico = require('./modules/objetos/OperLogico.js');

//JSON, não precisa instanciar
Op_logico.setIdade(14);
console.log(Op_logico.classificaIdade());
console.log(Op_logico.classificaAluno());
console.log(Op_logico.idadeCorreta());


//instancia do objeto aparti de uma funçao
var obj = new Op_de_igualdade.OperIgualdade(110,10);//colocar a referencia da importaçao

//console.log(obj.igualdade());//igualdade, e não o nome real do metodo, pois foi como foi declarado paraotornar publico

//console.log(obj.diferenca());



const Operacao_Maior = require ('./modules/objetos/OperRelacional.js');

var objetoTeste = new Operacao_Maior.OperRelacional(10,10);

console.log(objetoTeste.maiorque());
console.log(objetoTeste.menorque());


/**
 * === para comparar igualdade de valor e tiposVariaveis
 * !== para comparar diferenca de valor e tipo
 */














/*----------
tESTE aula - operadores condicionais
---------
//utilizar o if - para apresentar  ou não resultados
*/


/*
----------
tESTE aula - operadores aritimeticos
---------
*/
/*
const Operadores = require('./modules/objetos/OperadoresAritmeticos.js');
//disponibilar a classe para o uso dos objetos

var calculadora = new Operadores(10,5);//--> 10 + 5 = 15
//if --> condicional
var x,y;x=true;y=false;

if(x){
    console.log(calculadora.soma());
    console.log(calculadora.subtracao());
}

if(x){
console.log(calculadora.divisao());
  console.log(calculadora.potencia());

}
*/
/*
console.log(calculadora.soma());
console.log(calculadora.subtracao());
console.log(calculadora.multiplicacao());
console.log(calculadora.divisao());
console.log(calculadora.potencia());
console.log(calculadora.mod());
*/




/*
//definir funcinalidades/metodos baseada nos atributos/caracteristica 
  //instancia de classe pessoa
  const joao = new Pessoa(80,1.75);//instanciando o objeto

  //apresentar o resultado/conteudo do imc, do objeto JOÂO

  console.log (joao.imc());
  //chamar a função a parti do objeto joa
  //calculo imc, feitos aprtir dos daos desse objeto espeficico

//EXEMPLIFICANDO USAR A MESMA ESTRUTURA PARA OUTRO OBJETO


const pedro = new Pessoa();
pedro.peso= 100;
pedro.altura=1.6;
console.log(pedro.imc());

//não passar valores por parametro
//não está utilizando o construtor efetivamente

//porque há varias possibilidades de controle sobre os atributos e metodos, varias formas de utlizar



*/

//uso da classe pessoa, no codigo de index
//importar a estrutura de classe pessoa



/*
const Pessoa = require('./modules/objetos/Pessoa.js');

//a variavel PESSOA, represente a classe Pessoa, para criar objetos da clase


  const joao = new Pessoa(80,1.75);//instanciando o objeto
    console.log (joao.imc());

*/







/*
PRIMEIRO INDEX
//Utilizado modulos

//crianção de objetos...
//var modulo = require('./modules/modulos.js');
//var modulo = require ('./modules/[1]-declaracao-variaveis.js');
//var modulo = require('./modules/[2]-tiposVariaveis2.js');
//var modulo = require('./modules/[3]-funcoes.js');

var modulo = require('./modules/modulos.js');

modulo.modulo();  //invocando objetooo




//objeto chamado modulo, que chama a modulo que está definida em modulos.js
//caminho  do arquivo que desejo utilizar

*/