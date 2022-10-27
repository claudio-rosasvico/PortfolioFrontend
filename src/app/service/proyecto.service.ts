import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto } from '../model/proyecto';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  proURL = 'https://app-backportfolio.herokuapp.com/proyecto';
  //proURL = 'http://localhost:8080/proyecto';

  constructor(private httpClient: HttpClient) {}

    public lista(): Observable<Proyecto[]> {
      return this.httpClient.get<Proyecto[]>(this.proURL + '/traer');
    }
  
    public detail(id: number): Observable<Proyecto>{
      return this.httpClient.get<Proyecto>(this.proURL + `/traer/${id}`);
    }
  
    public save(proyecto: Proyecto): Observable<any>{
      return this.httpClient.post<any>(this.proURL + '/crear', proyecto);
    }
  
    public update(id: number, proyecto: Proyecto): Observable<any>{
      return this.httpClient.put<any>(this.proURL + `/editar/${id}`, proyecto);
    }
  
    public delete(id: number): Observable<any>{
      return this.httpClient.delete<any>(this.proURL + `/borrar/${id}`);
    }
}
