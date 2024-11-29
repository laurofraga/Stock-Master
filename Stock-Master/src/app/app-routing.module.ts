import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MovimentacoesComponent } from './movimentacoes/movimentacoes.component';
import { MovimentacoesCriarComponent } from './movimentacoes-criar/movimentacoes-criar.component';
import { FornecedoresComponent } from './fornecedores/fornecedores.component';
import { AdicionarComponent } from './fornecedores/adicionar/adicionar.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  { path: 'produtos', loadChildren: () => import('./produtos/produtos.module').then(m => m.ProdutosModule) },
  { path: 'movimentacoes', component: MovimentacoesComponent },
  { path: '', component: MovimentacoesComponent },
  { path: 'criar', component: MovimentacoesCriarComponent },
  { path: 'movimentacao-criar', component: MovimentacoesCriarComponent },
  { path: 'fornecedores', component: FornecedoresComponent },
  { path: 'fornecedores/adicionar', component: AdicionarComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
