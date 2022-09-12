import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { SEducacionService } from 'src/app/services/s-educacion.service';


@Component({
  selector: 'app-edit-formation',
  templateUrl: './edit-formation.component.html',
  styleUrls: ['./edit-formation.component.css']
})

export class EditFormationComponent implements OnInit {
  formacion: Educacion = null;


  constructor(private sEducacion: SEducacionService, private router: Router, private activatedRouter: ActivatedRoute, 
    private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sEducacion.detail(id).subscribe(data => {
      this.formacion = data;
      }, err =>{
        alert("Error al modificar formacion");
      this.router.navigate(['']);
      }); 
    this.onLoad(); 
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    if(this.formacion.inicio<= this.formacion.fin || this.formacion.fin === "Actualidad"){
      this.sEducacion.update(id, this.formacion).subscribe(data =>{
        this.succesAlert();
        this.router.navigate(['']);
        }, err => {
          this.failAlert();
        this.router.navigate(['']);
        });
    } else {
        this.errorAlert();
    }
  }

  public onLoad(){
    this.yearList();
    this.endYearList();
  }
  
  public yearList() {
    var year: string | any[] = [];
    const date = new Date();
    const currentYear = date.getFullYear();
    if (year.length === 0) {
      for(let i = 1991; i<=currentYear; i++){
        year[i-1991] = i;
      }
    this.addOptions("year", year);
    }
  }

  public endYearList() {
    var endYear: string | any[] = [];
    const date = new Date();
    const currentYear = date.getFullYear();
    if (endYear.length === 0) {
      for(let i = 1991; i<=currentYear; i++){
        endYear[i-1991] = i;
      }
    endYear[currentYear+1] = 'Actualidad';
    this.addOptions("endYear", endYear);  
    }
  }

  addOptions(domElement: any, array: any){
    var select = document.getElementsByName(domElement)[0];  
    
    for (const year in array) {
      var option = document.createElement("option");
      option.text = array[year];
      select.appendChild(option)
    }
  }

  onCancel(): void{
    this.router.navigate(['']);
  }

  durationInSeconds = 5;

  succesAlert(){
    this.snackBar.open('¡Los datos han sido modificados correctamente!', 'Cerrar', {
      duration: this.durationInSeconds * 1000 });
    }

  failAlert(){
    this.snackBar.open('Ocurrió un error durante la carga', 'Cerrar', {
      duration: this.durationInSeconds * 1000 });
    }

  errorAlert(){
    this.snackBar.open('El año de inicio debe ser menor o igual que el año de finalización', 'Cerrar', {
    duration: this.durationInSeconds * 1000 });
    } 
}
