import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-projection',
  templateUrl: './content-projection.component.html',
  styleUrls: ['./content-projection.component.scss']
})
export class ContentProjectionComponent implements OnInit {

  text1: any;
  text2: any;
  text3: any;
  text4: any;
  text5: any;
  text6: any;

  questions = {
    question1: true,
    question2: false
  }

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
    <div
    class="toggle-wrapper"
    [class.checked]="checked"
    tabindex="0"
    (click)="toggle()"
  >
    <div class="toggle"></div>
  </div>
  <div class="toogle-label">
    <ng-content></ng-content>
  </div>
    `;
    this.text2 = `
    <app-toggle [(checked)]="questions.question1">
    <span>Question 1</span>
    </app-toggle>

    <app-toggle [(checked)]="questions.question2">
    <span>Question 2</span>
    </app-toggle>
    `;
    this.text3 = `
    <div class="toogle-label">
    <div>content 1</div>
    <ng-content></ng-content>
  </div>
  
  <div class="toogle-label">
    <div>content 2</div>
    <ng-content></ng-content>
  </div>
      `;
    this.text4 = `
    <header>
    <ng-content select=".toogle-header"></ng-content>
  </header>
  <div
    class="toggle-wrapper"
    [class.checked]="checked"
    tabindex="0"
    (click)="toggle()"
  >
    <div class="toggle"></div>
  </div>
  <div class="toogle-label">
    <ng-content select="label"></ng-content>
  </div>
  
  <div class="toggle-content">
    <ng-content></ng-content>
  </div>
      `;
    this.text5 = `
    <app-toggle [(checked)]="questions.question1">
  <h3 class="toogle-header">Header 1</h3>
  <label>Question 1</label>
  <span>Some paragraph</span>
</app-toggle>
      `;
    this.text6 = `
    <app-toggle [(checked)]="questions.question1">
    <h3 class="toogle-header">Header 1</h3>
    <label ngProjectAs="app-label">Question 1</label>
    <span>Some paragraph</span>
  </app-toggle>
      `;
  }

  changeAge(event: any) {
    this.user.age = event.value;
  }

}
