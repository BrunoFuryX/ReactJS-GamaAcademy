// linguagem web Fon
class Book{
    constructor(title, author, pages, actualPage){
        this.title = title
        this.author = author
        this.pages = pages
        this.actualPage = actualPage

    }
    read(){
        this.actualPage++
        console.log(`Eu estou lendo ${this.title} na pagina ${this.actualPage} de ${this.pages}`)
    }
}

var TheWitcher = new Book
TheWitcher.title = 'The Witcher 3'
TheWitcher.author = 'Andrew'
TheWitcher.pages = 312
TheWitcher.actualPage = 123

TheWitcher.read()
TheWitcher.read()
