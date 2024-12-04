import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

interface Produto {
  id: number;
  nome: string;
  quantidade: number;
  preco: number;
  minStock: number;
}

@Component({
  selector: 'app-editar-produto',
  templateUrl: './editar-produto.component.html',
  styleUrl: './editar-produto.component.css'
})
export class EditarProdutoComponent implements OnInit{
  produto: Produto | undefined;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    // Buscar o produto com o id correspondente
    this.produto = this.buscarProduto(id);
  }

  buscarProduto(id: number): Produto {
    // Simulando a busca do produto
    const produtos = [
      { id: 1, nome: 'Produto A', quantidade: 2, preco: 10.0, minStock: 5 },
      { id: 2, nome: 'Produto B', quantidade: 10, preco: 15.0, minStock: 8 },
      { id: 3, nome: 'Produto C', quantidade: 1, preco: 20.0, minStock: 3 },
    ];

    return produtos.find(produto => produto.id === id)!;
  }

  salvar(): void {
    // Lógica para salvar o produto
    console.log('Produto editado:', this.produto);
    this.router.navigate(['/produtos']);
  }
}


