import { Component, OnInit } from '@angular/core';
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
    private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.skillService.detail(id).subscribe(data => {
      this.skill = data;
    }, err =>{
      alert("Error al modificar formacion");
      this.router.navigate(['']);
    })
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.skillService.update(id, this.skill).subscribe(data =>{
      this.router.navigate(['']);
    }, err => {
      alert("Error al modificar experiencia");
      this.router.navigate(['']);
    })
  }

}
