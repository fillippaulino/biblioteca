import { Categoria } from "../domain/categoria";
import { Livro } from "../domain/livro";
var leia = require("prompt-sync")();
export function cadastrarLivro(){
    let nome: string = leia(" Informe o nome do livro: ")
    let nomeDoautor: string = leia(" Informe o nome do autor: ")
    let categoria: Categoria = leia(" Informe a categoria (FICCAO, TERROR,  ROMANCE, DRAMA): ");
    let disponibilidade: number = leia(" Qua a disponibilidade: ")
    var livroAcadastrar: Livro = new Livro(nome, nomeDoautor, categoria, disponibilidade);
    livroAcadastrar.exibir();
    livroAcadastrar.cadastrar();
}
export function listarLivro(){
    
}
export function removerLivro(){
    
}
export function editarLivro(){
    
}
