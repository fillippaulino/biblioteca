
export  class Usuario{

    nome: string;
    id: number;
    endereco: string;
    telefone: string;
    constructor(nome: string, id:number,  endereco: string, telefone: string){
        this.nome = nome;
        this.id = id;
        this.endereco = endereco;
        this.telefone = telefone;
    }
    exibir(){
        console.log(" Nome: " + this.nome);
        console.log(" Endereço: " + this.endereco);
        console.log(" Telefone: " + this.telefone);
    }
    cadastrar() {
        console.log("Usuário cadastrado com sucesso.")
    }
    alterar(){

    }
    remover() {

    }
    static listar(nome:string):Usuario[] {
        return [];
    }
    static procurarPeloId(id:number):Usuario|null {
        return null;
    }
}

