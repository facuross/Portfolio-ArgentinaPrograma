import { Component, OnInit } from '@angular/core';
import { Projects } from 'src/app/model/projects';
import { ProjectsService } from 'src/app/services/projects.service';
import { TokenService } from 'src/app/services/token.service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.css']
})
export class ProyectsComponent implements OnInit {
  projects: Projects[];

  constructor(private sProject: ProjectsService, private tokenService: TokenService, private snackBar: MatSnackBar) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarProyectos();
    if(this.tokenService.getToken()){
    this.isLogged = true;
  }else{
    this.isLogged = false;
  }
}

  cargarProyectos(): void{
    this.sProject.lista().subscribe(data => {this.projects = data});
  }

  delete(id: number): void {
    if(id != undefined){
    this.sProject.delete(id).subscribe(data =>{
      this.cargarProyectos();
      this.deletedAlert();
    })
  }
}

durationInSeconds = 5;

deletedAlert(){
  this.snackBar.open('¡Se ha eliminado el proyecto!', 'Cerrar', {
    duration: this.durationInSeconds * 1000 });
  }

drop(event: CdkDragDrop<string[]>) {
  if(this.isLogged){
  moveItemInArray(this.projects, event.previousIndex, event.currentIndex);
  }
  }

}
