//1- Map: retorna um novo array sem alterar o array original
const alunos = ['Bruno','Clara','Joao','Wesley']
alunos.map(aluno => console.log(aluno))

//2- Filter: retorna um novo array com os elementos filtrados
const num = [1,2,3,4,5,6,7,8,9,10]
const impares = num.filter(n => n%2 == 1)
console.log(impares)

const pares = num.filter(n => n%2 == 0)
console.log(pares)

//3- Find: encontra e retorna o primeiro elemento que se encaixar
const produtos = ['Geladeira','Fogão','Cama','Mesa']
const encontraCama = produtos.find(produto => produto === 'Cama')
console.log(encontraCama)

//4- Sort: ordena o array
const numeros = [95,99,121,1,16,12,52]
const numerosCrescente = numeros.sort((n1, n2) => n1-n2)
console.log(numerosCrescente)

const numerosDecrecente = numeros.sort((n1, n2) => n2-n1)
console.log(numerosDecrecente)

//5- Reduce: reduz o array a um resultado de operação matematica
const numbers = [1,2,3,4,5,6,7,8,9,10]

const somaTotal = numbers.reduce((anterior, atual) =>{
    return anterior+atual
})
console.log(somaTotal)