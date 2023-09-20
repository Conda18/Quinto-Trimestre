import { Component } from '@angular/core';
import { HorariosService } from '../service/horarios.service';

@Component({
  selector: 'app-create-horario',
  templateUrl: './create-horario.component.html',
  styleUrls: ['./create-horario.component.css']
})

export class CreateHorarioComponent {
  
  dia: string ='';
  horaInicio: string ='';
  horaFin: string ='';

  constructor(private horariosService: HorariosService) { }

  crearHorario() {
    const horarioData = {
      dia: this.dia,
      hora_inicio: this.horaInicio,
      hora_fin: this.horaFin
    };

    this.horariosService.crearHorario(horarioData).subscribe(response => {
      console.log('Horario creado con éxito:', response);
    }, error => {
      console.error('Error al crear el horario:', error);
    });
  }
}
