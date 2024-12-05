import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movimentacao } from '../models/movimentacao.model';
import { Produto } from '../models/produto.model';
import { Funcionario } from '../models/funcionario.model';
import { Fornecedor } from '../models/fornecedor.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movimentacoes-criar',
  templateUrl: './movimentacoes-criar.component.html',
  styleUrl: './movimentacoes-criar.component.css'
})
export class MovimentacoesCriarComponent {
  movimentacao: Movimentacao = {
    tipo: 'entrada',
    quantidade: 0,
    produtoId: 0,
    data: new Date(),
    fornecedorId: undefined,
    funcionarioId: undefined,
  };
  produtos: Produto[] = [];
  funcionarios: Funcionario[] = [];
  fornecedores: Fornecedor[] = [];
  errorMessage: string = '';


  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    
    this.getProdutos();
    this.getFuncionarios();
    this.getFornecedores();
    
  }


  getProdutos(): void {
    this.http.get<Produto[]>('http://localhost:3000/produtos').subscribe(
      (data) => {
        this.produtos = data;
        console.log('Produtos recebidos:', data);
      },
      (error) => {
        console.error('Erro ao carregar produtos', error);
        this.errorMessage = 'Erro ao carregar produtos. Tente novamente.';
      }
    );
  }

  getFuncionarios(): void {
    this.http.get<Funcionario[]>('http://localhost:3000/funcionarios').subscribe(
      (data) => {
        this.funcionarios = data;
        console.log('Funcionários recebidos:', data);
      },
      (error) => {
        console.error('Erro ao carregar funcionários', error);
        this.errorMessage = 'Erro ao carregar funcionários. Tente novamente.';
      }
    );
  }

  getFornecedores(): void {
    this.http.get<Fornecedor[]>('http://localhost:3000/fornecedores').subscribe(
      (data) => {
        this.fornecedores = data;
        console.log('Fornecedores recebidos:', data);
      },
      (error) => {
        console.error('Erro ao carregar fornecedores', error);
        this.errorMessage = 'Erro ao carregar fornecedores. Tente novamente.';
      }
    );
  }

  criarMovimentacao(): void {
    
    if (this.movimentacao.quantidade == null || this.movimentacao.produtoId == null || this.movimentacao.funcionarioId == null || !this.movimentacao.data) {
      this.errorMessage = 'Todos os campos obrigatórios devem ser preenchidos!';
      return;
    }
    
   
   
    const produto = this.produtos.find(p => p.id === this.movimentacao.produtoId);
    if (!produto) {
      this.errorMessage = 'Produto não encontrado!';
      return;
    }

    if (this.movimentacao.tipo === 'entrada') {
      produto.quantidade += this.movimentacao.quantidade;
    } else if (this.movimentacao.tipo === 'saida') {
      if (produto.quantidade < this.movimentacao.quantidade) {
        this.errorMessage = 'Quantidade insuficiente em estoque!';
        return;
      }
      produto.quantidade -= this.movimentacao.quantidade;
    }

   

    this.http.put(`http://localhost:3000/produtos/${produto.id}`, produto).subscribe(
      () => {
        // Após atualizar o produto, cria a movimentação
        this.http.post('http://localhost:3000/movimentacoes', this.movimentacao).subscribe(
          () => {
            alert('Movimentação criada com sucesso!');
            this.router.navigate(['/movimentacoes']);
          },
          (error) => {
            console.error('Erro ao criar movimentação', error);
            this.errorMessage = 'Erro ao criar movimentação. Tente novamente.';
          }
        );
      },
      (error) => {
        console.error('Erro ao atualizar produto', error);
        this.errorMessage = 'Erro ao atualizar o produto. Tente novamente.';
      }
    );
  }

 
}



   