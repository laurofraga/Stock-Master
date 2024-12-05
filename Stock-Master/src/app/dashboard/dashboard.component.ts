import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Produto } from '../models/produto.model';
import { Movimentacao } from '../models/movimentacao.model';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  produtos: Produto[] = [];
  movimentacoes: Movimentacao[] = [];
  produtosBaixaQuantidade: Produto[] = [];
  movimentacoesRecentesLista: any[] = [];
  totalProdutos: number = 0;
  movimentacoesRecentes: number = 0;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.carregarDados();
  }
  

  carregarDados() {
    // Carregar produtos e movimentações
    this.http.get<Produto[]>('http://localhost:3000/produtos').subscribe(
      (produtos) => {
        this.produtos = produtos;
        console.log('Produtos:', this.produtos); // Adicionando log
        this.totalProdutos = produtos.length;
        this.produtosBaixaQuantidade = produtos.filter(
          (produto) => produto.quantidade < produto.minStock
        );
        
      },
      (error) => {
        console.error('Erro ao carregar produtos', error);
      }
    );

    this.http.get<Movimentacao[]>('http://localhost:3000/movimentacoes').subscribe(
      (movimentacoes) => {
        this.movimentacoes = movimentacoes;
        console.log('Movimentações:', this.movimentacoes); // Adicionando log
        this.movimentacoesRecentes = movimentacoes.length;
        // Filtrando as 5 últimas movimentações
        this.movimentacoesRecentesLista = movimentacoes
          .sort((a, b) => new Date(b.data).getTime() - new Date(a.data).getTime())
          .slice(0, 5)
          .map((mov) => ({
            produto: this.obterNomeProduto(mov.produtoId),
            acao: mov.tipo === 'entrada' ? 'Entrada' : 'Saída',
            data: mov.data
          }));
      
      },
      (error) => {
        console.error('Erro ao carregar movimentações', error);
      }
    );
  }


  obterNomeProduto(produtoId: number): string {
    const produto = this.produtos.find((p) => p.id == produtoId);
    return produto ? produto.nome : 'Produto não encontrado';
  }
}
