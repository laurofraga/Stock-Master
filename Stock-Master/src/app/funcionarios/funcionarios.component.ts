import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';


@Component({
  selector: 'app-funcionarios',
  templateUrl: './funcionarios.component.html',
  styleUrl: './funcionarios.component.css'
})
export class FuncionariosComponent implements OnInit {
  funcionarios: any[] = []; 
  apiUrl: string = 'http://localhost:3000/funcionarios'; 
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any[]>(this.apiUrl).subscribe(
      (data) => {
        this.funcionarios = data;  // Armazena os dados retornados pela API
      },
      (error) => {
        console.error('Erro ao carregar funcionários', error);  
      }
    );
  }
  }
