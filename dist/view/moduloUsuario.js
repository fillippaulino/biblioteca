"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removerUsuario = exports.alterarUsuario = exports.listarUsuario = exports.cadastraUsuario = void 0;
const usuario_1 = require("../domain/usuario");
let leia = require("prompt-sync")();
function cadastraUsuario() {
    let nome = leia(" Informe o nome: ");
    let id = leia(" Informe o ID: ");
    let endereco = leia(" Informe o endereço: ");
    let telefone = leia(" Informe o telefone: ");
    var usuarioAcadastrar = new usuario_1.Usuario(nome, id, endereco, telefone);
    usuarioAcadastrar.exibir();
    usuarioAcadastrar.cadastrar();
}
exports.cadastraUsuario = cadastraUsuario;
function listarUsuario() {
}
exports.listarUsuario = listarUsuario;
function alterarUsuario() {
}
exports.alterarUsuario = alterarUsuario;
function removerUsuario() {
}
exports.removerUsuario = removerUsuario;
