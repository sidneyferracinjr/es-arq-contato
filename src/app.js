const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const GerenciadorContatos = require('./models/GerenciadorContatos');
const Contato = require('./models/Contato');

const gerenciador = new GerenciadorContatos();

function exibirMenu() {
    console.log("\n===== Menu =====");
    console.log("1. Adicionar contato");
    console.log("2. Remover contato");
    console.log("3. Listar contatos");
    console.log("4. Buscar contato por nome");
    console.log("5. Sair");
    console.log("=================\n");
}

function adicionarContato() {
    rl.question("Nome: ", (nome) => {
        rl.question("Telefone: ", (telefone) => {
            rl.question("Email: ", (email) => {
                const novoContato = new Contato(nome, telefone, email);
                gerenciador.adicionarContato(novoContato);
                console.log(`Contato ${nome} adicionado com sucesso.`);
                exibirMenu();
                selecionarOpcao();
            });
        });
    });
}

function removerContato() {
    rl.question("Nome do contato a ser removido: ", (nome) => {
        gerenciador.removerContato(nome);
        console.log(`Contato ${nome} removido com sucesso.`);
        exibirMenu();
        selecionarOpcao();
    });
}

function listarContatos() {
    const contatos = gerenciador.listarContatos();
    if (contatos.length === 0) {
        console.log("Nenhum contato cadastrado.");
    } else {
        console.log("Lista de contatos:");
        contatos.forEach(contato => console.log(contato));
    }
    exibirMenu();
    selecionarOpcao();
}

function buscarContato() {
    rl.question("Nome do contato a ser buscado: ", (nome) => {
        const contato = gerenciador.buscarContatoPorNome(nome);
        if (contato) {
            console.log("Contato encontrado:");
            console.log(contato);
        } else {
            console.log("Contato não encontrado.");
        }
        exibirMenu();
        selecionarOpcao();
    });
}

function selecionarOpcao() {
    rl.question("Selecione uma opção: ", (opcao) => {
        switch (opcao) {
            case '1':
                adicionarContato();
                break;
            case '2':
                removerContato();
                break;
            case '3':
                listarContatos();
                break;
            case '4':
                buscarContato();
                break;
            case '5':
                rl.close();
                break;
            default:
                console.log("Opção inválida. Por favor, selecione uma opção válida.");
                exibirMenu();
                selecionarOpcao();
        }
    });
}

exibirMenu();
selecionarOpcao();

rl.on('close', () => {
    console.log("Saindo...");
    process.exit(0);
});