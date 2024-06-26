
import { Livro } from "./livro";
import { Usuario } from "./usuario";

export class Emprestimo{
    livro: Livro;
    usuario: Usuario;
    dataEmprestimo: number;
    dataPrevistaDevolucao: number;
    constructor(livro: Livro, usuario: Usuario, dataEmprestimo: number, dataPrevistaDevolucao:number) {
        this.livro=livro;
        this.usuario = usuario;
        this.dataEmprestimo = dataEmprestimo;
        this.dataPrevistaDevolucao = dataPrevistaDevolucao;
    }
    exibir(){
        console.log("Livro " + this.livro);
        console.log("Usuario " + this.usuario);
    }
    cadastrar() {
        console.log("Emprestimo cadastrado com sucesso")
    }
    alterar(){
        console.log("Emprestimo alterado com sucesso")
    }
    remover() {
        console.log("Emprestimo removido com sucesso")
    }
    listar() {

    }
    procurarPeloemprestimo() {

    }
}

enum DiaDaSemana{
	DOMINGO, 
    SEGUNDA, 
    TERCA, 
    QUARTA, 
    QUINTA, 
    SEXTA,
    SABADO,
}

