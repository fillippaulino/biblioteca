"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.editarLivro = exports.removerLivro = exports.listarLivro = exports.cadastrarLivro = void 0;
const livro_1 = require("../domain/livro");
var leia = require("prompt-sync")();
function cadastrarLivro() {
    let nome = leia(" Informe o nome do livro: ");
    let nomeDoautor = leia(" Informe o nome do autor: ");
    let categoria = leia(" Informe a categoria (FICCAO, TERROR,  ROMANCE, DRAMA): ");
    let disponibilidade = leia(" Qua a disponibilidade: ");
    var livroAcadastrar = new livro_1.Livro(nome, nomeDoautor, categoria, disponibilidade);
    livroAcadastrar.exibir();
    livroAcadastrar.cadastrar();
}
exports.cadastrarLivro = cadastrarLivro;
function listarLivro() {
}
exports.listarLivro = listarLivro;
function removerLivro() {
}
exports.removerLivro = removerLivro;
function editarLivro() {
}
exports.editarLivro = editarLivro;
