import { Component } from '@angular/core';

@Component({
  selector: 'app-funcionario-criar',
  templateUrl: './funcionario-criar.component.html',
  styleUrl: './funcionario-criar.component.css'
})
export class FuncionarioCriarComponent {
  novoFuncionario = {
    nome: '',
    email: '',
    senha: '',
    confirmarSenha: ''
  };

  constructor() {}

  ngOnInit(): void {}

  salvarFuncionario(): void {
    console.log(this.novoFuncionario);
  }
}
