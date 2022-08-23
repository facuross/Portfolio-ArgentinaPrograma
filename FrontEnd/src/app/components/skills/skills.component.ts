import { Component, OnInit } from '@angular/core';
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

  constructor(private skillService: SkillsService, private tokenService: TokenService ) { }

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
      })
    }
  }

}
