import { Component } from '@angular/core';
import { BlogService } from '../service/blog.service'; // Importa el servicio correcto

@Component({
  selector: 'app-create-blog',
  templateUrl: './create-blog.component.html',
  styleUrls: ['./create-blog.component.css']
})

export class CreateBlogComponent {
  
  blogTitulo: string ='';
  blogContenido: string ='';

  constructor(private blogService: BlogService) { }

  crearBlog() {
    const blogData = {
      titulo: this.blogTitulo,
      contenido: this.blogContenido
    };

    this.blogService.crearBlog(blogData).subscribe(response => {
      console.log('Blog creado con éxito:', response);
    }, error => {
      console.error('Error al crear el blog:', error);
    });
  }
}
