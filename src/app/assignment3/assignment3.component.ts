import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment3',
  templateUrl: './assignment3.component.html',
  styleUrls: ['./assignment3.component.css']
})
export class Assignment3Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  showSecret = false;
  log = [];

  onToggleDisplay() {
    this.showSecret = true;
    // this.log.push(this.log.length + 1);
    this.log.push(new Date());
  }
}
