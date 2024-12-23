import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import contatosJson from '../../data.json';
import { ContainerComponent } from '../../components/container/container.component';
import { HeaderComponent } from '../../components/header/header.component';
import { SeparatorComponent } from '../../components/separator/separator.component';
import { ContatoComponent } from '../../components/contato/contato.component';

interface Contato {
  id: string;
  nome: string;
  telefone: string;
}

@Component({
  selector: 'app-contact-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    ContainerComponent,
    HeaderComponent,
    SeparatorComponent,
    ContatoComponent,
    FormsModule,
  ],
  templateUrl: './contact-list.component.html',
  styleUrl: './contact-list.component.css',
})
export class ContactListComponent {
  contatos: Contato[] = contatosJson;

  filterByLetter(letter: string): Contato[] {
    return this.filterContatos().filter((contato) =>
      contato.nome.toUpperCase().startsWith(letter)
    );
  }

  textFilter: string = '';

  filterContatos(): Contato[] {
    console.log(this.textFilter);

    if (!this.textFilter) {
      return this.contatos;
    }
    const filteredContatos = this.contatos.filter((contato) => {
      return contato.nome
        .toUpperCase()
        .startsWith(this.textFilter.toUpperCase());
    });
    return filteredContatos;
  }

  alphabet = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ];
}
