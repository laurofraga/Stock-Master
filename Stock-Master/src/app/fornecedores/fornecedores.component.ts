import { Component } from '@angular/core';

@Component({
  selector: 'app-fornecedores',
  templateUrl: './fornecedores.component.html',
  styleUrl: './fornecedores.component.css'
})
export class FornecedoresComponent {
  fornecedores = [
    { nome: 'Fornecedor A', contato: '1234-5678', endereco: 'Rua A, 123' },
    { nome: 'Fornecedor B', contato: '9876-5432', endereco: 'Rua B, 456' },
    { nome: 'Fornecedor C', contato: '1111-2222', endereco: 'Rua C, 789' },
  ];

  constructor() {}

  ngOnInit(): void {}

}
