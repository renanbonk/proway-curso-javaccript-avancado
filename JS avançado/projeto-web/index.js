function apresentarNomeCompleto() {
    console.log("Olá mundo");
    let nome = "Francisco";
    let sobrenome = "Lucas Janesch Lange Sens";
    let nomeCompleto = `${nome} ${sobrenome}`
    console.log(`Nome: ${nomeCompleto}`);
}

function apresentarSoma() {
    let numero1 = 8;
    let numero2 = 3;
    let soma = numero1 = numero2;
    console.log(`Soma: ${soma}`);

    if (soma % 2 == 0) {
        console.log("Par");
    } else {
        console.log("Não é par");
    }
}

function apresentarDadosVetor() {
    let nomes = [];
    nomes.push("Bob");
    nomes.push("Zeus");
    nomes.push("Seus");

    const quantidadeCachorros = nomes.length;
    nomes[2] = "Teus";

    const indiceBon = nomes.findIndex(nome => nome == "Bob");
    nomes.splice(indiceBob, 1);

    console.log(`Quantidade de cachorros: ${quantidadeCachorros}`);
    console.log(`Cachorros: ${nomes}`);
}

// apresentarNomeCompleto();
// apresentarSoma();
// apresentarDadosVetor();

function apresentarDadosObjeto() {
    let thor = {
        nome: "thor",
        forca: 89,
        defesa: 90,
        categoria: "Deus",
        sangue: {
            fatorRh: "**",
            tipoSanguineo: "A"
        },
        filhos: ["Magni", "Thrúd"]
    }
    thor.filhos.push("Lokinho");

    console.log(`Nome: ${thor.nome}`);
    console.log(`Força: ${thor.forca}`);
    console.log(`Sangue: ${thor.sangue}`);
    console.log(`filhos:
     ${thor.filhos[0]}
     ${thor.filhos[1]}
     ${thor.filhos[2]}`);
}

// apresentarDadosObjeto();

function calcularAreaRetangulo(lado1, lado2) {
    let area = (lado1 * lado2)
    return area;
}

function exemploFormasGeometricas() {
    let areRetangulo = calcularAreaRetangulo(5, 12);
    console.log(`Área do retângulo: ${areRetangulo}`);
}

// exemploFormasGeometricas();

function calcularSalarioBruto(valorHora, quantidadeHoras, auxilios) {
    let salarioBruto = valorHora * quantidadeHoras;
    let valorAuxilios = calcularAuxilios(auxilios);
    return salarioBruto + valorAuxilios;
}

function calcularAuxilios(auxilios){
    let valorAuxilios = 0;
    for (let i =0; i < auxilios.length; i = i +1){
        valorAuxilios = valorAuxilios + auxilios[i]
    }
    return valorAuxilios;
}

function calcularDescontos(salarioBruto, descontos){
    let valorDescontos = 0;
    for(let i =0; i < descontos.length; i+= 1){
        let desconto = descontos[i];
        if (desconto.tipo === "normal"){
            valorDescontos += desconto.valor;
        }else{
            let percentualDesconto = desconto.percentual / 100;
            let valorDesconto = salarioBruto * percentualDesconto;
            valorDescontos +=valorDesconto;
        
        }
    }
    return valorDescontos;
}

function calcularSalarioLiquido(salarioBruto, descontos){
    let valorDescontos = calcularDescontos (salarioBruto, descontos);
    let salarioliquido = salarioBruto - descontos;
    return salarioliquido;
}

function exemploFolhaPagamento() {
    let valorHora = 20;
    let quantidadeHoras = 220;
    let alimentacao = 1400;
    let combustivel = 12.50 * 20;
    let idioma = 300;
    let homeOffice = 150;
    let moradia = 200;
    let descontos = [
        {
            nome: "Unimed",
            valor: 400,
            tipo: "normal",
        },
        {
            nome: "valeOnibus",
            percentual: 6,
            tipo: "percentual"
        },
        {
            nome: "inss",
            percentual: 17,
            tipo: "percentual"
        }
    ]

    let auxiliosRecebidos = [alimentacao, combustivel, idioma, homeOffice, moradia]
    let salarioBrutoColaborador = calcularSalarioBruto(valorHora, quantidadeHoras, auxiliosRecebidos);
    let salarioLiquido = calcularSalarioLiquido(salarioBrutoColaborador, descontos)

    console.log("Salário Bruto: ", salarioBrutoColaborador);
    console.log("Salário Líquido: ", salarioLiquido);
}

exemploFolhaPagamento();