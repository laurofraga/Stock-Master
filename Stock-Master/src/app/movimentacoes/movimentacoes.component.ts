import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Movimentacao } from '../models/movimentacao.model';

@Component({
  selector: 'app-movimentacoes',
  templateUrl: './movimentacoes.component.html',
  styleUrls: ['./movimentacoes.component.css']
})
export class MovimentacoesComponent {
 movimentacoes: Movimentacao[] = [];
 movimentacoesEntradas: Movimentacao[] = [];
 movimentacoesSaidas: Movimentacao[] = [];
 fornecedores: { id: number; nome: string }[] = [];
 funcionarios: { id: number; nome: string }[] = [];
 

 ngOnInit(): void{
  this.carregarMovimentacoes();
 }
  carregarMovimentacoes() {
    this.fornecedores = [
      { id: 1, nome: 'Fornecedor A' },
      { id: 2, nome: 'Fornecedor B' },
    ];

    this.funcionarios = [
      { id: 1, nome: 'Funcionário X' },
      { id: 3, nome: 'Funcionário Y' },
    ];
    this.movimentacoes = [
      { id: 1, tipo: 'entrada', quantidade: 10, produtoId: 1, fornecedorId: 2, data: new Date() },
      { id: 2, tipo: 'saida', quantidade: 5, produtoId: 2, funcionarioId: 3, data: new Date() },
    ];
    this.movimentacoesEntradas = this.movimentacoes.filter((m) => m.tipo === 'entrada');
    this.movimentacoesSaidas = this.movimentacoes.filter((m) => m.tipo === 'saida');

    
  }

  obterNomeResponsavel(movimentacao: Movimentacao): string {
    if (movimentacao.fornecedorId) {
      const fornecedor = this.fornecedores.find((f) => f.id === movimentacao.fornecedorId);
      return fornecedor ? fornecedor.nome : 'Fornecedor não encontrado';
    }

    if (movimentacao.funcionarioId) {
      const funcionario = this.funcionarios.find((f) => f.id === movimentacao.funcionarioId);
      return funcionario ? funcionario.nome : 'Funcionário não encontrado';
    }

    return 'Responsável não especificado';
  }

  constructor(private router: Router) {}

  irParaCriarMovimentacao() {
    this.router.navigate(['/movimentacao-criar']);
  }
}