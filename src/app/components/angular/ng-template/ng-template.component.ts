import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-template',
  templateUrl: './ng-template.component.html',
  styleUrls: ['./ng-template.component.scss']
})
export class NgTemplateComponent implements OnInit {

  text1: any;
  text2: any;
  text3: any;
  text4: any;
  text5: any;
  text6: any;
  counter: number = 1;


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
    <div class="card">
    <div class="card-header">
        You have selected <span class="badge badge-primary">{{ counter }}</span> items.
    </div>
    <div class="card-body">
        There are <span class="badge badge-primary">{{ counter }}</span> items was selected.
    </div>
    <div class="card-footer">
        You have selected <span class="badge badge-primary">{{ counter }}</span> items.
    </div>
</div>
    `;
    this.text2 = `
    <div class="card">
    <div class="card-header">
        You have selected <ng-container [ngTemplateOutlet]="counterTmpl"></ng-container>.
    </div>
    <div class="card-body">
        There are <ng-container [ngTemplateOutlet]="counterTmpl"></ng-container> was selected.
    </div>
    <div class="card-footer">
        You have selected <ng-container [ngTemplateOutlet]="counterTmpl"></ng-container>.
    </div>
</div>

<ng-template #counterTmpl>
    <span class="badge badge-primary">{{ counter }}</span> items
</ng-template>
    `;
    this.text3 = `
    <ng-template #defaultTabButtonsTmpl>
      <div class="default-tab-buttons">
        ...
      </div>
    </ng-template>
    <ng-container *ngTemplateOutlet="headerTemplate || defaultTabButtons"></ng-container>
    ... rest of tab container component ...

    export class TabContainerComponent {
      @Input() headerTemplate: TemplateRef<any>; // Custom template provided by parent
  }
      `;
    this.text4 = `
    <ng-template #customTabButtons>
      <div class="custom-class">
        <button class="tab-button" (click)="login()">
          {{loginText}}
        </button>
        <button class="tab-button" (click)="signUp()">
          {{signUpText}}
        </button>
      </div>
    </ng-template>
    <tab-container [headerTemplate]="customTabButtons"></tab-container>      
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
