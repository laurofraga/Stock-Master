import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Produto } from '../models/produto.model';
import { Fornecedor } from '../models/fornecedor.model';


@Component({
  selector: 'app-editar-produto',
  templateUrl: './editar-produto.component.html',
  styleUrl: './editar-produto.component.css'
})
export class EditarProdutoComponent implements OnInit {
  produto: Produto = {
    nome: '',
    quantidade: 0,
    preco: 0,
    minStock: 0,
    fornecedorId: 0,
  };
  fornecedores: Fornecedor[] = [];

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.carregarProduto(id);
    this.carregarFornecedores();
    
  } 

  carregarProduto(id: number): void {
    if (id) {
      this.http.get<Produto>(`http://localhost:3000/produtos/${id}`).subscribe(
        (produto) => {
          this.produto = produto;
        },
        (error) => {
          console.error('Erro ao carregar o produto:', error);
        }
      );
    } else {
      console.error('ID do produto não fornecido!');
    }
  }
  carregarFornecedores(): void {
    this.http.get<Fornecedor[]>('http://localhost:3000/fornecedores').subscribe(
      (fornecedores) => {
        this.fornecedores = fornecedores;
      },
      (error) => {
        console.error('Erro ao carregar fornecedores:', error);
      }
    );
  }

  salvarProduto(): void {
    if (this.produto) {
      // Enviando a requisição PUT para atualizar o produto
      this.http.put(`http://localhost:3000/produtos/${this.produto.id}`, this.produto).subscribe(
        () => {
          // Redireciona de volta para a lista de produtos após a edição
          this.router.navigate(['/produtos']);
        },
        (error) => {
          console.error('Erro ao salvar produto:', error);
        }
      );
    }
  }
}


