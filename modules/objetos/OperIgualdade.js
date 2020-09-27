//ter estruturas do objeto que vai permitir, realizar comparações de igualdade

//1 - Uso dos operadores de igualdade
//2 - criar objetos de outra forma - com o uso de funções
//3 - construção mais completa do condicional if

function OperIgualdade(esquerda,direita){
  this.valoresquerda = esquerda;
  this.valordireita = direita;
//não ter um construtor do objeto
// ao instanciar esse objeto será opossivel passar os valores do parametro

  this.igualdade = igual;//necessario para tornar a função mais interna pública
  this.diferenca = diferente;

  function igual(){
    if(this.valoresquerda == this.valordireita){
      return "Valores Iguais";
    }else{
      return "Valores NAO são iguas";
    }
  }

  function diferente(){
    if(this.valoresquerda != this.valordireita){
      return "Valores Diferente";
    }else{
      return "Valores NAO são diferentes, [igual]";
    }
  }


}
module.exports= {OperIgualdade}; 
/*
CRIANDO UM FUNÇAO
DENTRO DE UM OBJETO,
QUE FOI CRIADO COM OUTRA FUNÇÃO
-- A FUNÇÃO MAIS INTERNA, NÃO é acessada externamente..
pois essas funçoes internas, são privadas a funçao externamente
---> so as coisas, referenciado com THIS. são publicos.

OU SEJa:
functions dentro de function, se tranformam em metodos privados.

*/