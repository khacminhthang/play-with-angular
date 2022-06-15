import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-variable',
  templateUrl: './template-variable.component.html',
  styleUrls: ['./template-variable.component.scss']
})
export class TemplateVariableComponent implements OnInit {

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
  VIEW: 
    <app-user-detail
    *ngFor="let user of users"
    [user]="user"
  ></app-user-detail>

  TS class
  export class userListComponent implements OnInit {
    users = users;
    constructor() {}
    ngOnInit() {}
  }
    `;
    this.text2 = `
    VIEW: 
    <div *ngIf="user">
      <strong>{{ user.firstName }} {{ user.lastName }}</strong>
      <button (click)="handleDelete()">x</button>
    </div>

  TS class
  export class UserDetailComponent implements OnInit {
    @Input() user: user;
    constructor() {}
    ngOnInit() {}
    handleDelete() {}
  }
    `;
    this.text3 = `
    export class UserDetailComponent implements OnInit {
      @Input() user: user;
      @Output() deleteuser = new EventEmitter<user>();
      constructor() {}
      ngOnInit() {}
      handleDelete() {
        this.deleteuser.emit(this.user);
      }
    }
      `;
    this.text4 = `
    VIEW: 
  <app-user-detail
    *ngFor="let user of users"
    [user]="user"
    (deleteuser)="handleDelete($event)"
  >
  </app-user-detail>

  TS class
  export class UserListComponent implements OnInit {
    users = users;
    constructor() {}
    ngOnInit() {}
    handleDelete(user: user) {
      this.users = this.users.filter((item) => item.id !== user.id);
    }
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
