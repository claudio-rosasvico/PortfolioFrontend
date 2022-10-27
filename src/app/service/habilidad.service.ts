import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Habilidad } from '../model/habilidad';

@Injectable({
  providedIn: 'root'
})
export class HabilidadService {

  habURL = 'https://app-backportfolio.herokuapp.com/habilidad/';
  //habURL = 'http://localhost:8080/habilidad/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Habilidad[]> {
    return this.httpClient.get<Habilidad[]>(this.habURL + 'traer');
  }

  public detail(id: number): Observable<Habilidad>{
    return this.httpClient.get<Habilidad>(this.habURL + `traer/${id}`);
  }

  public save(habilidad: Habilidad): Observable<any>{
    return this.httpClient.post<any>(this.habURL + 'crear', habilidad);
  }

  public update(id: number, habilidad: Habilidad): Observable<any>{
    return this.httpClient.put<any>(this.habURL + `editar/${id}`, habilidad);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.habURL + `borrar/${id}`);
  }

}
