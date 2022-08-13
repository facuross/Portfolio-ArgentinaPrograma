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
  descripcionEdu: string = '';

  constructor(private sEducacion: SEducacionService, private router: Router) { }

  ngOnInit(): void {
  }
  
  onCreate(){
    const edu = new Educacion(this.nombreEdu, this.descripcionEdu);
    this.sEducacion.save(edu).subscribe(
      data => {
        alert("Formación agregada")
        this.router.navigate(['']);
      }, err =>{
        alert("No se pudo guardar la formación")
        this.router.navigate(['']);
      })
  }
}
