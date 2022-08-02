// linguagem web Fon

console.log('Hello World')

/*
    var
    Escopo Global
    Escopo de função
    Escopo Bloqueado XXXXXXXX

    pode ser ressignificado
    pode ser redeclarado
    pode ser hospedado
*/
var MyName = 'Bruno'
MyName += ' Lopes'


/*
    let
    Escopo Global XXXXXXXX
    Escopo de função
    Escopo Bloqueado 

    pode ser ressignificado 
    pode ser redeclarado XXXXXXXX
    pode ser hospedado XXXXXXXX
*/ 
let language = 'JS'


/*
    const
    Escopo Global XXXXXXXX
    Escopo de função
    Escopo Bloqueado 

    pode ser ressignificado XXXXXXXX
    pode ser redeclarado XXXXXXXX
    pode ser hospedado XXXXXXXX
*/ 
const pattern = 'Irru'


console.log(MyName, language, pattern)


{
    // isso é um escopo global, nesse caso somente o var funcionará
    //const age
    //let age
    var age
}

console.log(age)
