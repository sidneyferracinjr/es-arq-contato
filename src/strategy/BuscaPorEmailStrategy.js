class BuscaPorEmailStrategy extends IEstrategiaBusca {
    buscarContato(contatos, email) {
        return contatos.find(contato => contato.getEmail() === email);
    }
}

module.exports = BuscaPorEmailStrategy;