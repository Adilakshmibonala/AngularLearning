import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {
  allowServer: boolean = false;
  serverCreationStatus: string = "No server created";
  serverName: string = "Adi";
  isServerCreated: boolean = false;

  constructor() { 
    setTimeout(
      () => {
        this.allowServer = true;
      }, 2000
    );
  }

  ngOnInit(): void {
  }

  onServerCreation() {
    this.isServerCreated = true;
    this.serverCreationStatus = "Server Created";
  }

  onServerNameInput(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
