"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Emprestimo = void 0;
class Emprestimo {
    constructor(livro, usuario, dataEmprestimo, dataPrevistaDevolucao) {
        this.livro = livro;
        this.usuario = usuario;
        this.dataEmprestimo = dataEmprestimo;
        this.dataPrevistaDevolucao = dataPrevistaDevolucao;
    }
    exibir() {
        console.log("Livro " + this.livro);
        console.log("Usuario " + this.usuario);
    }
}
exports.Emprestimo = Emprestimo;
var DiaDaSemana;
(function (DiaDaSemana) {
    DiaDaSemana[DiaDaSemana["DOMINGO"] = 0] = "DOMINGO";
    DiaDaSemana[DiaDaSemana["SEGUNDA"] = 1] = "SEGUNDA";
    DiaDaSemana[DiaDaSemana["TERCA"] = 2] = "TERCA";
    DiaDaSemana[DiaDaSemana["QUARTA"] = 3] = "QUARTA";
    DiaDaSemana[DiaDaSemana["QUINTA"] = 4] = "QUINTA";
    DiaDaSemana[DiaDaSemana["SEXTA"] = 5] = "SEXTA";
    DiaDaSemana[DiaDaSemana["SABADO"] = 6] = "SABADO";
})(DiaDaSemana || (DiaDaSemana = {}));
