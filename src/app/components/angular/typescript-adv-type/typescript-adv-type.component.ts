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
  text9: any;
  text10: any;

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
    this.text9 = `
    T extends U ? X : Y;
      `;
    this.text10 = `
    Exclude
    Extract
    Readonly
    Partial
    Nullable
    Pick
    Record
    ReturnType
    Omit (Omit l?? Type Alias c???a Pick v?? Exclude)


        // Exclude/Extract
    type Exclude<T, U> = T extends U ? never : T;
    type Extract<T, U> = T extends U ? T : never;

    // Exclude: Lo???i b??? nh???ng types ??? T n???u nh?? nh???ng types n??y g??n ???????c cho U
    type SomeDiff = Exclude<'a' | 'b' | 'c', 'c' | 'd'>; // 'a' | 'b'. 'c' ???? b??? removed.

    // Extract: Lo???i b??? nh???ng types ??? T n???u nh?? nh???ng types n??y KH??NG g??n ???????c cho U
    type SomeFilter = Extract<'a' | 'b' | 'c', 'c' | 'd'>; // 'c'. 'a' v?? 'b' ???? b??? removed.

    // ho???c c?? th??? d??ng Exclude ????? t???o type alias NonNullable
    type NonNullable<T> = Exclude<T, null | undefined>; // lo???i b??? null v?? undefined t??? T

    type Readonly<T> = { readonly [P in keyof T]: T[P] }; // l??m t???t c??? c??c props trong type th??nh readonly. Eg: R???t c?? l???i khi d??ng cho Redux State.
    type Partial<T> = { [P in keyof T]?: T[P] }; // l??m t???t c??? c??c props trong type th??nh optional. Eg: R???t c?? l???i cho vi???c type 1 tham s??? khi c???n truy???n v??o 1 type n??o ???? m?? ko b???t bu???c.
    type Nullable<T> = { [P in keyof T]: T[P] | null }; // c??i n??y t????ng t??? nh?? Partial, Partial s??? tr??? v??? T[P] | undefined. C??n Nullable s??? tr??? v??? T[P] | null

    type Pick<T, K extends keyof T> = { [P in K]: T[P] };
    type Record<K extends keyof any, T> = { [P in K]: T };

    // Pick: Pick t??? trong T nh???ng type c?? key l?? K
    type Person = {
      firstName: string;
      lastName: string;
      password: string;
    };

    type PersonWithNames = Pick<Person, 'firstName' | 'lastName'>; // {firstName: string, lastName: string}

    // Record: G??n type T cho l???n l?????t t???ng key P trong K
    type ThreeStringProps = Record<'prop1' | 'prop2' | 'prop3', string>;
    // { prop1: string, prop2: string, prop3: string }

    type ReturnType<T> = T extends (...args: any[]) => infer R ? R : any;

    // ReturnType: tr??? v??? type c???a gi?? tr??? m?? function T tr??? v???.
    type Result = ReturnType<() => string>; // string

    type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

    // Omit: lo???i b??? type c?? key l?? K trong T
    type PersonWithoutPassword = Omit<Person, 'password'>; // {firstName: string, lastName: string}
      `;
  }

  changeAge(event: any) {
    this.user.age = event.value;
  }

}
