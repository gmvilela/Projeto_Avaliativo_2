import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-esqueci-senha',
  templateUrl: './esqueci-senha.component.html',
  styleUrls: ['./esqueci-senha.component.scss']
})
export class EsqueciSenhaComponent implements OnInit {

  imageAudaces = '/assets/img/Fill-51.png'
  imageAlt = 'audacesAlt'  

  constructor(
    private _FormBuilderForgotPassword: FormBuilder,
    private _routerEnviarRecuperacao: Router
  ) { }

  _redefiniSenhaForm: FormGroup = this._FormBuilderForgotPassword.group({
    email: ['', [Validators.required, Validators.email]],
  })

  ngOnInit(): void {
  }

  recuperarSenhaSubmit(){
    if (this._redefiniSenhaForm.valid){
      this._routerEnviarRecuperacao.navigate(['/login']);
      ;
    } else {
      alert('Campo Email Obrigatório');
    }
  }

}
