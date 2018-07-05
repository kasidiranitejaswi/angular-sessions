import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes,Router} from "@angular/router";


import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';




const routes : Routes = [
  { path : '' , component : RegistrationComponent },
   { path : 'register' , component : RegistrationComponent },
   { path : 'login' , component : LoginComponent},
]


@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpModule,
    ReactiveFormsModule
      ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }