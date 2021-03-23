import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private _registerUri = "http://localhost:3000/auth/register";
  private _loginUri = "http://localhost:3000/auth/login";

  constructor(private http: HttpClient,
              private _router: Router,
              
              ) { 

              }
             
            
  noAuthHeader = { headers: new HttpHeaders({ NoAuth: 'True' }) };

login(authCredential){
return this.http.post(this._loginUri,authCredential,this.noAuthHeader);
}
register(user){
  
 return this.http.post(this._registerUri,user);
  }
  
 logout(){
localStorage.clear()


this._router.navigate(['/login']);
}


 setToken(token:string){
   localStorage.setItem("TOKEN",JSON.stringify(token));

}
 setUser(user) {
  localStorage.setItem("USER",JSON.stringify(user));


   }
 getToken(){
  let token = localStorage.getItem("TOKEN");
  if (token == null) {
      return null;
  }
  else {
      return JSON.parse(token);
  }}


 getUser() {
  let usr = localStorage.getItem("USER");
  if (usr == null) {
      return null;
  }
  else {
      return JSON.parse(usr);
  }

   
}
 loggedIn() {
   return !!localStorage.getItem("USER");
 let usr=localStorage.getItem("USER");
if(usr==null){return  null}
else return true
}

}
