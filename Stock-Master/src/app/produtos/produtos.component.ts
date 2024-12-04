import { Component } from '@angular/core';


interface Produto {
  id: number;
  nome: string;
  quantidade: number;
  preco: number;
}

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrl: './produtos.component.css'
})
export class ProdutosComponent {
  produtos: any[] = [];
  produtosEstoqueBaixo: any[] = [];

  ngOnInit(): void{
    this.produtos = [
      { id: 1, nome: 'Produto A', quantidade: 2, preco: 10.0, minStock: 5 },
      { id: 2, nome: 'Produto B', quantidade: 10, preco: 15.0, minStock: 8 },
      { id: 3, nome: 'Produto C', quantidade: 1, preco: 20.0, minStock: 3 },
    ];

    this.verificarEstoqueBaixo();
  }

  verificarEstoqueBaixo() {
    this.produtosEstoqueBaixo = this.produtos.filter(
      (produto) => produto.quantidade < produto.minStock
    );
  }
}
