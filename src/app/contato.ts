export class Contato {
    nome: string;
    telefone: string;
    email: string;
    aniversario: Date;
    tipo: string;

    constructor(
        nome: string,
        telefone: string,
        email: string,
        aniversario: Date,
        tipo: string
    )
    {
        this.nome = nome;
        this.telefone = telefone;
        this.email = email;
        this.aniversario = aniversario;
        this.tipo = tipo;

    }
    get nome(): string {
        return this.nome;
    }
    get telefone(): string{
        return this.telefone;
    }
    get email(): string{
        return this.email;
    }
    get aniversario(): Date {
        return this.aniversario;
    }
    get tipo(): string{
        return this.tipo
    }
    set nome(value: string) {
        this.nome = value;
    }

    set telefone(value: string) {
        this.telefone = value;
    }

    set email(value: string) {
        this.email = value;
    }

    set aniversario(value: Date | string) {
        this.aniversario = value;
    }

    set tipo(value: TipoContato | string) {
        this.tipo = value;
    }
}
