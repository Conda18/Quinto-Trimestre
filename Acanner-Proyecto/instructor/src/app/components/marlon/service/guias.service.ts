import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GuiasService {

  constructor(private http: HttpClient) { }

  obtenerGuias(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:3000/guias');
  }

  crearGuia(guia: any): Observable<any> {
    return this.http.post('http://localhost:3000/guias/create', guia);
  }

  actualizarGuia(id: number, guia: any): Observable<any> {
    return this.http.put(`http://localhost:3000/guias/edit/${id}`, guia);
  }

  eliminarGuia(id: number): Observable<any> {
    return this.http.delete(`http://localhost:3000/guias/delete/${id}`);
  }
}
