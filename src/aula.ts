import { Categoria } from "./domain/categoria";
import { Emprestimo } from "./domain/emprestimo";
import { Livro } from "./domain/livro";
import { Usuario } from "./domain/usuario";

var livro1: Livro = new Livro("Narnia", " Joao ", Categoria.FICCAO, 5);
var livro2: Livro = new Livro(" Desperte o seu ginte interior ", " pedro ", Categoria.FICCAO, 2)
livro2.exibir();
var usuario1: Usuario = new Usuario(" Fillip ",1, "Rua educação", "000021999")
var usuario2: Usuario = new Usuario(" nome ", 2, "endereco", "21555")
usuario1.exibir();
var emprestimo1: Emprestimo = new Emprestimo(livro1, usuario2, 14/3/2024,15/4/2024)
var emprestimo2: Emprestimo = new Emprestimo(livro2, usuario1, 20/5/2024, 5/6/2024)
