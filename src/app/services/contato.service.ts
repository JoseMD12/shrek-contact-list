import { Injectable } from '@angular/core';

interface Contato {
  id: string;
  nome: string;
  telefone: string;
}

@Injectable({
  providedIn: 'root',
})
export class ContatoService {
  constructor() {}

  addContact(contact: any) {
    console.log(contact);
  }
}
