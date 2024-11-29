import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';

import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: DashboardComponent}
]

@NgModule({
  declarations: [
  
  ],
  imports: [
    CommonModule
  ]
})
export class DashboardModule { }
