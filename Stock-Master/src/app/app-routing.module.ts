import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MovimentacoesComponent } from './movimentacoes/movimentacoes.component';
import { MovimentacoesCriarComponent } from './movimentacoes-criar/movimentacoes-criar.component';
import { FornecedoresComponent } from './fornecedores/fornecedores.component';
import { AdicionarComponent } from './fornecedores/adicionar/adicionar.component';
import { FuncionariosComponent } from './funcionarios/funcionarios.component';
import { FuncionarioCriarComponent } from './funcionario-criar/funcionario-criar.component';
import { AuthGuard } from './auth/auth.guard';  // Importando o AuthGuard

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard]  // Protegendo a rota de Dashboard
  },
  {
    path: 'produtos',
    loadChildren: () => import('./produtos/produtos.module').then(m => m.ProdutosModule),
    canActivate: [AuthGuard]  // Protegendo a rota de Produtos
  },
  {
    path: 'movimentacoes',
    component: MovimentacoesComponent,
    canActivate: [AuthGuard]  // Protegendo a rota de Movimentações
  },
  {
    path: 'movimentacao-criar',
    component: MovimentacoesCriarComponent,
    canActivate: [AuthGuard]  // Protegendo a rota de criação de movimentação
  },
  {
    path: 'fornecedores',
    component: FornecedoresComponent,
    canActivate: [AuthGuard]  // Protegendo a rota de Fornecedores
  },
  {
    path: 'fornecedores/adicionar',
    component: AdicionarComponent,
    canActivate: [AuthGuard]  // Protegendo a rota de adicionar fornecedores
  },
  {
    path: 'funcionarios',
    component: FuncionariosComponent,
    canActivate: [AuthGuard]  // Protegendo a rota de Funcionários
  },
  {
    path: 'funcionarios/adicionar',
    component: FuncionarioCriarComponent,
    canActivate: [AuthGuard]  // Protegendo a rota de adicionar funcionário
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
