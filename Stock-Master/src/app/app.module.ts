import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CriarProdutoComponent } from './criar-produto/criar-produto.component';
import { MovimentacoesComponent } from './movimentacoes/movimentacoes.component';
import { MovimentacoesCriarComponent } from './movimentacoes-criar/movimentacoes-criar.component';
import { FornecedoresComponent } from './fornecedores/fornecedores.component';
import { AdicionarComponent } from './fornecedores/adicionar/adicionar.component';
import { FuncionariosComponent } from './funcionarios/funcionarios.component';
import { FuncionarioCriarComponent } from './funcionario-criar/funcionario-criar.component';
import { EditarProdutoComponent } from './editar-produto/editar-produto.component';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth.guard';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    CriarProdutoComponent,
    MovimentacoesComponent,
    MovimentacoesCriarComponent,
    FornecedoresComponent,
    AdicionarComponent,
    FuncionariosComponent,
    FuncionarioCriarComponent,
    EditarProdutoComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    DashboardModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
