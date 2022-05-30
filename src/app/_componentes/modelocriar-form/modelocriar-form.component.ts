import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Colecao } from 'src/app/_interfaces/colecao';
import { ColecoesService } from 'src/app/_services/colecoes.service';
import { ModelosService } from 'src/app/_services/modelos.service';

@Component({
  selector: 'app-modelocriar-form',
  templateUrl: './modelocriar-form.component.html',
  styleUrls: ['./modelocriar-form.component.scss']
})
export class ModelocriarFormComponent implements OnInit {

  public colecoes$!: Observable<Colecao[]>;
  public modeloCriarForm!: FormGroup;
  public submitedModelo = false;

  constructor(
    private _formBuilderCriarModelo: FormBuilder,
    private _colecoesService: ColecoesService,
    private _modeloService: ModelosService,
    private _routerSalvarModelo: Router,
    private _routerCancelModelo: Router
  ) { }

  ngOnInit(): void {
    this.colecoes$ = this._colecoesService.list();
    this.modeloCriarForm = this._formBuilderCriarModelo.group({
      nome: [null, [Validators.required, Validators.minLength(1), Validators.maxLength(200)]],
      tipo: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(200)]],
      bordado: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(3)]],
      responsavel: [null, [Validators.required, Validators.minLength(1), Validators.maxLength(200)]],
      colecao: [null, [Validators.required, Validators.minLength(1), Validators.maxLength(200)]],
      estampa: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(3)]],
    })
  }

  public onSubmitModelo() {
    this.submitedModelo = true;
    if (this.modeloCriarForm.valid) {
      this._modeloService.create(this.modeloCriarForm.value).subscribe();
      alert(`O modelo ${this.modeloCriarForm.value.nome} foi criado com sucesso!`)
      this._routerSalvarModelo.navigate(['/listarModelos'])
    } else {
      console.log('erro');
    }
  }

  public onCancelModelo() {
    this.submitedModelo = false;
    alert('Operação Cancelada');
    this.modeloCriarForm.reset();
    this._routerCancelModelo.navigate(['/listarModelos'])
  }
  
}
