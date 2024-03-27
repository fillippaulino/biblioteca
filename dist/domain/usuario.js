"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usuario = void 0;
class Usuario {
    constructor(nome, id, endereco, telefone) {
        this.nome = nome;
        this.id = id;
        this.endereco = endereco;
        this.telefone = telefone;
    }
    exibir() {
        console.log(" Nome: " + this.nome);
        console.log(" Endereço: " + this.endereco);
        console.log(" Telefone: " + this.telefone);
    }
    cadastrar() {
        console.log("Usuário cadastrado com sucesso.");
    }
}
exports.Usuario = Usuario;
