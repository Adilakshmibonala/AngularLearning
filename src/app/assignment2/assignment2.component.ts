import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment2',
  templateUrl: './assignment2.component.html',
  styleUrls: ['./assignment2.component.css']
})
export class Assignment2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  userName: string = "";
  
  onUserNameInput(event: Event) {
    this.userName = (<HTMLInputElement>event.target).value;
  }

  updateUserNameToEmpty(){
    this.userName = "";
  }
}
