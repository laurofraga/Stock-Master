import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Produto } from '../models/produto.model';
import { Fornecedor } from '../models/fornecedor.model';


@Component({
  selector: 'app-criar-produto',
  templateUrl: './criar-produto.component.html',
  styleUrl: './criar-produto.component.css'
})
export class CriarProdutoComponent {
  produto: Produto = {
    nome: '',
    quantidade: 0,
    preco: 0,
    minStock: 0,
    fornecedorId: 0
  };
  fornecedores: Fornecedor[] = [];
  errorMessage: string = '';

  constructor(private http: HttpClient, private router: Router) {}
  ngOnInit(): void {
    this.getFornecedores();  // Carrega os fornecedores ao iniciar o componente
  }

  getFornecedores(): void {
    this.http.get<Fornecedor[]>('http://localhost:3000/fornecedores').subscribe(
      (data) => {
        this.fornecedores = data; // Armazena a lista de fornecedores
        console.log('Fornecedores recebidos:', data);
      },
      (error) => {
        console.error('Erro ao carregar fornecedores', error);
        
      }
    );
  }

  // Método para criar um novo produto
  criarProduto(): void {
    if (!this.produto.nome || this.produto.quantidade <= 0 || this.produto.preco <= 0 || this.produto.minStock < 0 || this.produto.fornecedorId <= 0) {
      this.errorMessage = 'Todos os campos são obrigatórios e valores inválidos não são aceitos!';
      return;
    }

    this.http.post('http://localhost:3000/produtos', this.produto).subscribe(
      () => {
        alert('Produto criado com sucesso!');
        this.router.navigate(['/produtos']);
      },
      (error) => {
        this.errorMessage = 'Erro ao criar produto. Tente novamente.';
        console.error(error);
      }
    );
  }
}

