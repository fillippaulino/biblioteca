"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Livro = void 0;
class Livro {
    constructor(titulo, autor, categoria, disponobilidade) {
        this.titulo = titulo;
        this.autor = autor;
        this.disponobilidade = disponobilidade;
        this.categoria = categoria;
    }
    exibir() {
        console.log(" Titulo: " + this.titulo);
        console.log(" Autor: " + this.autor);
        console.log(" Categoria: " + this.categoria);
        console.log(" Disponibilidade: " + this.disponobilidade);
    }
    cadastrar() {
        console.log("Cadastrado com sucesso");
    }
    alterar() {
    }
    remover() {
    }
    listar() {
    }
    procurarPeloId(id) {
    }
}
exports.Livro = Livro;
