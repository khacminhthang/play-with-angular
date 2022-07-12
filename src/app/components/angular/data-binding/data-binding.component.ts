import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {

  name: string = "Minh Thang";
  name2way: string = "Minh Thang";
  text1: any;
  text2: any;
  text3: any;
  text4: any;
  text5: any;
  listName = ["Nam", "Quỳnh", "Hòa", "Tuấn Anh", "Dũng"];
  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(async (value: any) => {
      console.log(this.activatedRoute.snapshot.paramMap.get("id2"), 'id2');
    });
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
    <input type="text" [value]="name" />`;

    this.text4 = `
    Template:
    <h2>Hello there!</h2>
    <button (click)="showInfo()">Click me!</button>
    
    TS:
    showInfo() {
      alert("Inside Angular Component method");
    }
    `;

    this.text5 = `
    Two-way binding:
    <input type="text" [(ngModel)]="name" />
    
    Tương ứng với: 
    <input type="text" [ngModel]="name" (ngModelChange)="name = $event" />
    `;
  }

  randomeName() {
    let random = Math.floor(Math.random() * 4);
    this.name = this.listName[random];
  }

  showInfo() {
    alert("Bạn vừa bấm vào button Click me!");
  }

}
