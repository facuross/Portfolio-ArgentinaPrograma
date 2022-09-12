import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Skills } from 'src/app/model/skills';
import { SkillsService } from 'src/app/services/skills.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
skills: Skills[] = [];

  constructor(private skillService: SkillsService, private tokenService: TokenService, private snackBar: MatSnackBar ) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarSkills();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else {
      this.isLogged = false;
    }
  }

  cargarSkills(){
    this.skillService.lista().subscribe(data => {this.skills = data});
  }

  delete(id?: number){
    if(id != undefined){
      this.skillService.delete(id).subscribe(
        data => {
        this.cargarSkills();
        this.deletedAlert();
      })
    }
  }

  durationInSeconds = 5;

  deletedAlert(){
    this.snackBar.open('¡Se ha eliminado la skill!', 'Cerrar', {
      duration: this.durationInSeconds * 1000 });
    }

}
