import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../model/educacion';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  eduURL = 'https://app-backportfolio.herokuapp.com/educacion/';
  //eduURL = 'http://localhost:8080/educacion/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Educacion[]> {
    return this.httpClient.get<Educacion[]>(this.eduURL + 'traer');
  }

  public detail(id: number): Observable<Educacion>{
    return this.httpClient.get<Educacion>(this.eduURL + `traer/${id}`);
  }

  public save(educacion: Educacion): Observable<any>{
    return this.httpClient.post<any>(this.eduURL + 'crear', educacion);
  }

  public update(id: number, educacion: Educacion): Observable<any>{
    return this.httpClient.put<any>(this.eduURL + `editar/${id}`, educacion);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.eduURL + `borrar/${id}`);
  }

}
