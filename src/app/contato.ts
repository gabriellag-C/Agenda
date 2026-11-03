
export type TipoContato = 'AMIGO(A)' | 'IFRN' | 'TRABALHO' | 'FAMILIA' | 'OUTRO'

export class Contato {
    nome: string;
    email: string;
    aniversario: Date | string;
    telefone: number;
    tipo: TipoContato;

    constructor ( nome: string, email: string, aniversario: Date | string, telefone: number,
        tipo: TipoContato = 'AMIGO(A)') {
        this.nome = nome;
        this.email = email;
        this.aniversario = aniversario;    
        this.telefone = telefone;
        this.tipo = tipo;}
}
