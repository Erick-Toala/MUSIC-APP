import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, audit } from 'rxjs';

import { IResenia, IResenias } from '../../interfaces/Resenia';


@Injectable({
  providedIn: 'root'
})
export class ReseniaService {
  
  BASE_URL:string = 'http://localhost:2500/grupo3/musicrepertory/api';

  constructor(private http: HttpClient) { }

  getResenias(): Observable<IResenias> {
    return this.http.get<IResenias>(`${this.BASE_URL}/resenia`);
  }
  createResenia(resenia:any):Observable<IResenia>{
    return this.http.post<IResenia>(`${this.BASE_URL}/resenia`, resenia);

  }
  deleteResenia(id: string):Observable<IResenia>{ 
    return this.http.delete<IResenia>(`${this.BASE_URL}/resenia/${id}`);
  } 
  updateResenia(id: string, resenia:any):Observable<IResenia>{
    return this.http.put<IResenia>(`${this.BASE_URL}/resenia/${id}`, resenia);
  }

}
