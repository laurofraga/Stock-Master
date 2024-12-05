import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Funcionario } from '../models/funcionario.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-funcionario-criar',
  templateUrl: './funcionario-criar.component.html',
  styleUrl: './funcionario-criar.component.css'
})
export class FuncionarioCriarComponent {
  funcionario: Funcionario = {
    nome: '',
    email: '',
    username: '',
    password: '',
  };
  errorMessage: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {}

  criarFuncionario(): void {
    if (!this.funcionario.nome || !this.funcionario.username || !this.funcionario.password) {
      this.errorMessage = 'Todos os campos são obrigatórios!';
      return;
    }

    this.http.post('http://localhost:3000/funcionarios', this.funcionario).subscribe(
      () => {
        alert('Funcionário criado com sucesso!');
        this.router.navigate(['/funcionarios']); // Redireciona para a tela de lista de funcionários
      },
      (error) => {
        this.errorMessage = 'Erro ao criar funcionário. Tente novamente.';
        console.error(error);
      }
    );
  }
}
