import { Component, OnInit } from '@angular/core';
import { Projects } from 'src/app/model/projects';
import { ProjectsService } from 'src/app/services/projects.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.css']
})
export class ProyectsComponent implements OnInit {
  projects: Projects[];

  constructor(private sProject: ProjectsService, private tokenService: TokenService) { }

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
    })
  }
}
}
