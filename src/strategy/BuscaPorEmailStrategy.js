class BuscaPorEmailStrategy {
    constructor(buscaService) {
      this.buscaService = buscaService;
    }
  
    buscarContato(contatos, termo) {
      return this.buscaService.buscarContatoPorEmail(termo);
    }
}

module.exports = BuscaPorEmailStrategy;