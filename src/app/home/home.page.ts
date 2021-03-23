import { Component } from '@angular/core';
import { AuthenticationService } from '../_services/authentication.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
private user:any;
private token:any;

  constructor(
    private authenticationService:AuthenticationService
  ) {}

ngOnInit(){

console.log(this.authenticationService.getToken()) ;
console.log(this.authenticationService.getUser()) ;
console.log(this.authenticationService.loggedIn()) 
}
  logout(){
    this.authenticationService.logout();

  }
}
