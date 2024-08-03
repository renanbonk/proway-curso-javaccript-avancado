function cadastrar(nomeMarca) {
    let marca = {
        "nome": nomeMarca
    }
    fetch("http://localhost:3000/marcas", {
        method: "post",
        body: JSON.stringify(marca)
    })
        .then(data => console.log("Marca cadastrada com sucesso"))
        .catch(erro => console.error("Erro ao tentar cadastrar a marca"));
}

async function obeterTodos() {
    let resposta = await fetch("http://localhost:3000/marcas", {
        method: "get"
    });
    if (resposta.ok) {
        let marcas = resposta.json();
        return marcas;
    }
    console.error("Ocorreu um erro ao consultar as marcas")
    return null
}

async function obeterMarcasPorNome(nome) {
    let marcas = await obeterTodos();
    if (marcas === null)
        return null;

    for (let i = 0; i < marcas.length; i++) {
        let marca = marcas[i];
        if (marca.nome === nome)
            return marca;
    }

    return null;
}

function apagarPorId(id) {
    fetch(`http://localhost:3000/marcas/${id}`, {
        method: "DELETE"
    })
        .then(requisicao => {
            if (requisicao.ok)
                console.log("Marca apagada com sucesso");
            else
                console.log(`Não encontrada marca com o id ${id}`);
        })
        .catch(erro => console.error("não foi possivel apagar"))
}

function alterar(id, nome) { 
    let marca = {
        "nome": nome
    }
    fetch(`http://localhost:3000/marcas/${id}`,{
        method: "PUT",
        body: JSON.stringify(marca)
    })
    .then(response => {
        if(response.ok === false){
            console.log(`Marca não alterada pois não possivel envontrar com o id ${id}`);
            return;
        }
        console.log("Marca alterada com sucesso");
    })
    .catch(error => console.error("Não foi possivel alterar a marca"));
}

async function apresentarTodos(){
    let marcas = await obeterTodos();
    console.log ("Marcas: ");

    for(let index = 0; index < marcas.length; index++){
        const marca = marcas[index];
        console.log(`Id: ${marca.id} Nome: ${marca.nome}`)
    }
}

async function apagarPorNome(nome) {
    let marca = await obeterMarcasPorNome(nome);
    if (marca === null) {
        console.log(`Não encontrada marca com o nome ${nome}`);
        return;
    }
    apagarPorId(marca.id);
}

function alterar() { }

function apagar() { }

//cadastrar("intel");
//cadastrar("Razer");
//obeterTodos();
apagarPorNome("Dell")
