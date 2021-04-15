import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: 'form.component.html',
  styleUrls: ["./form.component.scss"],
})

export class FormComponent implements OnInit {
  email = '';
  public colors = [{
    hex: "#f06a2f",
    name: "Carrot"
  }, {
    hex: "#ff134a",
    name: "Watermelon"
  }, {
    hex: "#7bc96f",
    name: "Grass"
  },
  {
    hex: "transparent",
    name: "No color"
  }];
  
  public selectedColor: string = this.colors[3].hex;
  constructor() { }

  ngOnInit() { }
}