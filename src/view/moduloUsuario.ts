import { Usuario } from "../domain/usuario";
let leia = require("prompt-sync")();
export function cadastraUsuario(){
    let nome: string = leia(" Informe o nome: ");
    let id: number = leia(" Informe o ID: ");
    let endereco: string = leia(" Informe o endereço: ");
    let telefone: string = leia(" Informe o telefone: ");
    var usuarioAcadastrar: Usuario = new Usuario(nome, id,endereco, telefone);
    usuarioAcadastrar.exibir();
    usuarioAcadastrar.cadastrar();
}
export function listarUsuario(){

}
export function alterarUsuario(){

}
export function removerUsuario(){

}