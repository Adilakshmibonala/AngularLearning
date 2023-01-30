import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styleUrls: ['./string-interpolation.component.css']
})
export class StringInterpolationComponent implements OnInit {

  name: string = "Adilakshmi";
  rollNumber: number = 141938;
  constructor() { }

  ngOnInit(): void {
  }

}
