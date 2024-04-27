class BuscaService {
    constructor(contatoService) {
      this.contatoService = contatoService;
    }
  
    buscarContatoPorNome(nome) {
      return this.contatoService.listarContatos().filter(contato => contato.nome === nome);
    }
  
    buscarContatoPorEmail(email) {
      return this.contatoService.listarContatos().filter(contato => contato.email === email);
    }
}

module.exports = BuscaService;