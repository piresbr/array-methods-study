function calcularValorTotalDeLivrosDisponiveis(livros) {
    const initialValue = 0 //para evitar erro
    return livros.reduce((acc, livro) => acc + livro.preco, initialValue).toFixed(2)
}
//livros foi definido no main.js
//acc - acumulador (acumulador é como se fosse um incremente a cada item que ele passa, ou seja vai somando e guardando na mesma variavel até o fim)
//então todos os preços são somados e colocados dentro do acumulador, e esse acumulador é renderizado quando eu chamo essa função.