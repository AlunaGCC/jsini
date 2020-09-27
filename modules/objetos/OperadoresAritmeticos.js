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