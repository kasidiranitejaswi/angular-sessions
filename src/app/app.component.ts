import { Component, OnInit } from '@angular/core';
import { FormsModule, FormGroup, FormControl, Validators } from '@angular/forms'
import { Routes, RouterModule, Router } from "@angular/router";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  show = true;
  hidden = false;
visibility= 'visible';
toggleshow() {
    this.show = !this.show;
  }
  togglehide(){
    this.hidden = ! this.hidden;
  }
  togglevisible(){
    this.visibility =
    this.visibility == 'visible'? 'hidden':'visible';
  }
 /* tablesArray = [
    {
      "id": "0001",
      "type": "donut",
      "name": "Cake",
      "ppu": 0.55,
      "batters":
        {
          "batter":
            [
              { "id": "1001", "type": "Regular" },
              { "id": "1002", "type": "Chocolate" },
              { "id": "1003", "type": "Blueberry" },
              { "id": "1004", "type": "Devil's Food" }
            ]
        },
      "topping":
        [
          { "id": "5001", "type": "None" },
          { "id": "5002", "type": "Glazed" },
          { "id": "5005", "type": "Sugar" },
          { "id": "5007", "type": "Powdered Sugar" },
          { "id": "5006", "type": "Chocolate with Sprinkles" },
          { "id": "5003", "type": "Chocolate" },
          { "id": "5004", "type": "Maple" }
        ]
    },
    {
      "id": "0002",
      "type": "donut",
      "name": "Raised",
      "ppu": 0.55,
      "batters":
        {
          "batter":
            [
              { "id": "1001", "type": "Regular" }
            ]
        },
      "topping":
        [
          { "id": "5001", "type": "None" },
          { "id": "5002", "type": "Glazed" },
          { "id": "5005", "type": "Sugar" },
          { "id": "5003", "type": "Chocolate" },
          { "id": "5004", "type": "Maple" }
        ]
    },
    {
      "id": "0003",
      "type": "donut",
      "name": "Old Fashioned",
      "ppu": 0.55,
      "batters":
        {
          "batter":
            [
              { "id": "1001", "type": "Regular" },
              { "id": "1002", "type": "Chocolate" }
            ]
        },
      "topping":
        [
          { "id": "5001", "type": "None" },
          { "id": "5002", "type": "Glazed" },
          { "id": "5003", "type": "Chocolate" },
          { "id": "5004", "type": "Maple" }
        ]
    }
  ];*/
  public imageUrl: any = [];
  public assignedImage: any;
  public assign: boolean = false;
  public email: any; 
  public password: any;
  

  loginPage: FormGroup;

  constructor(private router: Router) { }

  ngOnInit() {
    this.imageUrl = ["./assets/images/banner_bg.png", "./assets/images/banner-img2.jpg"];
    this.assignedImage = this.imageUrl[0];
   
  }
  clickFunction() {
    this.imageUrl = ["./assets/images/banner_bg.png", "./assets/images/banner-img2.jpg"];

    this.assign ? this.assignedImage = this.imageUrl[0] : this.assignedImage = this.imageUrl[1];

    this.assign = !this.assign;
  }

}
