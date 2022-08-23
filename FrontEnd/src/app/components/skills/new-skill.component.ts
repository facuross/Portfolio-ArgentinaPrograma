import { Component, OnInit } from '@angular/core';
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

  constructor(private skillService: SkillsService, private route: Router) { }

  ngOnInit(): void {
  }

  onCreate(){
    const skill = new Skills (this.title, this.percent);
    this.skillService.save(skill).subscribe(data=>{
      alert("Skill agregada")
      this.route.navigate(['']);
    }, err => {
      alert("No se pudo agregar la skill")
      this.route.navigate([''])
    })
  }

}
