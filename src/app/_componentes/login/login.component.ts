import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  imageAudaces = '/assets/img/Fill-51.png'
  imageAlt = 'audacesAlt'

  constructor(
    private _formBuilderLogin: FormBuilder,
    private _routerValido: Router,
    private _routerForgotPassword: Router
  ) { }

  _loginForm: FormGroup = this._formBuilderLogin.group({
    email: ['', [Validators.required, Validators.email]],
    senha: ['', [Validators.required, Validators.minLength(6)]],
})

  ngOnInit(): void {
  }

  onSubmit(){
    if (this._loginForm.valid){
      this._routerValido.navigate(['/dashboard']);
      ;
    } else {
      alert('Campo Email Obrigatório');
      alert('Campo Senha Obrigatório e Mínimo 6 caracteres');
    }
  }

  forgotPassword() {
    this._routerForgotPassword.navigate(['/forgot-password']);
  }

}
