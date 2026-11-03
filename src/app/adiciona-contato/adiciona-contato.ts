import { Component } from '@angular/core';
import { Contato, TipoContato } from '../contato';

@Component({
  imports: [],
  selector: 'app-adiciona-contato',
  styleUrl: './adiciona-contato.scss',
  templateUrl: './adiciona-contato.html',
})

interface OpcoesSelect {
  id: number 
  value: TipoContato
}

export class AdicionaContato {
  SELECT_TIPO: OpcoesSelect[] = [
    {id: 1, value: 'AMIGO(A)'},
    {id: 2, value: 'IFRN'},
    {id: 3, value: 'TRABALHO'},
    {id: 4, value: 'FAMILIA'},
    {id: 5, value: 'OUTRO'}
  ]

  adicionar(nome: string, email: string, aniversario: Date , tel: number, tipo: string){
    let contato = new Contato (nome, email, aniversario, tel, tipo as TipoContato);

  }

}
