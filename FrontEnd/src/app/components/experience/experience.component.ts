import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia';
import { SExperienciaService } from 'src/app/services/s-experiencia.service';
import { TokenService } from 'src/app/services/token.service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  expe: Experiencia[] = [];
  
  constructor(private sExperiencia: SExperienciaService, private tokenService: TokenService, private snackBar: MatSnackBar) { }

  isLogged = false;


  ngOnInit(): void {
    this.cargarExperiencia();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else {
      this.isLogged = false;
    }
  }

  cargarExperiencia(): void{
    this.sExperiencia.lista().subscribe(data => {this.expe = data;});
    
  }

  delete(id?: number){
    if(id != undefined){
      this.sExperiencia.delete(id).subscribe(
        data => {
        this.cargarExperiencia();
        this.deletedAlert();
      })
    }
  }

  durationInSeconds = 5;

  deletedAlert(){
    this.snackBar.open('¡Se ha eliminado la experiencia!', 'Cerrar', {
      duration: this.durationInSeconds * 1000 });
    }



  drop(event: CdkDragDrop<Experiencia[]>) {
    if(this.isLogged){
    moveItemInArray(this.expe, event.previousIndex, event.currentIndex);
    
  }
}
}



