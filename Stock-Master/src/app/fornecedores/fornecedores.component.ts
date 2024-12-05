import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Fornecedor } from '../models/fornecedor.model';

@Component({
  selector: 'app-fornecedores',
  templateUrl: './fornecedores.component.html',
  styleUrl: './fornecedores.component.css'
})

export class FornecedoresComponent {
  fornecedores: Fornecedor[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getFornecedores();
  }
  getFornecedores(): void {
    this.http.get<Fornecedor[]>('http://localhost:3000/fornecedores').subscribe(
      (data) => {
        this.fornecedores = data; 
      },
      (error) => {
        console.error('Erro ao carregar fornecedores', error);
      }
    );
  }

}
