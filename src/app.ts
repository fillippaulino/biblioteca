import { cadastrarEmprestimo, editarEmprestimo, listarEmprestimo, removerEmprestimo } from "./view/moduloEmprestimo";
import { cadastrarLivro, editarLivro, listarLivro, removerLivro } from "./view/moduloLivro";
import { alterarUsuario, cadastraUsuario, listarUsuario, removerUsuario } from "./view/moduloUsuario";

var leia = require('prompt-sync')();
let opc="";
while(opc != 's'){
    opc = leia(" Em que modo vc gostaria de entrar: u(Para cliente), E(Emprestimo), L(Livro), (S) sair.")
    opc = opc.toLowerCase();
    if(opc== "u"){
        console.log(" Você entrol no modulo de cliente. ")
        moduloUsuario();
    }else if(opc == "e"){
        console.log(" Você entrol no modulo de emprestimo. ")
        moduloEmprestimo();
    }else if(opc == "l"){
        console.log(" Você entrou no modulo de livro. ")
        moduloLivro();
    }else if(opc == "s"){
        console.log(" Saindo... ")
    }else{
        console.log(" Opção invalida.")
    }
}
function moduloUsuario(){
    var opcUsuario = leia(" Digite C (para cadastrar) L (para listar) E (para editar) R (para remover) e s (para sair) ");
    opcUsuario = opcUsuario.toUpperCase();
    if(opcUsuario == "C"){
        console.log(" Você entrol no modulo de cadastro: ");
        cadastraUsuario();
    }else if(opcUsuario == "L"){
        console.log(" Vpcê entrou no modulo de livro:");
        listarUsuario();
    }else if(opcUsuario == "E"){
        console.log(" Você entrol no modulo de edição. ");
        alterarUsuario();
    }else if(opcUsuario == "R"){
        console.log(" Você entrol em remover. ");
        removerUsuario();
    }else if(opcUsuario == "S"){
        console.log(" Sair. ")
        return;
    }else{
        console.log(" Opção Invalida. ");
    }
    moduloUsuario();
}
function moduloLivro(){
    var opcLivro = leia(" Digite C (para cadastrar) L (para listar) E (para editar) R (para remover) e s (para sair) ");
    opcLivro = opcLivro.toUpperCase();
    if(opcLivro == "C"){
        console.log(" Você entrol no modulo de cadastro: ");
        cadastrarLivro();
    }else if(opcLivro == "L"){
        console.log(" Vpcê entrou no modulo de livro:");
        listarLivro();
    }else if(opcLivro == "E"){
        console.log(" Você entrol no modulo de edição. ")
        editarLivro();
    }else if(opcLivro == "R"){
        console.log(" Você entrol em remover. ");
        removerLivro();
    }else if(opcLivro == "S"){
        console.log(" Sair. ");
        return;
    }else{
        console.log(" Opção Invalida. ");
    }
    moduloLivro();
}
function moduloEmprestimo(){
    var opcEmp = leia(" Digite C (para cadastrar) L (para listar) E (para editar) R (para remover) e s (para sair) ");
    opcEmp = opcEmp.toUpperCase();
    if(opcEmp == "C"){
        console.log(" Você entrol no modulo de cadastro: ");
        cadastrarEmprestimo();
    }else if(opcEmp == "L"){
        console.log(" Vpcê entrou no modulo de livro:");
        listarEmprestimo();
    }else if(opcEmp == "E"){
        console.log(" Você entrol no modulo de edição. ");
        editarEmprestimo()
    }else if(opcEmp == "R"){
        console.log(" Você entrol em remover. ");
        removerEmprestimo();5
    }else if(opcEmp == "S"){
        console.log(" Sair. ");
        return;
    }else{
        console.log(" Opção Invalida. ")
    }
    moduloEmprestimo();
}
