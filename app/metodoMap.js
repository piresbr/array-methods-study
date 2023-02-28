function aplicarDesconto(livros) { //2- crio a função para criar o desconto, retornando o array manipulado com os valores
    const desconto = 0.3
    livrosComDesconto = livros.map(livro => {
        return {...livro, preco: livro.preco - (livro.preco * desconto)} //faz uma cópia de cada livro dentro de livros(array) alterando os preços
    })
    return livrosComDesconto
}