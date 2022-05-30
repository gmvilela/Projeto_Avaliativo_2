import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColecaocriarFormComponent } from 'src/app/_componentes/colecaocriar-form/colecaocriar-form.component';
import { ColecaoeditarFormComponent } from 'src/app/_componentes/colecaoeditar-form/colecaoeditar-form.component';
import { ColecoesListaComponent } from 'src/app/_componentes/colecoes-lista/colecoes-lista.component';

const routes: Routes = [
  {path: '', component: ColecoesListaComponent},
  {
    path:'novaColecao', component: ColecaocriarFormComponent
  },
  {
    path: 'editarColecao/:id', component: ColecaoeditarFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ColecoesRoutingModule { }
