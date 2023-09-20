import { Component } from '@angular/core';
import { PerfilService } from '../service/perfil.service';

@Component({
  selector: 'app-edit-perfil',
  templateUrl: './edit-perfil.component.html',
  styleUrls: ['./edit-perfil.component.css']
})

export class EditPerfilComponent {
  
  perfilId: number = 0 ;
  name: string ='';
  ficha: string ='';
  description: string ='';
  email: string ='';
  phone: string ='';

  constructor(private perfilService: PerfilService) { }

  actualizarPerfil() {
    const perfilData = {
      name: this.name,
      ficha: this.ficha,
      description: this.description,
      email: this.email,
      phone: this.phone
    };

    this.perfilService.actualizarPerfil(this.perfilId, perfilData).subscribe(response => {
      console.log('Perfil actualizado con éxito:', response);
    }, error => {
      console.error('Error al actualizar el perfil:', error);
    });
  }
}
