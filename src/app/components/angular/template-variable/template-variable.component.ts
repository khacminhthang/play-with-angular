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
  text7: any;

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
    <button (click)="doSomething">Toggle</button>

    <br>
    
    <app-toggle></app-toggle>
    `;
    this.text2 = `
    <button (click)="toggleComp.toggle()">Toggle</button>

    <br>

    <app-toggle #toggleComp></app-toggle>
    `;
    this.text3 = `
  <form #nameForm="ngForm">
    <input
      type="text" class="form-control"
      required
      [(ngModel)]="model.name" name="name"
      #name="ngModel">
    <button>Submit</button>
  </form>
      `;
    this.text4 = `
    VIEW: 
    <button (click)="toggleInside()">Toggle inside class</button>
    <br>
    <br>
    
    <app-toggle #toggleComp></app-toggle>

  TS class
  export class AppComponent  {
    @ViewChild('toggleComp') toggleComp: ToggleComponent;
    toggleInside() {
      this.toggleComp.toggle();
    }
  }
      `;
    this.text5 = `
    <div #chartContainer></div>

    export class AppComponent  {
      @ViewChild('chartContainer') container: ElementRef<HTMLDivElement>;
    }
      `;
    this.text6 = `
    // View queries are set before the ngAfterViewInit callback is called.
    ViewChild(selector: string | Function | Type<any>, opts?: {
      read?: any;
      static?: boolean;
    })
      `;
    this.text7 = `
    <app-toggle></app-toggle>
    <br>
    <app-toggle></app-toggle>

    @ViewChildren(ToggleComponent) toggleList: QueryList<ToggleComponent>;

    ngAfterViewInit() {
      console.log(this.toggleList);
    }
      `;
  }

  changeAge(event: any) {
    this.user.age = event.value;
  }

}
