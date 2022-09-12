import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { SExperienciaService } from 'src/app/services/s-experiencia.service';

@Component({
  selector: 'app-edit-experiencia',
  templateUrl: './edit-experiencia.component.html',
  styleUrls: ['./edit-experiencia.component.css']
})
export class EditExperienciaComponent implements OnInit {
  expLab: Experiencia = null;
  
  constructor(private sExperiencia: SExperienciaService, private activatedRouter: ActivatedRoute, 
    private router: Router, private snackBar: MatSnackBar) { }

  ngOnInit(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.sExperiencia.detail(id).subscribe(data => {
      this.expLab = data;
    }, err =>{
      alert("Error al modificar experiencia");
      this.router.navigate(['']);
    });
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    if(this.expLab.inicio<= this.expLab.fin || this.expLab.fin === "Actualidad"){
    this.sExperiencia.update(id, this.expLab).subscribe(data =>{
      this.succesAlert();
      this.router.navigate(['']);
    }, err => {
      this.failAlert();
      this.router.navigate(['']);
    })
    } else {
      this.errorAlert();
    }
  }

  public yearList() {
    const date = new Date();
    const currentYear = date.getFullYear();
    const select = document.getElementsByName("year")[0];
    if (select.childNodes.length == 1){
      for(let i = 1991; i<=currentYear; i++){
        var option = document.createElement("option")
        option.text = i.toString();
        select.appendChild(option);
      }
    }
  }

  public endYearList() {
    const date = new Date();
    const currentYear = date.getFullYear();
    const select = document.getElementsByName("endYear")[0];
    if (select.childNodes.length == 1){
      for(let i = 1991; i<=currentYear; i++){
        var option = document.createElement("option")
        option.text = i.toString();
        select.appendChild(option);
      }
      option.text = "Actualidad"
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
