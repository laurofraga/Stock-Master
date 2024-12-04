import { Component, OnInit } from '@angular/core';


interface Produto {
  id: number;
  nome: string;
  quantidade: number;
  preco: number;
  minStock: number;
}

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrl: './produtos.component.css'
})
export class ProdutosComponent {
  searchText: string = '';
  produtos: Produto[] = [];
  produtosEstoqueBaixo: Produto[] = [];
  filteredProdutos: Produto[] = [];

  ngOnInit(): void{
    this.produtos = [
      { id: 1, nome: 'Produto A', quantidade: 20, preco: 10.0, minStock: 5 },
      { id: 2, nome: 'Produto B', quantidade: 10, preco: 15.0, minStock: 8 },
      { id: 3, nome: 'Produto C', quantidade: 13, preco: 20.0, minStock: 3 },
    ];

    this.verificarEstoqueBaixo();
    this.filteredProdutos = this.produtos;
  }

  verificarEstoqueBaixo() {
    this.produtosEstoqueBaixo = this.produtos.filter(
      (produto) => produto.quantidade < produto.minStock
    );
  }

  filterProdutos() {
    if (this.searchText.trim() === '') {
      this.filteredProdutos = this.produtos;
    } else {
      this.filteredProdutos = this.produtos.filter(produto =>
        produto.nome.toLowerCase().includes(this.searchText.toLowerCase())
      );
    }
  }

  excluirProduto(id: number): void {
    if (confirm('Tem certeza que deseja excluir este produto?')) {
      this.produtos = this.produtos.filter(produto => produto.id !== id);
      this.verificarEstoqueBaixo();
    }
  }
  
}
