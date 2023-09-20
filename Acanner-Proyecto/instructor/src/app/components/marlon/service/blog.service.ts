import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient) { }

  obtenerBlogs(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:3000/blog');
  }

  obtenerBlogPorId(id: number): Observable<any> {
    return this.http.get<any>(`http://localhost:3000/blog/${id}`);
  }

  crearBlog(blog: any): Observable<any> {
    return this.http.post('http://localhost:3000/blog/create', blog);
  }

  actualizarBlog(id: number, blog: any): Observable<any> {
    return this.http.put(`http://localhost:3000/blog/edit/${id}`, blog);
  }

  eliminarBlog(id: number): Observable<any> {
    return this.http.delete(`http://localhost:3000/blog/delete/${id}`);
  }
}
