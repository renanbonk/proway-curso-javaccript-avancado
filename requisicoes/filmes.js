function cadastrar(nome, duracao, classificacao){
    let filme = {
        "nome": nome,
        "duracao": duracao,
        "classificacao": classificacao
    }
    fetch("http://localhost:3000/filmes",{
        method: "post",
        body: JSON.stringify(filme)
    })
    .then( data => console.log("Filme cadastrado com sucesso"))
    .catch(erro => console.error("Erro ao tentar cadastrar o filme"));
}

function obeterTodos(){
    fetch("http://localhost:3000/filmes",{
        method: "get",
    })
    .then(resposta => resposta.json())
    .then(dados =>{
        for(let i = 0; i < dados.length; i++){
            let filme = dados[i];
            console.log(filme.nome)
            console.log(filme.duracao)
            console.log(filme.classificacao)
        }
    })
    .catch(erro =>{

        console.error("Ocorreu um erro ao consultar os filmes")
    })
}

function alterar(){}

function apagar(){}


//cadastrar("Dedpoll", "180 min", "Adulto");
obeterTodos()