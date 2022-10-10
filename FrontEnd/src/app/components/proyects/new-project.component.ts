import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
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

  constructor(private sProject: ProjectsService, private router: Router, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const project = new Projects(this.nombreP, this.descripcionP);
    this.sProject.save(project).subscribe(data => 
      {
        this.succesAlert();
        this.router.navigate(['']);
      }, err => {
        this.failAlert();
        this.router.navigate(['']);
      }
      )
  }

  onCancel(): void{
    this.router.navigate(['']);
  }

  durationInSeconds = 5;

  succesAlert(){
    this.snackBar.open('¡La carga ha sido exitosa!', 'Cerrar', {
      duration: this.durationInSeconds * 1000 });
    }

  failAlert(){
    this.snackBar.open('Ocurrió un error durante la carga', 'Cerrar', {
      duration: this.durationInSeconds * 1000 });
    }
}
