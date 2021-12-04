import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  public name="";
  public card="";
  public date="";
  public cvv="";
  

  constructor() { }

  ngOnInit(): void {
  }

}
