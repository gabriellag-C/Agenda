import { Component } from '@angular/core';
import { Contato } from '../contato';

@Component({
  imports: [],
  selector: 'app-adiciona-contato',
  styleUrl: './adiciona-contato.scss',
  templateUrl: './adiciona-contato.html',
})
export class AdicionaContato {
  contatos: Contato[] = []

  nome: string = '';
  telefone: string = '';
  email: string = '';
  aniversario = string = '';
  tipo: string = '';

  adicionarContato(): void {
    if (this.nome && this.telefone && this.email) {
      const novoContato = new Contato (
        this.nome,
        this.telefone,
        this.email,
        this.aniversario,
        this.tipo
      );

      this.contatos.push(novoContato);
    }
  }


}
