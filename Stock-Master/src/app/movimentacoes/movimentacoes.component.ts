import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Movimentacao } from '../models/movimentacao.model';
import { Funcionario } from '../models/funcionario.model';
import { Fornecedor } from '../models/fornecedor.model';
import { Produto } from '../models/produto.model';  // Importando o modelo de produto

@Component({
  selector: 'app-movimentacoes',
  templateUrl: './movimentacoes.component.html',
  styleUrls: ['./movimentacoes.component.css']
})
export class MovimentacoesComponent implements OnInit {
  movimentacoes: Movimentacao[] = [];
  movimentacoesEntradas: Movimentacao[] = [];
  movimentacoesSaidas: Movimentacao[] = [];
  fornecedores: Fornecedor[] = [];
  funcionarios: Funcionario[] = [];
  produtos: Produto[] = [];  // Variável para armazenar os produtos

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.carregarMovimentacoes();
  }

  
  carregarMovimentacoes() {
    
    this.http.get<Fornecedor[]>('http://localhost:3000/fornecedores').subscribe(
      (data) => {
        this.fornecedores = data;
      },
      (error) => {
        console.error('Erro ao carregar fornecedores', error);
      }
    );

    this.http.get<Funcionario[]>('http://localhost:3000/funcionarios').subscribe(
      (data) => {
        this.funcionarios = data;
      },
      (error) => {
        console.error('Erro ao carregar funcionários', error);
      }
    );

    this.http.get<Produto[]>('http://localhost:3000/produtos').subscribe(
      (data) => {
        console.log('Produtos carregados:', data);  
        this.produtos = data;  
      },
      (error) => {
        console.error('Erro ao carregar produtos', error);
      }
    );

    
    this.http.get<Movimentacao[]>('http://localhost:3000/movimentacoes').subscribe(
      (data) => {
        this.movimentacoes = data;
        this.movimentacoesEntradas = this.movimentacoes.filter((m) => m.tipo == 'entrada');
        this.movimentacoesSaidas = this.movimentacoes.filter((m) => m.tipo == 'saida');
      },
      (error) => {
        console.error('Erro ao carregar movimentações', error);
      }
    );
  }

  // Função para obter o nome do produto com base no produtoId
  obterNomeProduto(produtoId: number) {
    const produto = this.produtos.find((p) => (p.id) == produtoId);
    return produto ? produto.nome : 'Produto não encontrado';
  }

  // Função para obter nome do responsável (funcionário ou fornecedor)
  obterNomeResponsavel(movimentacao: Movimentacao){
    if (movimentacao.fornecedorId) {
      const fornecedor = this.fornecedores.find((f) => f.id == movimentacao.fornecedorId);
      return fornecedor ? fornecedor.nome : 'Fornecedor não encontrado';
    }

    if (movimentacao.funcionarioId) {
      const funcionario = this.funcionarios.find((f) => f.id == movimentacao.funcionarioId);
      return funcionario ? funcionario.nome : 'Funcionário não encontrado';
    }

    return 'Responsável não especificado';
  }

  // Redireciona para a tela de criação de movimentação
  irParaCriarMovimentacao() {
    this.router.navigate(['/movimentacao-criar']);
  }
}
