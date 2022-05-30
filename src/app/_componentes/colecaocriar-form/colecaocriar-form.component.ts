import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ColecoesService } from 'src/app/_services/colecoes.service';

@Component({
  selector: 'app-colecaocriar-form',
  templateUrl: './colecaocriar-form.component.html',
  styleUrls: ['./colecaocriar-form.component.scss']
})
export class ColecaocriarFormComponent implements OnInit {

  public colecaoCriarForm!: FormGroup;
  public submitedColecao = false;

  constructor(
    private _formBuilderCriarColecao: FormBuilder,
    private _routerCancel: Router,
    private _routerSalvar: Router,
    private _colecaoService: ColecoesService
    ) { }

  ngOnInit(): void {
    this.colecaoCriarForm = this._formBuilderCriarColecao.group({
      nome: [null, [Validators.required, Validators.minLength(1), Validators.maxLength(200)]],
      responsavel: [null, [Validators.required, Validators.minLength(1), Validators.maxLength(200)]],
      estacao: [null, [Validators.required, Validators.minLength(1), Validators.maxLength(200)]],
      marca: [null, [Validators.required, Validators.minLength(1), Validators.maxLength(200)]],
      orcamento: [null, [Validators.required, Validators.minLength(1), Validators.maxLength(200)]],
      anoLancamento: [null, [Validators.required, Validators.minLength(4), Validators.maxLength(4)]]
    })
  }

  public onSubmitColecao() {
    this.submitedColecao = true;
    if (this.colecaoCriarForm.valid) {
      //console.log(this.colecaoCriarForm.value);
      this._colecaoService.create(this.colecaoCriarForm.value).subscribe();
      alert(`A coleção ${this.colecaoCriarForm.value.nome} foi criada com sucesso!`)
      this._routerSalvar.navigate(['/listarColecoes'])
    } else {
      console.log('erro');
    }
  }

  public onCancelColecao() {
    this.submitedColecao = false;
    alert('Operação Cancelada');
    this.colecaoCriarForm.reset();
    this._routerCancel.navigate(['/listarColecoes'])
  }

}
