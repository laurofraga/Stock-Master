import { Component, OnInit } from '@angular/core';
import { Movimentacao } from '../models/movimentacao.model';

@Component({
  selector: 'app-movimentacoes-criar',
  templateUrl: './movimentacoes-criar.component.html',
  styleUrl: './movimentacoes-criar.component.css'
})
export class MovimentacoesCriarComponent {
  novaMovimentacao: Movimentacao = {
    id: 0,
    tipo: 'entrada',
    quantidade: 0,
    produtoId: 0,
    data: new Date(),
    fornecedorId: 0,
    funcionarioId: 0,
  };

  produtos = [
    { id: 1, nome: 'Produto A' },
    { id: 2, nome: 'Produto B' },
    { id: 3, nome: 'Produto C' },
  ];

  fornecedores = [
    { id: 1, nome: 'Fornecedor X' },
    { id: 2, nome: 'Fornecedor Y' },
  ];

  funcionarios = [
    { id: 1, nome: 'Funcionário A' },
    { id: 2, nome: 'Funcionário B' },
  ];
  constructor() {}

  ngOnInit(): void {}

  salvarMovimentacao() {
    console.log(this.novaMovimentacao);
  }
}