import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Modelo} from '../_interfaces/modelo';
import { take } from 'rxjs';
import { Colecao } from '../_interfaces/colecao';

@Injectable({
  providedIn: 'root'
})
export class ModelosService {

  private readonly API = `${environment.API}/modelos`;

  constructor(private _httpClient: HttpClient) { }

  public list() {
    return this._httpClient.get<Modelo[]>(this.API);
  }

  public create(modelo: Modelo) {
    return this._httpClient.post(this.API, modelo).pipe(take(1));
  }

  public loadByIdModelo(id: number) {
    return this._httpClient.get<Modelo[]>(`${this.API}/${id}`).pipe(take(1));
  }

  public update(modelo: Modelo) {
    return this._httpClient.put(`${this.API}/${modelo.id}`, modelo).pipe(take(1));
  }

  public remove(id: number) {
    return this._httpClient.delete(`${this.API}/${id}`).pipe(take(1));
  }

}
