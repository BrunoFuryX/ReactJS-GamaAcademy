//forma nova de apresentar variaveis
// em vez de usar string + valor
// usar string ${valor} 
//ATENÇÃO tem que usar `` ao invez de ''
var x = 1

var mostraXTemplate = `O valor de X é ${x}`
var mostraXNormal = 'O valor de X é '+ x 

console.log(mostraXTemplate)
console.log(mostraXNormal)
