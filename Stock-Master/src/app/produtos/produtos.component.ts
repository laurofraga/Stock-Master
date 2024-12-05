import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Produto } from '../models/produto.model';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {
  searchText: string = '';
  produtos: Produto[] = [];
  produtosEstoqueBaixo: Produto[] = [];
  filteredProdutos: Produto[] = [];
  fornecedores: { id: number; nome: string }[] = [];


  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getProdutos();
    
  }

  getProdutos(): void {
    this.http.get<Produto[]>('http://localhost:3000/produtos').subscribe(
      (produtos) => {
        this.produtos = produtos;  // Armazena todos os produtos
        this.filteredProdutos = produtos;  // Inicializa a lista de produtos filtrados com todos os produtos
        this.verificarEstoqueBaixo();
      },
      (error) => {
        console.error('Erro ao carregar produtos:', error);
      }
    );
  }


  verificarEstoqueBaixo() {
    this.produtosEstoqueBaixo = this.produtos.filter(
      (produto) => produto.quantidade < produto.minStock
    );
  }

  filterProdutos() {
    if (this.searchText.trim() === '') {
      this.filteredProdutos = this.produtos;  // Se o campo de pesquisa estiver vazio, mostra todos os produtos
    } else {
      this.filteredProdutos = this.produtos.filter(produto =>
        produto.nome.toLowerCase().includes(this.searchText.toLowerCase())
      );
    }
  }

  excluirProduto(produtoId: number | undefined): void {
    if (produtoId) {
      // Solicitação HTTP DELETE para excluir o produto
      this.http.delete(`http://localhost:3000/produtos/${produtoId}`).subscribe(
        () => {
          // Atualiza a lista de produtos após exclusão
          this.produtos = this.produtos.filter(produto => produto.id !== produtoId);
          this.filteredProdutos = this.filteredProdutos.filter(produto => produto.id !== produtoId);
          console.log(`Produto com ID ${produtoId} foi excluído.`);
        },
        (error) => {
          console.error('Erro ao excluir o produto:', error);
        }
      );
    } else {
      console.error('ID do produto não encontrado.');
    }
  }
}
