import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../model/experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  expURL = 'https://app-backportfolio.herokuapp.com/';
  //expURL = 'http://localhost:8080/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Experiencia[]> {
    return this.httpClient.get<Experiencia[]>(this.expURL + 'experiencia/traer');
  }

  public detail(id: number): Observable<Experiencia>{
    return this.httpClient.get<Experiencia>(this.expURL + `experiencia/traer/${id}`);
  }

  public save(experiencia: Experiencia): Observable<any>{
    return this.httpClient.post<any>(this.expURL + 'experiencia/crear', experiencia);
  }

  public update(id: number, experiencia: Experiencia): Observable<any>{
    return this.httpClient.put<any>(this.expURL + `experiencia/editar/${id}`, experiencia);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.expURL + `experiencia/borrar/${id}`);
  }
}
