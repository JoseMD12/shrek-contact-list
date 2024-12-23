import { Injectable } from '@angular/core';
import { Contato } from '../components/contato/contato';

@Injectable({
  providedIn: 'root',
})
export class ContatoService {
  constructor() {}

  addContact(contact: Contato) {
    console.log(contact);
  }
}
