class Carro {
    constructor(marca, modelo, ano, valor, cor, temEscada) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.valor = valor;
        this.cor = cor;
        this.velocidade = 0;
        this.estado = "desligado";
        if (this.modelo === "Uno" && this.temEscada === true) {
            this.limiteMaximo == 200;
        } else {
            this.limiteMaximo = 50;
        }
    }

    ligar() {
        this.estado = "ligado";
        console.log(`Carro ligado`);
    }

    deligar() {
        if (this.velocidade === 0) {
            this.estado = "desligado";
            console.log(`Carro desligado`);
        }
    }

    AumentarVelocidade() {
        if (this.estado === "ligado") {
            if (this.velocidade === this.limiteMaximo) {
            } else {
                this.velocidade += 10;
                console.log(`Carro andano a ${this.velocidade} km/h`);
            }
        }
    }

    apresentar() {
        console.log(`marca : ${this.marca}`);
        console.log(` modelo: ${this.modelo}`);
        console.log(` ano: ${this.ano}`);
        console.log(` valor: ${this.valor}`);
        console.log(` cor: ${this.cor}`);
        console.log(` velocidade: ${this.velocidade}`);
        console.log(` estado: ${this.estado}`);
    }

    diminuirVelocidade() {
        if (this.velocidade === 0) {
            console.log("Carro parado, não é possivel diminuir além disso");
            return;
        }
        this.velocidade -= 10;
        console.log(`Carro andando a ${this.velocidade} km/h`);
    }
}

let uno = new Carro("Ford", "Uno", 2001, 75.50, "Prata", false);
uno.ligar();

uno.AumentarVelocidade();
uno.AumentarVelocidade();
uno.AumentarVelocidade();
uno.AumentarVelocidade();
uno.AumentarVelocidade();
uno.AumentarVelocidade();

uno.deligar();

uno.diminuirVelocidade();
uno.diminuirVelocidade();
uno.diminuirVelocidade();
uno.diminuirVelocidade();
uno.diminuirVelocidade();
uno.diminuirVelocidade();
uno.deligar();

uno.apresentar();