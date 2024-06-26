
import { Categoria } from "./categoria";
export  class Livro{

    titulo: string;
    autor: string;
    categoria: Categoria;
    disponobilidade: number;
    constructor(titulo: string,  autor: string, categoria: Categoria, disponobilidade: number){
        this.titulo = titulo;
        this.autor = autor;
        this.disponobilidade = disponobilidade;
        this.categoria = categoria;
    }
    exibir(){
        console.log(" Titulo: " + this.titulo);
        console.log(" Autor: " + this.autor);
        console.log(" Categoria: " + this.categoria);
        console.log(" Disponibilidade: " + this.disponobilidade);
    }
    cadastrar() {
        console.log("Livro cadastrado com sucesso")
    }
    alterar(){
        console.log("Livro alterado com sucesso")
    }
    remover() {
        console.log("Livro removido com sucesso")
    }
    static listar() {

    }
    static procurarPelolivro(Livro:string): Livro|null {
        return null
    }
}
