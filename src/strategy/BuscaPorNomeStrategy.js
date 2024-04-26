class BuscaPorNomeStrategy extends IEstrategiaBusca {
    buscarContato(contatos, nome) {
        return contatos.find(contato => contato.getNome() === nome);
    }
}

module.exports = BuscaPorNomeStrategy;