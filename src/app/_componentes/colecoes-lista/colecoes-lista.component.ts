import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Colecao } from 'src/app/_interfaces/colecao';
import { ColecoesService } from 'src/app/_services/colecoes.service';

@Component({
  selector: 'app-colecoes-lista',
  templateUrl: './colecoes-lista.component.html',
  styleUrls: ['./colecoes-lista.component.scss']
})
export class ColecoesListaComponent implements OnInit {

  public colecoes$!: Observable<Colecao[]>;

  constructor(
    private _colecoesService: ColecoesService,
    private _routerEdit: Router,
    private _routeEdit: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.colecoes$ = this._colecoesService.list()
  }

  onEditColecao(id: number) {
    this._routerEdit.navigate(['editarColecao', id], { relativeTo: this._routeEdit })
  }

}
