import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Identidad } from '../model/identidad';

@Injectable({
  providedIn: 'root'
})
export class IdentidadService {

  ideURL = 'https://app-backportfolio.herokuapp.com/identidad/';
  //ideURL = 'http://localhost:8080/identidad/';

  constructor(private httpClient: HttpClient) { }

  public detail(id: number): Observable<Identidad>{
    return this.httpClient.get<Identidad>(this.ideURL + `traer/${id}`);
  }

  public save(identidad: Identidad): Observable<any>{
    return this.httpClient.post<any>(this.ideURL + 'experiencia/crear', identidad);
  }

  public update(id: number, identidad: Identidad): Observable<any>{
    return this.httpClient.put<any>(this.ideURL + `editar/${id}`, identidad);
  }
}
