import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Experiencia } from 'src/app/model/experiencia';
import { SExperienciaService } from 'src/app/services/s-experiencia.service';

@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css']
})
export class NewExperienciaComponent implements OnInit {
  nombreE: string = '';
  inicio: string = '';
  fin: string = '';
  descripcionE: string = '';


  constructor(private sExperiencia: SExperienciaService, private router: Router) { }

  ngOnInit(): void {
    this.onLoad();
  }

  onCreate(): void {
    const expe = new Experiencia(this.nombreE, this.descripcionE, this.inicio, this.fin);
    if(this.inicio<= this.fin || this.fin === "Actualidad"){
    this.sExperiencia.save(expe).subscribe(
      data =>{
        alert("Experiencia agregada");
        this.router.navigate(['']);
      }, err =>{
        alert("Falló");
        this.router.navigate(['']);
      }
    )
    } else {
      alert("El año de inicio no puede ser mayor al año de finalización")
    }
  }

  onCancel(): void{
    this.router.navigate(['']);
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
  
}



