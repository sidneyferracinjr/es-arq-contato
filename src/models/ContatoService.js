class ContatoService {
    constructor() {
      this.contatos = [];
    }
  
    adicionarContato(contato) {
      this.contatos.push(contato);
    }
  
    removerContato(nome) {
      this.contatos = this.contatos.filter(contato => contato.nome !== nome);
    }
  
    listarContatos() {
      return this.contatos;
    }
  }

module.exports = ContatoService;