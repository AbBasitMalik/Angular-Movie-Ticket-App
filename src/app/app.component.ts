
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormControl,FormGroup, Validators} from '@angular/forms'
import { AlertService } from './alert.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {
  title = 'froms';


  movies = ['No Time to Die 2021','Dune (2021)','The French Dispatch','The Dig (2021)','Nomadland (2020)','The Father'];
  seats = ['VIP CINEMA SEATING','VIP Kids Sofa','PREMIUM GLIDER','FULL ROCKER','SWING BACK/GLIDER,','PLANETARIUM SEATING'];
   
  ngOnInit(): void {
  }

  //  for validations:
  selectForm= new FormGroup({
    user: new FormControl('',Validators.required),
    email: new FormControl('',Validators.required),
    phone: new FormControl('',Validators.required)

  })

  get email(){return this.selectForm.get('email')}


// for input referance variable:
  logInput1(value:any){
      console.log(value);
    }
    logInput2(value:any){
      console.log(value);
    }
    logInput3(value:any){
      console.log(value);
    }
    logInput4(value:any){
      console.log(value);
    }
    logInput5(value:any){
      console.log(value);
    }
    logInput6(value:any){
      console.log(value);
    }
    logInput7(value:any){
      console.log(value);
    }
    
    btnClick(){
      const artService = new AlertService();
      artService.massageAlert()
    }
  
}
