"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.editarEmprestimo = exports.listarEmprestimo = exports.removerEmprestimo = exports.cadastrarEmprestimo = void 0;
var leia = require("prompt-sync")();
function cadastrarEmprestimo() {
    let nome = leia(" Informe o nome ");
    let id = leia(" Informe o ID ");
    let dataEmpretimo = leia(" Informe a data");
    let devolucaoDoemprestimo = leia(" Data de devolução");
}
exports.cadastrarEmprestimo = cadastrarEmprestimo;
function removerEmprestimo() {
}
exports.removerEmprestimo = removerEmprestimo;
function listarEmprestimo() {
}
exports.listarEmprestimo = listarEmprestimo;
function editarEmprestimo() {
}
exports.editarEmprestimo = editarEmprestimo;
