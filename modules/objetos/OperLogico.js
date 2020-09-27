//JSON 
//definir objetos com valores...
const obj = {
  nome : "Professor",
  idade : 0,

  setIdade :  function (idade){
  //atribuir um valor de idade, aprtir de uma function
    this.idade=idade;
  },

  classificaIdade: function(){
    if((this.idade >= 0) && (this.idade <= 12)) return "criança...";
    else if((this.idade >= 13) && (this.idade <=19)) return "jovem...";
    else return "adulto....";

  },

  classificaAluno : function(){
    if(((this.idade >= 0) && (this.idade <= 12)) || ((this.idade >= 13) && (this.idade <=19)))
      return "aluno";
      else
      return "não é aluno";

  },
  idadeCorreta : function(){
    if(!(this.idade<0))
      return "Idade Correta....";
      else return "Idade Incorreta...";
  }



};
module.exports=obj;