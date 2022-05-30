import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, empty, Observable } from 'rxjs';
import { Colecao } from 'src/app/_interfaces/colecao';
import { Modelo } from 'src/app/_interfaces/modelo';
import { ColecoesService } from 'src/app/_services/colecoes.service';
import { ModelosService } from 'src/app/_services/modelos.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-modeloeditar-form',
  templateUrl: './modeloeditar-form.component.html',
  styleUrls: ['./modeloeditar-form.component.scss']
})
export class ModeloeditarFormComponent implements OnInit {

  public modelos$!: Observable<Modelo[]>;
  public colecoes$!: Observable<Colecao[]>;
  public modeloEditForm!: FormGroup;

  constructor(
    private _colecoesService: ColecoesService,
    private _modeloService: ModelosService,
    private _formBuilderEditarModelo: FormBuilder,
    private _routeSalvarEditModelo: ActivatedRoute,
    private _routerEditSubmitModelo: Router,
    private _locationListaModelos: Location
  ) { }

  ngOnInit(): void {
    this.colecoes$ = this._colecoesService.list();
    let registroModelo = null;
    this.modeloEditForm = this._formBuilderEditarModelo.group({
      id: null,
      nome: [null, [Validators.required, Validators.minLength(1), Validators.maxLength(200)]],
      tipo: [null, [Validators.required, Validators.minLength(1), Validators.maxLength(200)]],
      bordado: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(3)]],
      responsavel: [null, [Validators.required, Validators.minLength(1), Validators.maxLength(200)]],
      colecao: [null, [Validators.required, Validators.minLength(1), Validators.maxLength(200)]],
      estampa: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(3)]]
    });
    this._routeSalvarEditModelo.params.subscribe(
      (params: any) => {
        const id = params['id']
        //console.log(id);
        const modelos$ = this._modeloService.loadByIdModelo(id);
        modelos$.subscribe(modelo => {
          registroModelo = modelo;
          this.updateEditFormModelo(modelo)
        })
      }
    )
  }

  public onSubmitEditaModelo() {
    if (this.modeloEditForm.valid) {
      if (this.modeloEditForm.value.id) {
        this._modeloService.update(this.modeloEditForm.value).subscribe(
          success => console.log('sucesso'),
          () => console.log('erro'),
        )
        alert (`O modelo ${this.modeloEditForm.value.nome} foi alterado com sucesso!`)
      } else {
          this._modeloService.create(this.modeloEditForm.value).subscribe();
          alert (`O modelo ${this.modeloEditForm.value.nome} foi criado com sucesso!`)
      }
    }
    this._routerEditSubmitModelo.navigate(['/listarModelos'])
  }

  public updateEditFormModelo(modelo: any) {
    this.modeloEditForm.patchValue({
      id: modelo.id,
      nome: modelo.nome,
      tipo: modelo.tipo,
      bordado: modelo.bordado,
      responsavel: modelo.responsavel,
      colecao: modelo.colecao,
      estampa: modelo.estampa
    })
  }

  public onDeleteModelo() {
    if (this.modeloEditForm.valid) {
      if (this.modeloEditForm.value.id) {
        this._modeloService.remove(this.modeloEditForm.value.id).subscribe(
          success => console.log('sucesso'),
          () => console.log('erro'),
        )
        alert (`O modelo ${this.modeloEditForm.value.nome} foi excluído com sucesso!`)
        }
        this._locationListaModelos.back();
        this.onRefreshModelo();
    }
  }

  public onCancelarModelo() {
    this._locationListaModelos.back();
  }

  public onRefreshModelo() {
    this.modelos$ = this._modeloService.list().pipe(
      catchError(error => {
        console.error(error);
        return empty();
      })
    )
  }

}

  