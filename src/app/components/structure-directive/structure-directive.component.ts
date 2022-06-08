import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structure-directive',
  templateUrl: './structure-directive.component.html',
  styleUrls: ['./structure-directive.component.scss']
})
export class StructureDirectiveComponent implements OnInit {

  text1: any;
  text2: any;


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
  }

  changeAge(event: any) {
    this.user.age = event.value;
  }

}
