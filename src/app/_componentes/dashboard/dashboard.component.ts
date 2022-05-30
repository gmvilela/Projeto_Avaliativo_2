import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Colecao } from 'src/app/_interfaces/colecao';
import { Modelo } from 'src/app/_interfaces/modelo';
import { ColecoesService } from 'src/app/_services/colecoes.service';
import { ModelosService } from 'src/app/_services/modelos.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public colecoes$!: Observable<Colecao[]>;
  public modelos$!: Observable<Modelo[]>;
  public totalColecoes!: number;
  public totalModelos!: number;
  public sumall!: number;
  public mediaOrcamentoColecao!: number;
  listaColecoes: any;
  lista5Colecoes: any;

  constructor(
    private _colecoesService: ColecoesService,
    private _modelosService: ModelosService 
  ) { }



  ngOnInit(): void {
    this.colecoes$ = this._colecoesService.list()

    this._colecoesService.list().subscribe(
      somatorio => {
       this.totalColecoes = somatorio.length;
      }
    )

    this.colecoes$.subscribe(
      lista => {
        this.listaColecoes = lista;
        this.listaColecoes.sort((a: any, b: any) => b.orcamento - a.orcamento);
        this.lista5Colecoes = this.listaColecoes.slice(0,5);
      }
    )

    this._modelosService.list().subscribe(
      somatorio => {
        this.totalModelos = somatorio.length;
      }
    )

    this.colecoes$.subscribe(
      somaOrcamento => {
        this.sumall = somaOrcamento.map(item => item.orcamento).reduce((prev, curr) => prev + curr,0)
      })
  }

}
