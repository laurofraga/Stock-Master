import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProdutosRoutingModule } from './produtos-routing.module';
import { ProdutosComponent } from './produtos.component';
import { SearchPipe } from '../search.pipe';


@NgModule({
  declarations: [
    ProdutosComponent, 
    SearchPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ProdutosRoutingModule
  ]
})
export class ProdutosModule { }
