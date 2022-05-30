import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Colecao } from 'src/app/_interfaces/colecao';
import { ColecoesService } from 'src/app/_services/colecoes.service';

@Component({
  selector: 'app-colecaoeditar-form',
  templateUrl: './colecaoeditar-form.component.html',
  styleUrls: ['./colecaoeditar-form.component.scss']
})
export class ColecaoeditarFormComponent implements OnInit {

  public colecaoEditForm!: FormGroup;

  //public colecoes$!: Observable<Colecao[]>

  constructor(
    private _formBuilderEditarColecao: FormBuilder,
    private _colecaoService: ColecoesService,
    private _routerSalvar: ActivatedRoute,
    private _routerEditSubmit: Router,
    private _routerCancelEdit: Router
    //private _routeEdit: ActivatedRoute
    ) { }

  ngOnInit(): void {
    let registroColecao = null;
    this.colecaoEditForm = this._formBuilderEditarColecao.group({
      id: null,
      nome: [null, [Validators.required, Validators.minLength(1), Validators.maxLength(200)]],
      responsavel: [null, [Validators.required, Validators.minLength(1), Validators.maxLength(200)]],
      estacao: [null, [Validators.required, Validators.minLength(1), Validators.maxLength(200)]],
      marca: [null, [Validators.required, Validators.minLength(1), Validators.maxLength(200)]],
      orcamento: [null, [Validators.required, Validators.minLength(1), Validators.maxLength(200)]],
      anoLancamento: [null, [Validators.required, Validators.minLength(4), Validators.maxLength(4)]]
    });
    this._routerSalvar.params.subscribe(
      (params: any) => {
        const id = params['id'];
        //console.log(id);
        const colecoes$ = this._colecaoService.loadByIdColecao(id);
        colecoes$.subscribe(colecao => {
          registroColecao = colecao;
          this.updateEditForm(colecao)
        })
      }
    )
  }

  public onSubmitEditaColecao() {
    if(this.colecaoEditForm.valid) {
      if(this.colecaoEditForm.value.id) {
        this._colecaoService.update(this.colecaoEditForm.value).subscribe(
          success => console.log('sucesso'),
          () => console.log('erro'),
        )
        alert(`A coleção ${this.colecaoEditForm.value.nome} foi alterada com sucesso!`)
      } else {
        this._colecaoService.create(this.colecaoEditForm.value).subscribe();
        alert(`A coleção ${this.colecaoEditForm.value.nome} foi criada com sucesso!`)
      }
    }
    this._routerEditSubmit.navigate(['/listarColecoes'])
  }


  public updateEditForm(colecao: any) {
    this.colecaoEditForm.patchValue({
      id: colecao.id,
      nome: colecao.nome,
      responsavel: colecao.responsavel,
      estacao: colecao.estacao,
      marca: colecao.marca,
      orcamento: colecao.orcamento,
      anoLancamento: colecao.anoLancamento
    })
  }

  public onCancelEditColecao() {
    alert('Operação Cancelada')
    this._routerCancelEdit.navigate(['listarColecoes']);
  }


  /* public onEditColecao(id: number) {
    this._routerEdit.navigate(['editarColecao', id], { relativeTo: this._routeEdit })
  } */

}
