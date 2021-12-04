import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  massageAlert(){
    alert("Thanks for booking show!")
  }

  constructor() { }
}
