import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './_componentes/dashboard/dashboard.component';
import { LoginComponent } from './_componentes/login/login.component';
import { EsqueciSenhaComponent } from './_componentes/esqueci-senha/esqueci-senha.component';
import { MenuLateralComponent } from './_componentes/menu-lateral/menu-lateral.component';
import { ColecoesListaComponent } from './_componentes/colecoes-lista/colecoes-lista.component';
import { ColecaocriarFormComponent } from './_componentes/colecaocriar-form/colecaocriar-form.component';
import { ColecaoeditarFormComponent } from './_componentes/colecaoeditar-form/colecaoeditar-form.component';
import { ModelosListaComponent } from './_componentes/modelos-lista/modelos-lista.component';
import { ModelocriarFormComponent } from './_componentes/modelocriar-form/modelocriar-form.component';
import { ModeloeditarFormComponent } from './_componentes/modeloeditar-form/modeloeditar-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    EsqueciSenhaComponent,
    MenuLateralComponent,
    ColecoesListaComponent,
    ColecaocriarFormComponent,
    ColecaoeditarFormComponent,
    ModelosListaComponent,
    ModelocriarFormComponent,
    ModeloeditarFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
