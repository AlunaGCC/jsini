function modulo(){

//padrão de definição 'function'

/*
function <nome da função>(parametros){

}
*/

//EXEMPLO1
/*
function somar(){
  var x,y; x=10; y=10;
  var soma = x + y;
  console.log(soma);

}


somar(); //chamar a função
*/

//EXEMPLO2

//função com const-evitar mudançã na função em tempo de execucação

//atribuir a var, o conteudo de uma função 

const somar = function(x,y){
  //var x,y; x=10; y=10;

  var soma = x + y;
  console.log(soma);
}

somar(5,6);//chamar função

somar(10,10);

somar(32.22,43.22);

somar(10,"20");


//sobre parametros:
/*
na funçao: definir as variaveis que vão receber os valores
na chamada:passagem de valores
*/

console.log("ssaasdsadasdasd--------");

//função com retorno

const multiplicar = function(x,y){
  //var soma = x+y;
  let soma = x * y;
return soma;
}

var resultado = multiplicar(2,10);

console.log(resultado);


}//fim modulo
module.exports = {modulo};