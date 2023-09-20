import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HorariosService {

  constructor(private http: HttpClient) { }

  obtenerHorarios(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:3000/horarios');
  }

  crearHorario(horario: any): Observable<any> {
    return this.http.post('http://localhost:3000/horarios/create', horario);
  }

  actualizarHorario(id: number, horario: any): Observable<any> {
    return this.http.put(`http://localhost:3000/horarios/edit/${id}`, horario);
  }

  eliminarHorario(id: number): Observable<any> {
    return this.http.delete(`http://localhost:3000/horarios/delete/${id}`);
  }
}
