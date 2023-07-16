import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, audit } from 'rxjs';

import { Cancion } from '../../interfaces/Cancion';

@Injectable({
  providedIn: 'root'
})
export class CancionService {

  BASE_URL:string = 'http://localhost:5000';
  
  constructor(private http: HttpClient) { }

  getCancions():Observable<Cancion[]>{
    return this.http.get<Cancion[]>(`${this.BASE_URL}/cancion`);
  }
  getCancion(id: string):Observable<Cancion>{ 
    return this.http.get<Cancion>(`${this.BASE_URL}/cancion/${id}`);
  }
  createCancion(cancion:Cancion):Observable<Cancion>{
    return this.http.post<Cancion>(`${this.BASE_URL}/cancion/create`, cancion);

  }
  deleteCancion(id: string):Observable<Cancion>{ 
    return this.http.delete<Cancion>(`${this.BASE_URL}/cancion/delete/${id}`);
  } 
  updateCancionid(id: string, cancion:Cancion):Observable<Cancion>{
    return this.http.put<Cancion>(`${this.BASE_URL}/cancion/update/${id}`, cancion);
  }

}
