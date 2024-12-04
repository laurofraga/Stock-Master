import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-funcionarios',
  templateUrl: './funcionarios.component.html',
  styleUrl: './funcionarios.component.css'
})
export class FuncionariosComponent implements OnInit {
  funcionarios: any[] = [
    { id: 1, nome: 'João Silva', email: 'joao.silva@example.com' },
    { id: 2, nome: 'Maria Oliveira', email: 'maria.oliveira@example.com' },
  ];

  constructor() {}

  ngOnInit(): void {}
}