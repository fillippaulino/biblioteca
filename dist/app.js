"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const moduloEmprestimo_1 = require("./view/moduloEmprestimo");
const moduloLivro_1 = require("./view/moduloLivro");
const moduloUsuario_1 = require("./view/moduloUsuario");
var leia = require('prompt-sync')();
let opc = "";
while (opc != 's') {
    opc = leia(" Em que modo vc gostaria de entrar: u(Para cliente), E(Emprestimo), L(Livro), (S) sair.");
    opc = opc.toLowerCase();
    if (opc == "u") {
        console.log(" Você entrol no modulo de cliente. ");
        moduloUsuario();
    }
    else if (opc == "e") {
        console.log(" Você entrol no modulo de emprestimo. ");
        moduloEmprestimo();
    }
    else if (opc == "l") {
        console.log(" Você entrou no modulo de livro. ");
        moduloLivro();
    }
    else if (opc == "s") {
        console.log(" Saindo... ");
    }
    else {
        console.log(" Opção invalida.");
    }
}
function moduloUsuario() {
    var opcUsuario = leia(" Digite C (para cadastrar) L (para listar) E (para editar) R (para remover) e s (para sair) ");
    opcUsuario = opcUsuario.toUpperCase();
    if (opcUsuario == "C") {
        console.log(" Você entrol no modulo de cadastro: ");
        (0, moduloUsuario_1.cadastraUsuario)();
    }
    else if (opcUsuario == "L") {
        console.log(" Vpcê entrou no modulo de livro:");
        (0, moduloUsuario_1.listarUsuario)();
    }
    else if (opcUsuario == "E") {
        console.log(" Você entrol no modulo de edição. ");
        (0, moduloUsuario_1.alterarUsuario)();
    }
    else if (opcUsuario == "R") {
        console.log(" Você entrol em remover. ");
        (0, moduloUsuario_1.removerUsuario)();
    }
    else if (opcUsuario == "S") {
        console.log(" Sair. ");
        return;
    }
    else {
        console.log(" Opção Invalida. ");
    }
    moduloUsuario();
}
function moduloLivro() {
    var opcLivro = leia(" Digite C (para cadastrar) L (para listar) E (para editar) R (para remover) e s (para sair) ");
    opcLivro = opcLivro.toUpperCase();
    if (opcLivro == "C") {
        console.log(" Você entrol no modulo de cadastro: ");
        (0, moduloLivro_1.cadastrarLivro)();
    }
    else if (opcLivro == "L") {
        console.log(" Vpcê entrou no modulo de livro:");
        (0, moduloLivro_1.listarLivro)();
    }
    else if (opcLivro == "E") {
        console.log(" Você entrol no modulo de edição. ");
        (0, moduloLivro_1.editarLivro)();
    }
    else if (opcLivro == "R") {
        console.log(" Você entrol em remover. ");
        (0, moduloLivro_1.removerLivro)();
    }
    else if (opcLivro == "S") {
        console.log(" Sair. ");
        return;
    }
    else {
        console.log(" Opção Invalida. ");
    }
    moduloLivro();
}
function moduloEmprestimo() {
    var opcEmp = leia(" Digite C (para cadastrar) L (para listar) E (para editar) R (para remover) e s (para sair) ");
    opcEmp = opcEmp.toUpperCase();
    if (opcEmp == "C") {
        console.log(" Você entrol no modulo de cadastro: ");
        (0, moduloEmprestimo_1.cadastrarEmprestimo)();
    }
    else if (opcEmp == "L") {
        console.log(" Vpcê entrou no modulo de livro:");
        (0, moduloEmprestimo_1.listarEmprestimo)();
    }
    else if (opcEmp == "E") {
        console.log(" Você entrol no modulo de edição. ");
        (0, moduloEmprestimo_1.editarEmprestimo)();
    }
    else if (opcEmp == "R") {
        console.log(" Você entrol em remover. ");
        (0, moduloEmprestimo_1.removerEmprestimo)();
    }
    else if (opcEmp == "S") {
        console.log(" Sair. ");
        return;
    }
    else {
        console.log(" Opção Invalida. ");
    }
    moduloEmprestimo();
}
