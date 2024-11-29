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
  produtos: Produto[] = [
    { id: 1, nome: 'Produto A', quantidade: 10, preco: 50 },
    { id: 2, nome: 'Produto B', quantidade: 20, preco: 30 },
  ];

  adicionarProduto() {
    alert('Formulário de adicionar produto será implementado!');
  }

}
