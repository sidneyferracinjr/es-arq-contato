class Contato {
  constructor(nome, telefone, email) {
      this.nome = nome;
      this.telefone = telefone;
      this.email = email;
  }

  getNome() {
      return this.nome;
  }

  setNome(nome) {
      this.nome = nome;
  }

  getTelefone() {
      return this.telefone;
  }

  setTelefone(telefone) {
      this.telefone = telefone;
  }

  getEmail() {
      return this.email;
  }

  setEmail(email) {
      this.email = email;
  }

  toString() {
      return `${this.nome} - ${this.telefone} - ${this.email}`;
  }
}

module.exports = Contato;