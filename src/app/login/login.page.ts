import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../_services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

 loginForm=  new FormGroup({
  email: new FormControl('', [Validators.required, Validators.email]),
  password: new FormControl('', [Validators.required]),
});
  loading = false;
  submitted = false;
  error = '';


  constructor(
      private formBuilder: FormBuilder,
      private router: Router,
      private authenticationService: AuthenticationService
  ) { 
     if (this.authenticationService.loggedIn) { 
          this.router.navigate(['/home']);
      }
      this.loginForm = this.formBuilder.group({
        email: ['', Validators.required],
        password: ['', Validators.required]
    });

  }
  ngOnInit(): void {
    console.log(this.authenticationService.loggedIn())  

  }



onSubmit(form:FormGroup) {
  this.submitted = true;

   //stop here if form is invalid
  if (this.loginForm.invalid) {
      return;
  }

  this.loading = true;
this.authenticationService.login(form.value).subscribe(
  (data)=>{
    this.authenticationService.setToken(data["token"]);
   this.authenticationService.setUser(data["user"]);
    this.router.navigate(['/home']);
  },
  (err)=>{
    console.log(err)

  }
)
}

}
