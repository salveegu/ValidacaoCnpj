
function mascara() {

    var cpf = "42523254808";
    console.log("tamanho cpf: "+cpf.length);
    
    var arr = Array.from(cpf); //converti uma String para um ARRAY

     console.log("Numeros do cpf: "+cpf);
     console.log("Numeros no Array:" +arr);
   
     arr.splice(3,0,".");
     arr.splice(7,0,".");
     arr.splice(11,0,"-");
     console.log("Aplicando mascara no cpf: "+arr);
     console.log(typeof arr);

     var arrString = arr.toString();
     
     arrString.replace(/,/g," ");
     console.log(arrString);
    
}

