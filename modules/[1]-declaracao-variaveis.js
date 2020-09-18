function modulo(){
//TIPOS

/*
--> var
--> let
--> const
*/


var x=2;

console.log(x);

/*
--variavel --referencia 

--> ;= finalização de uma instrução

var armazenar informação consulta posterior

-acessar o conteudo da variavel

'='atribuição

*/

//CONSTANTES

/*
 variavel do tipo de 'const'
não aceita atribuições nova de valores
*/
const y="a";
//y="b";  --> that isn't possible :P

console.log(y);

//VARIAVEL LOCAL X GLOBAL

{ //um bloco de codigo
  let z =4;
  console.log(x);
  console.log(y);
  console.log(z);

}

console.log(z); //apresentará erro



}//fim modulo
module.exports = {modulo};