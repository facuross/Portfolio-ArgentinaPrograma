import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Projects } from 'src/app/model/projects';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css']
})
export class EditProjectComponent implements OnInit {
  project: Projects = null;

  constructor(private sProject: ProjectsService, private router: Router, private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sProject.detail(id).subscribe(data =>{
      this.project = data;
    }, err => {
      alert("No se pudo cargar")
      this.router.navigate(['']);
    }
    )
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sProject.update(id, this.project).subscribe(data =>{
      this.router.navigate([''])
    }, err =>{
      this.router.navigate(['']);
    }
    )

  }

  onCancel(): void{
    this.router.navigate(['']);
  }

}
