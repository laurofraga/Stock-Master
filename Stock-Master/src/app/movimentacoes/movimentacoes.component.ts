import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movimentacoes',
  templateUrl: './movimentacoes.component.html',
  styleUrls: ['./movimentacoes.component.css']
})
export class MovimentacoesComponent {
  entradas = [
    { produto: 'Produto A', quantidade: 10, data: new Date() },
    { produto: 'Produto C', quantidade: 20, data: new Date() }
  ];

  saidas = [
    { produto: 'Produto B', quantidade: 5, data: new Date() },
    { produto: 'Produto D', quantidade: 2, data: new Date() }
  ];

  constructor(private router: Router) {}

  irParaCriarMovimentacao() {
    this.router.navigate(['/movimentacao-criar']);
  }
}