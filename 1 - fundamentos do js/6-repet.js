// linguagem web Fon

var numbers = [1,2,3,4,5,6,7,8,9,10]
// toda array é um objeto pois tem a variavel de length

for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    console.log(element)
}

for (let i = 0; i < 10; i++) {// conta de 0 a 9
    const element = i;
    console.log(element)
}

{//to incapsulando p i poder ser redefinido
    let i = 0
    while (i < 10) { // conta de 0 a 9
        console.log(i)
        i++
    }
}

{//to incapsulando p i poder ser redefinido
    let i = 0
    do { //executa pelo menos 1x
        console.log(i)
        i++
    } while (i < 10);
}