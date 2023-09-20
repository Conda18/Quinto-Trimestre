import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateBlogComponent } from './create-blog/create-blog.component';
import { EditBlogComponent } from './edit-blog/edit-blog.component';
import { IndexBlogComponent } from './index-blog/index-blog.component';
import { IndexAsistenciaComponent } from './index-asistencia/index-asistencia.component';
import { CreateAsistenciaComponent } from './create-asistencia/create-asistencia.component';
import { EditAsistenciaComponent } from './edit-asistencia/edit-asistencia.component';
import { IndexGuiasComponent } from './index-guias/index-guias.component';
import { CreateGuiasComponent } from './create-guias/create-guias.component';
import { EditGuiasComponent } from './edit-guias/edit-guias.component';
import { IndexHorariosComponent } from './index-horarios/index-horarios.component';
import { CreateHorariosComponent } from './create-horarios/create-horarios.component';
import { EditHorariosComponent } from './edit-horarios/edit-horarios.component';
import { IndexPerfilComponent } from './index-perfil/index-perfil.component';
import { EditPerfilComponent } from './edit-perfil/edit-perfil.component';



@NgModule({
  declarations: [
    CreateBlogComponent,
    EditBlogComponent,
    IndexBlogComponent,
    IndexAsistenciaComponent,
    CreateAsistenciaComponent,
    EditAsistenciaComponent,
    IndexGuiasComponent,
    CreateGuiasComponent,
    EditGuiasComponent,
    IndexHorariosComponent,
    CreateHorariosComponent,
    EditHorariosComponent,
    IndexPerfilComponent,
    EditPerfilComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MarlonModule { }
