import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutosComponent } from './produtos.component';
import { CriarProdutoComponent } from '../criar-produto/criar-produto.component';
import { EditarProdutoComponent } from '../editar-produto/editar-produto.component';

const routes: Routes = [
  { path: '', component: ProdutosComponent },
  { path: 'criar', component: CriarProdutoComponent },
  { path: 'editar/:id', component: EditarProdutoComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutosRoutingModule { }
