import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './_componentes/dashboard/dashboard.component';
import { EsqueciSenhaComponent } from './_componentes/esqueci-senha/esqueci-senha.component';
import { LoginComponent } from './_componentes/login/login.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'login' },
  {path: 'login', component: LoginComponent},
  {path: 'forgot-password', component: EsqueciSenhaComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'listarColecoes', loadChildren: () => import('./_modules/colecoes/colecoes.module').then(m => m.ColecoesModule)},
  {path: 'listarModelos', loadChildren: () => import('./_modules/modelos/modelos.module').then(m => m.ModelosModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
