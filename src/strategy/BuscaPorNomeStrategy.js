class BuscaPorNomeStrategy {
    constructor(buscaService) {
      this.buscaService = buscaService;
    }
  
    buscarContato(contatos, termo) {
      return this.buscaService.buscarContatoPorNome(termo);
    }
}

module.exports = BuscaPorNomeStrategy;