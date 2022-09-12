import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/services/token.service';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLogged = false;
  

  constructor(private router:Router, private tokenService: TokenService) { }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else {
      this.isLogged = false;
    }
  }

  onLogOut():void {
    this.tokenService.logOut();
    window.location.reload();
  }

  login(){
    this.router.navigate(['/login'])
  }

  logo(){
    const logo = document.querySelector('img');
    return logo.src
  }

  closeMenu(){
    const menu = document.querySelector('input');
    if (menu.checked) {
        menu.checked = false;
      };
    }
}
