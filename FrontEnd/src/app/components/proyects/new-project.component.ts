import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Projects } from 'src/app/model/projects';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css']
})
export class NewProjectComponent implements OnInit {
  nombreP: string = "";
  descripcionP: string = "";

  constructor(private sProject: ProjectsService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const project = new Projects(this.nombreP, this.descripcionP);
    this.sProject.save(project).subscribe(data => 
      {
        alert('Proyecto agregado');
        this.router.navigate(['']);
      }, err => {
        alert('No se pudo agregar el proyecto');
        this.router.navigate(['']);
      }
      )
  }

  onCancel(): void{
    this.router.navigate(['']);
  }





}
