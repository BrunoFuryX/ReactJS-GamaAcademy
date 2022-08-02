// linguagem web Fon


/*
    == - Igual
    === - Exatamente Igual
    != - Diferente
    !== - Diferença exata
    > - Maior que
    >= - Maior ou igual a
    < - Menor que
    <= - Menor ou igual a
*/

var num = 1

if(num === 1){
    console.log('sim')
}else{
    console.log('não')
}

num === 1 ? console.log('sim') : console.log('não')

switch(num){
    case 1:
        console.log('sim') 
        break;

    default: 
        console.log('não') 
        break;
}

//Caso não use break ele segue para o proximo
switch(num){
    case 1:
        console.log('sim') 

    default: 
        console.log('tambem') 
        break;
}