class GerenciadorContatos {

    constructor(estrategiaBusca) {
        this.contatos = [];
        this.estrategiaBusca = estrategiaBusca;
    }

    adicionarContato(contato) {
        this.contatos.push(contato);
    }

    removerContato(nome) {
        this.contatos = this.contatos.filter(contato => contato.getNome() !== nome);
    }

    listarContatos() {
        return this.contatos.map(contato => contato.toString());
    }

    buscarContato(termo) {
        return this.estrategiaBusca.buscarContato(this.contatos, termo);
    }
}

module.exports = GerenciadorContatos;