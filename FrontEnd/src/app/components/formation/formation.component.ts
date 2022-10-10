import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/model/educacion';
import { SEducacionService } from 'src/app/services/s-educacion.service';
import { TokenService } from 'src/app/services/token.service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css']
})
export class FormationComponent implements OnInit {
  educacion: Educacion[] = [];

  constructor(private sEducacion: SEducacionService, private tokenService: TokenService, private snackBar: MatSnackBar) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarEducacion();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarEducacion(): void{
    this.sEducacion.lista().subscribe(data =>{this.educacion = data;})
  }

  delete(id?:number){
    if(id != undefined){
      this.sEducacion.delete(id).subscribe(
        data => {
          this.cargarEducacion();
          this.deletedAlert();
        })
    }
  }

  durationInSeconds = 5;

  deletedAlert(){
    this.snackBar.open('¡Se ha eliminado la formación!', 'Cerrar', {
      duration: this.durationInSeconds * 1000 });
    }

  drop(event: CdkDragDrop<string[]>) {
    if(this.isLogged){
    moveItemInArray(this.educacion, event.previousIndex, event.currentIndex);
    }
  }
}
