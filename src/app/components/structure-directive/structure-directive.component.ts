import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structure-directive',
  templateUrl: './structure-directive.component.html',
  styleUrls: ['./structure-directive.component.scss']
})
export class StructureDirectiveComponent implements OnInit {

  text1: any;
  text2: any;
  text3: any;
  text4: any;
  text5: any;
  text6: any;


  user: any = {
    name: "Thang",
    age: 24
  }

  ages: any = [
    { value: 10 },
    { value: 11 },
    { value: 12 },
    { value: 13 },
    { value: 14 },
    { value: 15 },
    { value: 16 },
    { value: 17 },
  ];

  employees = [
    {
      id: 1,
      firstName: "Flora",
      lastName: "Twell",
      email: "ftwell0@phoca.cz",
      gender: "Female",
      ipAddress: "99.180.237.33",
    },
    {
      id: 2,
      firstName: "Priscella",
      lastName: "Signe",
      email: "psigne1@berkeley.edu",
      gender: "Female",
      ipAddress: "183.243.228.65",
    },
    // more data
  ];

  constructor() { }

  ngOnInit(): void {
    this.text1 = `
    VIEW:
    <h2>Hello there!</h2>
    <h3>Your name: {{ user.name }}</h3>
    <p>Your name: {{ user.age }}</p>
    <div *ngIf="user.age >= 13">
      Bạn có thể xem nội dung PG-13
    </div>

    TS:
    user = {
      name: "Tiep Phan",
      age: 30,
    };
    `;
    this.text2 = `
  <div *ngIf="user.age >= 13; else noPG13">
    Bạn có thể xem nội dung PG-13
  </div>
  <ng-template #noPG13>
    <div>
      Bạn không thể xem nội dung PG-13
    </div>
  </ng-template>
    `;
    this.text3 = `
    employees = [
      {
        id: 1,
        name: "Flora",
        lastName: "Twell",
        email: "ftwell0@phoca.cz",
        gender: "Female",
        ipAddress: "99.180.237.33",
      },
      {
        id: 2,
        firstName: "Priscella",
        lastName: "Signe",
        email: "psigne1@berkeley.edu",
        gender: "Female",
        ipAddress: "183.243.228.65",
      },
      // more data
      `;
    this.text4 = `
    <div *ngFor="let e of employees">
    {{e.id}} - {{e.firstName}} {{e.lastName}}
    </div>
      `;
    this.text5 = `
  <div *ngFor="let employee of employees; index as idx; count as total">
  ({{idx}})/({{total}}): {{employee.id}} - {{employee.firstName}}
  {{employee.lastName}}
  </div>
      `;
    this.text6 = `
  <div *ngFor="”let" item of list”>
    <div *ngIf="”somethingGoood”">
      More code
    </div>
  </div>
      `;
  }

  changeAge(event: any) {
    this.user.age = event.value;
  }

}
