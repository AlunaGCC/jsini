class OperadoresAritmeticos{
  constructor(var1, var2){
    this.var1 = var1;
    this.var2 = var2;;
  }
  soma(){
    return (this.var1 + this.var2);//operador de soma '+'
  }

  subtracao(){
    return (this.var1 - this.var2);
  }

  multiplicacao(){
    return (this.var1 * this.var2);
  }

  divisao(){
    return (this.var1 / this.var2);
  }

  mod(){
    return (this.var1 % this.var2);
  }

  potencia(){
    return (this.var1 ** this.var2);
  }



}
//disponibilizar classe = transforma em um modulo
module.exports = OperadoresAritmeticos;

/*
---------
arquivo para teste, que estava no index.js
-------
----------
tESTE aula - operadores aritimeticos
---------
// 
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