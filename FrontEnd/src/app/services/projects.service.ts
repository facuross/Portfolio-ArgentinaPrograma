import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Projects } from '../model/projects';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  URL = "https://proyecto-arg-programa.herokuapp.com/proyectos/";

  constructor(private http: HttpClient) { }

  public lista(): Observable<Projects[]>{
    return this.http.get<Projects[]>(this.URL + 'lista');
  }

  public detail(id: number): Observable<Projects>{
    return this.http.get<Projects>(this.URL + `detail/${id}`);
  }

  public save(project: Projects): Observable<any>{
    return this.http.post<any>(this.URL + 'create', project);
  }

  public update(id: number, project: Projects): Observable<any>{
    return this.http.put<any>(this.URL + `update/${id}`, project);
  }

  public delete(id: number): Observable<any>{
    return this.http.delete<any>(this.URL + `delete/${id}`);
  }


}
