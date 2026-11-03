import { Component } from '@angular/core';
import { Contato, TipoContato } from '../contato';

interface OpcoesSelect {
  id: number 
  value: TipoContato
}

@Component({
  imports: [],
  selector: 'app-adiciona-contato',
  styleUrl: './adiciona-contato.scss',
  templateUrl: './adiciona-contato.html',
})

export class AdicionaContato {
  contatos: Contato[] = []

  SELECT_TIPO: OpcoesSelect[] = [
    {id: 1, value: 'AMIGO(A)'},
    {id: 2, value: 'IFRN'},
    {id: 3, value: 'TRABALHO'},
    {id: 4, value: 'FAMILIA'},
    {id: 5, value: 'OUTRO'}
  ]

  adicionar(nome: string, email: string, aniversario: Date | string , tel: string, tipo: string){
    const numTel = Number(tel);
    let contato = new Contato (nome, email, aniversario, numTel,  tipo as TipoContato);
   this.contatos.push(contato);
  }

}