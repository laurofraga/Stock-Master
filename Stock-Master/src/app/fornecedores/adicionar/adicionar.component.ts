import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Fornecedor } from '../../models/fornecedor.model';

@Component({
  selector: 'app-adicionar',
  templateUrl: './adicionar.component.html',
  styleUrl: './adicionar.component.css'
})
export class AdicionarComponent {
  fornecedor: Fornecedor = {
    
    nome: '',
    endereco: '',
    contato: ''
  };
  errorMessage: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  criarFornecedor(): void {
    if (!this.fornecedor.nome || !this.fornecedor.endereco || !this.fornecedor.contato) {
      this.errorMessage = 'Todos os campos são obrigatórios!';
      return;
    }

    // Envia os dados do novo fornecedor para o servidor
    this.http.post('http://localhost:3000/fornecedores', this.fornecedor).subscribe(
      () => {
        alert('Fornecedor criado com sucesso!');
        this.router.navigate(['/fornecedores']); // Redireciona para a tela de lista de fornecedores
      },
      (error) => {
        this.errorMessage = 'Erro ao criar fornecedor. Tente novamente.';
        console.error(error);
      }
    );
  }
}

