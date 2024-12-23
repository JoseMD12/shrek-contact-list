import { Component, OnInit } from '@angular/core';
import { ContainerComponent } from '../../components/container/container.component';
import { SeparatorComponent } from '../../components/separator/separator.component';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    ContainerComponent,
    SeparatorComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css',
})
export class ContactFormComponent implements OnInit {
  contactForm!: FormGroup;

  ngOnInit() {
    this.contactForm = new FormGroup({
      name: new FormControl('', Validators.required),
      phone: new FormControl('', [
        Validators.required,
        // Validators.pattern(
        //   '(?:^([0]?[1-9]{2})|^[0]?[1-9]{2}[.-s]?)[9]?[1-9]d{3}[.-s]?d{4}$'
        // ),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      birthday: new FormControl('', Validators.required),
      linkedin: new FormControl('', Validators.required),
      github: new FormControl(''),
      observations: new FormControl(''),
    });
  }

  formLabels: {
    label: string;
    type: string;
    id: string;
    placeholder: string;
  }[] = [
    {
      label: 'Nome',
      type: 'text',
      id: 'name',
      placeholder: 'Digite o nome do contato',
    },
    {
      label: 'Telefone',
      type: 'tel',
      id: 'phone',
      placeholder: 'Digite o telefone do contato',
    },
    {
      label: 'Email',
      type: 'email',
      id: 'email',
      placeholder: 'Digite o email do contato',
    },
    {
      label: 'Aniversário',
      type: 'date',
      id: 'birthday',
      placeholder: 'Digite o aniversário do contato',
    },
    {
      label: 'URL do Linkedin',
      type: 'url',
      id: 'linkedin',
      placeholder: 'Digite o Linkedin do contato',
    },
    {
      label: 'URL do GitHub',
      type: 'url',
      id: 'github',
      placeholder: 'Digite o GitHub do contato',
    },
    {
      label: 'Observações',
      type: 'textarea',
      id: 'observations',
      placeholder: 'Digite as observações do contato',
    },
  ];

  salvarContato() {
    if (!this.contactForm.valid) {
      return;
    }
    console.log(this.contactForm.value);
  }
}
