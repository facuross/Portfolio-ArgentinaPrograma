import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { SEducacionService } from 'src/app/services/s-educacion.service';

@Component({
  selector: 'app-newformation',
  templateUrl: './newformation.component.html',
  styleUrls: ['./newformation.component.css']
})
export class NewformationComponent implements OnInit {
  nombreEdu: string = '';
  inicio: string = '';
  fin: string = '';
  descripcionEdu: string = '';

  constructor(private sEducacion: SEducacionService, private router: Router) { }

  ngOnInit(): void {
    this.onLoad();
  }
  
  onCreate(){
    const edu = new Educacion(this.nombreEdu, this.inicio, this.fin, this.descripcionEdu);
    if(this.inicio<= this.fin || this.fin === "Actualidad"){
    this.sEducacion.save(edu).subscribe(
      data => {
        alert("Formación agregada")
        this.router.navigate(['']);
      }, err =>{
        alert("No se pudo guardar la formación")
        this.router.navigate(['']);
      })
    } else {
      alert("El año de inicio no puede ser mayor al año de finalización")
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
  
}
