import { Component } from '@angular/core';

@Component({
  selector: 'app-movimentacoes-criar',
  templateUrl: './movimentacoes-criar.component.html',
  styleUrl: './movimentacoes-criar.component.css'
})
export class MovimentacoesCriarComponent {
  novaMovimentacao = {
    produto: '',
    tipo: '',
    quantidade: null,
    funcionario: '',
  };
  funcionarios = ['João Silva', 'Maria Oliveira', 'Ana Santos'];
}
