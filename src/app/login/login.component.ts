import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  log = {
    email : '',
    password : ''
  }
  public udata: any;

  constructor(
    private route: Router
  ) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    console.log(form)
    if (this.log.email == '') {
      alert("Please Provide Email");
    } else if (this.log.password == '') {
      alert("Please Provide Password");

    }

    else {
      if (this.log.email == localStorage.getItem('email') && this.log.password == localStorage.getItem('password')) {
        this.route.navigate(['/profile'])
      } else {
        console.log(this.log.email, this.log.password)
        console.log(localStorage.getItem('email'), localStorage.getItem('password'))
        alert("Invalid Credentials")
      }
    }
  }
}