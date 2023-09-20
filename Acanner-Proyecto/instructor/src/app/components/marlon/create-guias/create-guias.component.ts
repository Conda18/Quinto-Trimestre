import { Component } from '@angular/core';
import { GuiasService } from '../service/guias.service';

@Component({
  selector: 'app-create-guia',
  templateUrl: './create-guia.component.html',
  styleUrls: ['./create-guia.component.css']
})

export class CreateGuiaComponent {
  
  guiaTitulo: string ='' ;
  guiaContenido: string ='';

  constructor(private guiasService: GuiasService) { }

  crearGuia() {
    const guiaData = {
      titulo: this.guiaTitulo,
      contenido: this.guiaContenido
    };

    this.guiasService.crearGuia(guiaData).subscribe(response => {
      console.log('Guía creada con éxito:', response);
    }, error => {
      console.error('Error al crear la guía:', error);
    });
  }
}

