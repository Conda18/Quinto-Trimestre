import { Component } from '@angular/core';
import { AsistenciaService } from '../service/asistencia.service';

@Component({
  selector: 'app-create-asistencia',
  templateUrl: './create-asistencia.component.html',
  styleUrls: ['./create-asistencia.component.css']
})

export class CreateAsistenciaComponent {
  
  usuarioId: number = 0;
  fecha: string ='' ;
  estado: string ='' ;

  constructor(private asistenciaService: AsistenciaService) { }

  crearAsistencia() {
    const asistenciaData = {
      usuarioId: this.usuarioId,
      fecha: this.fecha,
      estado: this.estado
    };

    this.asistenciaService.crearAsistencia(asistenciaData).subscribe(response => {
      console.log('Asistencia creada con éxito:', response);
    }, error => {
      console.error('Error al crear la asistencia:', error);
    });
  }
}
