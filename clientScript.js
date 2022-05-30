const campoCnpj = ZDK.Page.getField('CNPJ_CS').getValue();
const cnpjFormatado = campoCnpj.replaceAll(/[a-zA-z!@#$%^&*.-/////-]/g, "");
const tamanhoCnpjFormatado = cnpjFormatado.toString().length;


if (cnpjFormatado == 'null' || cnpjFormatado == "") {
    return ZDK.Client.showAlert("CNPj inválido" + cnpjFormatado +" digitos" +tamanhoCnpjFormatado);
}

if(cnpjFormatado == "00000000000000" || cnpjFormatado == "11111111111111" || cnpjFormatado == "22222222222222" || cnpjFormatado == "33333333333333" || cnpjFormatado == "44444444444444" || cnpjFormatado == "55555555555555" || cnpjFormatado == "66666666666666" || cnpjFormatado == "77777777777777" || cnpjFormatado == "88888888888888" || cnpjFormatado == "99999999999999")

{
  return ZDK.Client.showAlert("Valor inválido de Cnpj!"+cnpjFormatado +" digitos" +tamanhoCnpjFormatado);
}

if (tamanhoCnpjFormatado == 14) {

        num1 = cnpjFormatado.substr(0,1);
        num2 = cnpjFormatado.substr(1,1);
        num3 = cnpjFormatado.substr(2,1);
        num4 = cnpjFormatado.substr(3,1);
        num5 = cnpjFormatado.substr(4,1);
        num6 = cnpjFormatado.substr(5,1);
        num7 = cnpjFormatado.substr(6,1);
        num8 = cnpjFormatado.substr(7,1);
        num9 = cnpjFormatado.substr(8,1);
        num10 = cnpjFormatado.substr(9,1);
        num11 = cnpjFormatado.substr(10, 1);
        num12 = cnpjFormatado.substr(11, 1);
        num13 = cnpjFormatado.substr(12, 1);
        num14 = cnpjFormatado.substr(13, 1);

      num1Int = parseInt(num1);
	    num2Int = parseInt(num2);
	    num3Int = parseInt(num3);
	    num4Int = parseInt(num4);
	    num5Int = parseInt(num5);
	    num6Int = parseInt(num6);
	    num7Int = parseInt(num7);
	    num8Int = parseInt(num8);
	    num9Int = parseInt(num9);
	    num10Int = parseInt(num10);
	    num11Int = parseInt(num11);
         num12Int = parseInt(num12);
         num13Int = parseInt(num13);
  num14Int = parseInt(num14);

        // _______________________________Primeiro Digito Verificador__________________________

     calc1 = num1Int * 5;calc2 = num2Int * 4;calc3 = num3Int * 3;calc4 = num4Int * 2;calc5 = num5Int * 9;
	calc6 = num6Int * 8;calc7 = num7Int * 7;calc8 = num8Int * 6;calc9 = num9Int * 5;calc10 = num10Int * 4;
	calc11 = num11Int * 3;calc12 = num12Int * 2;
	
	const somandoDigitos01 = calc1 + calc2 + calc3 + calc4 + calc5 + calc6 + calc7 + calc8 + calc9 + calc10 + calc11 + calc12;

         
  console.log(somandoDigitos01);
  divisao01 = somandoDigitos01/11;
	divisaoResto = somandoDigitos01%11;
	console.log("Divisão: " + divisao01);
  console.log("Resto da divisão:" + divisaoResto);
  const primeiroDigitoVerificador = 11 - divisaoResto;


  //________________________________________Segundo Digito Verificador________________________________


      calc1 = num1Int * 6;
      calc2 = num2Int * 5;
      calc3 = num3Int * 4;
      calc4 = num4Int * 3;
      calc5 = num5Int * 2;
      calc6 = num6Int * 9;
      calc7 = num7Int * 8;
      calc8 = num8Int * 7;
      calc9 = num9Int * 6;
      calc10 = num10Int * 5;
      calc11 = num11Int * 4;
      calc12 = num12Int * 3;
      calc13 = num13Int * 2;
  
      const somandoDigitos02 =
        calc1 +
        calc2 +
        calc3 +
        calc4 +
        calc5 +
        calc6 +
        calc7 +
        calc8 +
        calc9 +
        calc10 +
        calc11 +
        calc12 +
        calc13;
  
      console.log(somandoDigitos02);
  
      divisao02 = somandoDigitos02 / 11;
      divisaoResto02 = somandoDigitos02 % 11;
  
      console.log("Divisão2: " + divisao02);
      console.log("Resto da divisão2:" + divisaoResto02);
      const segundoDigitoVerificador = 11 - divisaoResto02;

   if (divisaoResto == 0 || divisaoResto == 1) {
        console.log("1º Digito verificador Válido =0");
  
        if (divisaoResto02 == 0 || divisaoResto02 == 1) {
          console.log("2º Digito verificador Válido =0");
          return ZDK.Client.showAlert("CNPJ Aceito");
        } else {
          return ZDK.Client.showAlert("CNPJ 2ºDigito verificador invalido!");
      }  
}if (divisaoResto <= 10 && divisaoResto >= 2 && primeiroDigitoVerificador==num13Int) {
        
        console.log(
          " O Primeiro digito verificador é: " + primeiroDigitoVerificador
        );
  
        if (divisaoResto02 <= 10 && divisaoResto02 >= 2 && segundoDigitoVerificador==num14Int) {
         
          console.log(
            " O segundo digito verificador é: " + segundoDigitoVerificador
          );
          return ZDK.Client.showAlert("CNPJ Aceito");
        } else {
          console.log("CNPJ 2º digito verificador invalido!");
        }
      } else {
        return ZDK.Client.showAlert("CNPJ Inválido" + cnpjFormatado);
      }
    } else {
     return ZDK.Client.showAlert("CNPJ Inválido" + cnpjFormatado + " digitos" + tamanhoCnpjFormatado);
  }

