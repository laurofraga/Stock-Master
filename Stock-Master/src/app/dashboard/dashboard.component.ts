import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';

interface Product {
  id: number;
  name: string;
  quantity: number;
}

interface Movement {
  id: number;
  date: string;
  description: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  totalProducts = 120;
  recentMovements: Movement[] = [];
  lowStockProducts: Product[] = [
    { id: 1, name: 'Produto A', quantity: 5 },
    { id: 2, name: 'Produto B', quantity: 2 },
  ];
  recentMovementsList = [
    { product: 'Produto C', action: 'Entrada', date: '28/11/2024' },
    { product: 'Produto D', action: 'Saída', date: '27/11/2024' },
  ];

  constructor(/* Injete o serviço de dados aqui */) {}

  ngOnInit() {
    this.initChart();
  }
  initChart() {
    new Chart('stockChart', {
      type: 'bar',
      data: {
        labels: ['Produto A', 'Produto B', 'Produto C'],
        datasets: [
          {
            label: 'Quantidade em Estoque',
            data: [5, 2, 10],
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
          },
        ],
      },
      options: {
        responsive: true,
      },
    });
  }


  loadLowStockProducts(): void {
    // Substitua pelo serviço real
    this.lowStockProducts = [
      { id: 1, name: 'Produto A', quantity: 2 },
      { id: 2, name: 'Produto B', quantity: 5 }
    ];
  }

  loadRecentMovements(): void {
    // Substitua pelo serviço real
    this.recentMovements = [
      { id: 1, date: '2024-11-28', description: 'Entrada de 50 unidades de Produto A' },
      { id: 2, date: '2024-11-27', description: 'Saída de 20 unidades de Produto B' }
    ];
  }
}
