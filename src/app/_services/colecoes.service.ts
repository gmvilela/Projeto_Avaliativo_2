import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Colecao } from '../_interfaces/colecao';

@Injectable({
  providedIn: 'root'
})
export class ColecoesService {

  private readonly API = `${environment.API}/colecoes`;

  constructor(private _httpClient: HttpClient) { }

  public list() {
    return this._httpClient.get<Colecao[]>(this.API);
  }

  public create(colecao: Colecao) {
    return this._httpClient.post(this.API, colecao).pipe(take(1));
  }
   
  public loadByIdColecao(id: number) {
    return this._httpClient.get<Colecao[]>(`${this.API}/${id}`).pipe(take(1));
  }

  public update(colecao: Colecao) {
    return this._httpClient.put(`${this.API}/${colecao.id}`, colecao).pipe(take(1));
  }
  
}

