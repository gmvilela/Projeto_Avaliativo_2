import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModelocriarFormComponent } from 'src/app/_componentes/modelocriar-form/modelocriar-form.component';
import { ModeloeditarFormComponent } from 'src/app/_componentes/modeloeditar-form/modeloeditar-form.component';
import { ModelosListaComponent } from 'src/app/_componentes/modelos-lista/modelos-lista.component';

const routes: Routes = [
  {path: '', component: ModelosListaComponent},
  {
    path: 'novoModelo', component: ModelocriarFormComponent
  },
  {
    path: 'editarModelo/:id', component: ModeloeditarFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModelosRoutingModule { }
