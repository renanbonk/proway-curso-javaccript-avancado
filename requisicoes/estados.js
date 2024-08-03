function cadastrar(nome, sigla){
    let estado ={
        "nome": nome,
        "sigla": sigla
    }
    fetch("http://localhost:3000/estados",{
        method: "post",
        body: JSON.stringify(estado)
    })
    .then(data => console.log("Estado cadastrado com sucesso"))
    .catch(erro => console.error("Erro ao tentar cadastrar o estado"));
}

function obeterTodos(){
    fetch("http://localhost:3000/estados",{
        method: "get"
    })
    .then(resposta => resposta.json())
    .then(dados =>{
        for (let i = 0; i < dados.length; i++){
            let estado = dados[i];
            console.log(estado.nome)
            console.log(estado.sigla)
        }
    })
    .catch(erro =>{
        console.error("Ocorreu um erro ao consultar os estados")
    })
}

function alterar(){}

function apagar(){}

cadastrar("Santa Catarina","SC");
obeterTodos();