
const readline = require('readline-sync')
const livros = require('./db')


console.log(livros)


//Buscar por author
const searchAuthor = () => {
    const autoresDisponiveis = livros.map(e => e.autor)
    console.log(autoresDisponiveis)
    const input = readline.question('Digite o nome do autor')
    const livrosAutor = livros.filter(e => e.autor.includes(input))
    console.table(livrosAutor)
}

//Fica rodando toda hora até o individuo apertar 0
var valorInput
do{
    valorInput = readline.question('Digite o numero correspondente a função desejada:\n'+
    '1 - Buscar por autor\n'+
    '0 - Sair\n')

    switch(valorInput){
        case '1':
            console.log('Busca por autor.')
            searchAuthor()
            break;


        case '0':
            console.log('Saindo...')
            break;
        default:
            console.log('Valor invalido, digite um numero valido')
    }
}while(valorInput != 0)