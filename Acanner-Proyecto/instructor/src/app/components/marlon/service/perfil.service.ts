import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  constructor(private http: HttpClient) { }

  obtenerPerfil(id: number): Observable<any> {
    return this.http.get<any>(`http://localhost:3000/perfil/${id}`);
  }

  actualizarPerfil(id: number, perfil: any): Observable<any> {
    return this.http.put(`http://localhost:3000/perfil/edit/${id}`, perfil);
  }
}
