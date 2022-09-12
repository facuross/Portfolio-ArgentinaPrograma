import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { NewExperienciaComponent } from './components/experience/new-experiencia.component';
import { EditExperienciaComponent } from './components/experience/edit-experiencia.component';
import { NewformationComponent } from './components/formation/newformation.component';
import { EditFormationComponent } from './components/formation/edit-formation.component';
import { NewSkillComponent } from './components/skills/new-skill.component';
import { EditSkillComponent } from './components/skills/edit-skill.component';
import { NewProjectComponent } from './components/proyects/new-project.component';
import { EditProjectComponent } from './components/proyects/edit-project.component';
import { CanActivateTeamGuard } from './can-activate-team.guard';
import { AboutmeComponent } from './components/aboutme/aboutme.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'aboutme', component: AboutmeComponent },
  { path: 'nuevaexp', component: NewExperienciaComponent, canActivate: [CanActivateTeamGuard] },
  { path: 'editexp/:id', component: EditExperienciaComponent, canActivate: [CanActivateTeamGuard] },
  { path: 'nuevaedu', component: NewformationComponent, canActivate: [CanActivateTeamGuard] },
  { path: 'editedu/:id', component: EditFormationComponent, canActivate: [CanActivateTeamGuard] },
  { path: 'nuevaskill', component: NewSkillComponent, canActivate: [CanActivateTeamGuard] },
  { path: 'editskill/:id', component: EditSkillComponent, canActivate: [CanActivateTeamGuard] },
  { path: 'nuevoproject', component: NewProjectComponent, canActivate: [CanActivateTeamGuard] },
  { path: 'editproject/:id', component: EditProjectComponent, canActivate: [CanActivateTeamGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    onSameUrlNavigation: "ignore",
    anchorScrolling:'enabled',
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
