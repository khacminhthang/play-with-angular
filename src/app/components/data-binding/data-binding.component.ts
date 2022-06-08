import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {

  text1: any;
  text2: any;
  text3: any;
  constructor() { }

  ngOnInit(): void {
    this.text1 = `
    View:
    <h2>Hello there!</h2>
    <h3>Your name: {{ user.name }}</h3>
    <p>Your name: {{ user.age }}</p>
    Ts file:
    export class HelloComponent {
      user = {
        name: "Minh Thang",
        age: 30,
      };
    `;
    this.text2 = `
    obj = {
      type: 'text', // HTML property
      value: 'something', // HTML property
      attributes: [] // thuộc type NamedNodeMap, dạng như một array
      // … các thuộc tính, method khác
  }
    `;
    this.text3 = `
    <input type="text" [value]="user.name" />`;
  }

}
