let livros = []
const endpointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'
getBuscarLivrosDaAPI()

async function getBuscarLivrosDaAPI() {
    const res = await fetch(endpointDaAPI)
    data = await res.json()
    livros = aplicarDesconto(data) //1- crio um array novo em cima do data, depois de criado aplico o desconto
    exibirOsLivrosNaTela(livrosComDesconto) //3- exibo os livros com o retorno da função de aplicar o desconto
}
