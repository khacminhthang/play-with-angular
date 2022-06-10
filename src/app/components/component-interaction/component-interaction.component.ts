import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-interaction',
  templateUrl: './component-interaction.component.html',
  styleUrls: ['./component-interaction.component.scss']
})
export class ComponentInteractionComponent implements OnInit {

  text1: any;
  text2: any;
  text3: any;
  text4: any;
  text5: any;
  text6: any;

  isRedColor: boolean = true;


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
    ShowNameComponent:
    
    @Input() name: string = "";

    constructor() { }
  
    ngOnInit(): void {
    }
    `;
    this.text2 = `
    ngOnChanges(changes: SimpleChanges) {
      if ("progress" in changes) {
        if (typeof changes["progress"].currentValue !== "number") {
          const progress = Number(changes["progress"].currentValue);
          if (Number.isNaN(progress)) {
            this.progress = 0;
          } else {
            this.progress = progress;
          }
        }
      }
    }
    `;
    this.text3 = `
    <div [style.width]="”someValue”"></div>
      `;
    this.text4 = `
    [style.height.%]=”containerHeight”
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
