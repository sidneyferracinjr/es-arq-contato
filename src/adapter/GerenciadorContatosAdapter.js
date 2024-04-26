class GerenciadorContatosAdapter extends IContatoService {
    constructor(gerenciador) {
        super();
        this.gerenciador = gerenciador;
    }

    adicionarContato(nome, telefone, email) {
        const novoContato = new Contato(nome, telefone, email);
        this.gerenciador.adicionarContato(novoContato);
        console.log('Contato ${nome} adicionado com sucesso.');
    }

    removerContato(nome) {
        this.gerenciador.removerContato(nome);
        console.log('Contato ${nome} removido com sucesso.');
    }
}

module.exports = GerenciadorContatosAdapter;