import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, audit } from 'rxjs';

import { Autor } from '../../interfaces/Autor';


@Injectable({
  providedIn: 'root'
})
export class AutorService {

  BASE_URL:string = 'http://localhost:5000';
  
  constructor(private http: HttpClient) { }

  getAutors():Observable<Autor[]>{
    return this.http.get<Autor[]>(`${this.BASE_URL}/autor`);
  }
  getAutor(id: string):Observable<Autor>{ 
    return this.http.get<Autor>(`${this.BASE_URL}/autor/${id}`);
  }
  createAutor(autor:Autor):Observable<Autor>{
    return this.http.post<Autor>(`${this.BASE_URL}/autor/create`, autor);

  }
  deleteAutor(id: string):Observable<Autor>{ 
    return this.http.delete<Autor>(`${this.BASE_URL}/autor/delete/${id}`);
  } 
  updateAutorid(id: string, autor:Autor):Observable<Autor>{
    return this.http.put<Autor>(`${this.BASE_URL}/autor/update/${id}`, autor);
  }
  
}
