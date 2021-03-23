import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../_services/authentication.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {

  registerForm=  new FormGroup({
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
        // redirect to home if already logged in
       /* if (this.authenticationService.loggedIn) { 
            this.router.navigate(['/home']);
        }*/
        this.registerForm = this.formBuilder.group({
          email: ['', Validators.required],
          password: ['', Validators.required]
      });
      
    }
    ngOnInit(): void {
    }
  
  
  
  onSubmit(form:FormGroup) {
    this.submitted = true;
  
     //stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }
  
    this.loading = true;
  this.authenticationService.register(form.value).subscribe(
    (data)=>{
  console.log(data["user"]);

  this.router.navigate(['/login']);
},
    (err)=>{
  
    }
  )
  }
}
