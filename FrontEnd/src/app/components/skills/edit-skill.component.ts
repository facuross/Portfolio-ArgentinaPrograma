import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Skills } from 'src/app/model/skills';
import { SkillsService } from 'src/app/services/skills.service';

@Component({
  selector: 'app-edit-skill',
  templateUrl: './edit-skill.component.html',
  styleUrls: ['./edit-skill.component.css']
})
export class EditSkillComponent implements OnInit {
  skill: Skills = null;


  constructor(private skillService: SkillsService, private activatedRouter: ActivatedRoute,
    private router: Router, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.skillService.detail(id).subscribe(data => {
      this.skill = data;
    }, err =>{
      alert("Error al cargar skills");
      this.router.navigate(['']);
    })
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.skillService.update(id, this.skill).subscribe(data =>{
      this.succesAlert();
      this.router.navigate(['']);
    }, err => {
      this.failAlert();
      this.router.navigate(['']);
    })
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

}
