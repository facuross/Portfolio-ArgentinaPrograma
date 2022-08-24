import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/services/persona.service';
import { ServiciosService } from 'src/app/services/servicios.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit {
  persona: persona = new persona("","","","","");
  

  constructor(private datosPortfolio: ServiciosService, public perService: PersonaService, private tokenService: TokenService,
    private activatedRoute: ActivatedRoute, private router: Router, private sanitizer: DomSanitizer) { }

  isLogged = false;

  ngOnInit(): void {
    console.log(this.persona.img);
    this.perService.getPersona().subscribe(data => {this.persona = data})
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  displayStyle = "none";
  
  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }

  onUpdate(): void{
    const id = this.persona.id;
    this.perService.update(id, this.persona).subscribe(
      data =>{this.closePopup();
        console.log(this.persona.img);
      }, err =>{
        alert("No se modificaron los datos")
        this.closePopup();
      }
    );
    
  }
  
  onCancel(): void{
    this.closePopup();
    this.ngOnInit();
  }

  getSanitizeUrl(url: string){
    return this.sanitizer.bypassSecurityTrustUrl(url);
    
  }

}
