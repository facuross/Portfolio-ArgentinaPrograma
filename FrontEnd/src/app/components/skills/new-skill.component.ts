import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Skills } from 'src/app/model/skills';
import { SkillsService } from 'src/app/services/skills.service';

@Component({
  selector: 'app-new-skill',
  templateUrl: './new-skill.component.html',
  styleUrls: ['./new-skill.component.css']
})
export class NewSkillComponent implements OnInit {
  title: string;
  percent: number;
  img: string;

  constructor(private skillService: SkillsService, private route: Router, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  onCreate(){
    const skill = new Skills (this.title, this.percent, this.img);
    this.skillService.save(skill).subscribe(data=>{
      this.succesAlert();
      this.route.navigate(['']);
    }, err => {
      this.failAlert();
      this.route.navigate([''])
    })
  }

  onCancel(): void{
    this.route.navigate(['']);
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
