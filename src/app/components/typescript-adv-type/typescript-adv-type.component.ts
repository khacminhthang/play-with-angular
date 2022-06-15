import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-typescript-adv-type',
  templateUrl: './typescript-adv-type.component.html',
  styleUrls: ['./typescript-adv-type.component.scss']
})
export class TypescriptAdvTypeComponent implements OnInit {

  text1: any;
  text2: any;
  text3: any;
  text4: any;
  text5: any;
  text6: any;
  text7: any;
  text8: any;

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
    function listen(port: unknown) {
      if (typeof port === 'string') {
        port = parseInt(port, 10);
      }
      server.listen(port);
    }
    `;
    this.text2 = `
    typeof 'string'; // string
    typeof 123; // number
    typeof true; // boolean
    typeof {}; // object
    typeof []; // object
    typeof (() => {}); // function
    typeof null; // object
    typeof undefined; // undefined
    typeof new Date(); // object
    
    typeof String; // function
    typeof Boolean; // function
    typeof NaN; // number
    
    typeof typeof 123; // string
    `;
    this.text3 = `
    function listen(port: string | number) {
      // do listen
    }
    
    listen('3000'); // ok
    listen(3000); // ok
    listen(true); // TypeError: Argument of type true is not assignable to parameter type string | number
    listen(); // TypeError: Invalid number of arguments, expected 1
      `;
    this.text4 = `
    class User {
      firstName: string;
      lastName: string;
      age: number;
      job?: string;
    
      constructor(firstName: string, lastName: string, age: number, job?: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.job = job;
      }
    }
      `;
    this.text5 = `
    function getSomething(): string | number {
      return 'string'; // works
      return 30; // works
      return true; // TypeError: Returned expression type boolean is not assignable to type string | number
    }
      `;
    this.text6 = `
    type StringOrNumber = string | number;

    function listen(port: StringOrNumber) {...}
    function getSomething(): StringOrNumber {...}
      `;
    this.text7 = `
    function merge<T1, T2>(o1: T1, o2: T2): T1 & T2 {
      return { ...o1, ...o2 };
    }
    
    merge({ foo: 'bar' }, { bar: 'foo' });
      `;
    this.text8 = `
    type StyleProp = {
      backgroundColor: string;
      color: string;
      margin: string;
      padding: string;
      ...
    }
    
    type ButtonProps = {
      onClick: (event: MouseEvent) => void;
    } & StyleProps;
    
    type TextProps = {
      fontSize: string;
      fontWeight: number;
      ...
    } & StyleProps;
      `;
  }

  changeAge(event: any) {
    this.user.age = event.value;
  }

}
