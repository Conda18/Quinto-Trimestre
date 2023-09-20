import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AsistenciaService {

  constructor(private http: HttpClient) { }

  obtenerAsistencias(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:3000/asistencia');
  }

  crearAsistencia(asistencia: any): Observable<any> {
    return this.http.post('http://localhost:3000/asistencia/create', asistencia);
  }

  actualizarAsistencia(id: number, asistencia: any): Observable<any> {
    return this.http.put(`http://localhost:3000/asistencia/edit/${id}`, asistencia);
  }

  eliminarAsistencia(id: number): Observable<any> {
    return this.http.delete(`http://localhost:3000/asistencia/delete/${id}`);
  }
}
