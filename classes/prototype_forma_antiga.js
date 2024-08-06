function Conta(nomeCliente, saldoConta, tipoConta, limiteCreditoConta){
    this.nome = nomeCliente;
    this.saldo = saldoConta;
    this.tipo = tipoConta;
    this.limiteCredito = limiteCreditoConta;
    this.extrato = [];
}

Conta.prototype.depositar = function(valor){
    let saldoAtual = this.saldo;
    this.saldo += valor;
    this.extrato.push (`Depositado o valor de ${valor} com sucess, saldo anterior: ${saldoAtual}!`);
}

Conta.prototype.mostrarExtrato = function(){
    console.log(`Cliente: ${this.nome}\nConta: ${this.tipo}\nSaldo: ${this.saldo}\nExtrato:`);
    if (this.extrato.length === 0){
        console.log("Nenhuma movimentação");
        return;
    }
    for (let index = 0; index < this.extrato.length; index++){
        const registro = this.extrato[index];
        console.log(`\t${registro}`);
    }
}

let Conta1 = new Conta("Judity", 0, "Conta Salário", 0);
Conta1.depositar(600.99);
Conta1.depositar(1);
Conta1.depositar(1000.00);
Conta1.mostrarExtrato();
let conta2 = new Conta ("Victor com H", -501, "Conta Negativado", 50000);
conta2.mostrarExtrato();

