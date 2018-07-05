import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormControl,FormsModule,Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registerPage :FormGroup 
  




  constructor(private route : Router) { }

  ngOnInit() {
    this.registerPage = new FormGroup({
      email: new FormControl('', [Validators.required,Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8) 
      ]),
      mobilenumber: new FormControl(null, [
        Validators.required,
      
        Validators.pattern('[0-9]+') ]),

    });

  }
  register(){
    console.log(this.registerPage);
    localStorage.setItem('email' , this.registerPage.value.email);
    localStorage.setItem('password',this.registerPage.value.password);
    this.route.navigate(['/login'])
  }
}