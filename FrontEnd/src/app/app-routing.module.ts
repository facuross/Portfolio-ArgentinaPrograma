import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { NewExperienciaComponent } from './components/experience/new-experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './components/experience/edit-experiencia.component';
import { NewformationComponent } from './components/formation/newformation.component';
import { EditFormationComponent } from './components/formation/edit-formation.component';
import { NewSkillComponent } from './components/skills/new-skill.component';
import { EditSkillComponent } from './components/skills/edit-skill.component';
import { NewProjectComponent } from './components/proyects/new-project.component';
import { EditProjectComponent } from './components/proyects/edit-project.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'nuevaexp', component: NewExperienciaComponent },
  { path: 'editexp/:id', component: EditExperienciaComponent },
  { path: 'nuevaedu', component: NewformationComponent },
  { path: 'editedu/:id', component: EditFormationComponent },
  { path: 'nuevaskill', component: NewSkillComponent },
  { path: 'editskill/:id', component: EditSkillComponent },
  { path: 'nuevoproject', component: NewProjectComponent },
  { path: 'editproject/:id', component: EditProjectComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
