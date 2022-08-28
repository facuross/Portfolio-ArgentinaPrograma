import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { HomeComponent } from './components/home/home.component';
import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { ServiciosService } from './services/servicios.service';
import { HttpClientModule } from '@angular/common/http';
import { ExperienceComponent } from './components/experience/experience.component';
import { FormationComponent } from './components/formation/formation.component';
import { SkillsComponent } from './components/skills/skills.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { ProyectsComponent } from './components/proyects/proyects.component';
import { FooterComponent } from './components/footer/footer.component';
import { interceptorProvider } from './services/interceptor-service';
import { NewExperienciaComponent } from './components/experience/new-experiencia.component';
import { EditExperienciaComponent } from './components/experience/edit-experiencia.component';
import { NewformationComponent } from './components/formation/newformation.component';
import { EditFormationComponent } from './components/formation/edit-formation.component';
import { NewSkillComponent } from './components/skills/new-skill.component';
import { EditSkillComponent } from './components/skills/edit-skill.component';
import { NewProjectComponent } from './components/proyects/new-project.component';
import { EditProjectComponent } from './components/proyects/edit-project.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    HomeComponent,
    AboutmeComponent,
    ExperienceComponent,
    FormationComponent,
    SkillsComponent,
    ProyectsComponent,
    FooterComponent,
    NewExperienciaComponent,
    EditExperienciaComponent,
    NewformationComponent,
    EditFormationComponent,
    NewSkillComponent,
    EditSkillComponent,
    NewProjectComponent,
    EditProjectComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    HttpClientModule,
    NgCircleProgressModule.forRoot({}),
    FormsModule
  ],
  providers: [
    ServiciosService,
    interceptorProvider
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
