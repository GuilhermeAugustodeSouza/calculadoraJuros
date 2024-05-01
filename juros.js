import entradaDados from 'readline-sync';
console.log('Aplicação de Juros : ');

const calculaJuros=()=>(valorDivida / 100)*juros;

let juros='';

let valorDivida = entradaDados.question('Informe o  valor devido : ');
if(valorDivida > 0){

let diasAtraso = entradaDados.question('Informe quantos dias se passaram desde o vencimento do boleto : ');
if (diasAtraso > 0){

    if(diasAtraso > 15){
    juros = 10
}else{
    juros = 5
}
 valorDivida = Number(valorDivida);
 diasAtraso = Number(diasAtraso); 
/*if(diasAtraso>15){
juros= 10;
 }else{
    juros= 5;
 }*/
 let valorJuros= calculaJuros();
 let totalDivida = valorDivida + valorJuros;
 console.log('Valor original da divida : R$ ' + valorDivida);
 console.log('Dias de atraso : '+ diasAtraso);
 console.log('Taxa de juros : ' + juros + '%');
 console.log('Valor total com juros : R$ '+ totalDivida);
}else /*if(diasAtraso<= 0)*/ {
console.log('Você esta em dia com seu pagamento !');
}
}else{
    console.log('O valor digitado tem que ser maior que zero(0).');
}