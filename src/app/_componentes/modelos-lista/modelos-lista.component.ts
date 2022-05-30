import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Modelo } from 'src/app/_interfaces/modelo';
import { ModelosService } from 'src/app/_services/modelos.service';

@Component({
  selector: 'app-modelos-lista',
  templateUrl: './modelos-lista.component.html',
  styleUrls: ['./modelos-lista.component.scss']
})
export class ModelosListaComponent implements OnInit {

  public modelos$!: Observable<Modelo[]>;

  constructor(
    private _modelosService: ModelosService,
    private _routerEditModelo: Router,
    private _routeEditModelo: ActivatedRoute

  ) { }

  ngOnInit(): void {
    this.modelos$ = this._modelosService.list()
  }

  onEditModelo(id: number) {
    this._routerEditModelo.navigate(['editarModelo', id], {relativeTo: this._routeEditModelo} )

  }

}
