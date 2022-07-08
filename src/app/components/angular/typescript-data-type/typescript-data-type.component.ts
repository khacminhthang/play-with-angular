import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-typescript-data-type',
  templateUrl: './typescript-data-type.component.html',
  styleUrls: ['./typescript-data-type.component.scss']
})
export class TypescriptDataTypeComponent implements OnInit {

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
    let john = 'John';
    john = 123;
    `;
    this.text2 = `
    let someString: string;
    let someNumber: number;
    let someBoolean: boolean;
    let something: any; // có thể gán sang cho bất kỳ kiểu dữ liệu nào khác
    let someStringArray: string[]; // tương tự cho number[], boolean[], any[]
    let someObject: object;
    let someNull: null;
    let someUndefined: undefined;
    let someUnknown: unknown;
    let someNever: never; // ví dụ như một hàm throw exception
    let someTuple: [string, number];
    let someVoidFunction: () => void; // một hàm không trả về giá trị gì sau khi thực thi
    let someFunction: () => string; // một hàm trả về giá trị có type "string" sau khi thực thi
    `;
    this.text3 = `
    interface User {
      firstName: string;
      lastName: string;
      age: number;
      job?: string;
    }
    
    // hoặc dùng type. Chỉ nên dùng 1 trong 2 cho cùng 1 tên (ở đây là User)
    type User = {
      firstName: string;
      lastName: string;
      age: number;
      job?: string;
    };
    
    const john: User = {
      firstName: 'John',
      lastName: 'Doe',
      age: 20,
      job: 'Student',
    };
    const susan: User = {
      firstName: 'Sue',
      lastName: 'Smith',
      age: 40,
    };
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
    class User {
      constructor(
        public firstName: string,
        public lastName: string,
        public age: number,
        public job?: string
      ) {}
    }
      `;
    this.text6 = `
    abstract class BaseService<T> {
      protected model: Model<T>;
    
      find(): T[] {
        return this.model.findAll();
      }
    
      findOne(id: number): T {
        return this.model.findById(id);
      }
    }
    
    class DogService extends BaseService<Dog> {
      constructor(dogModel: Model<Dog>) {
        super();
        this.model = dogModel;
      }
    }
    
    class CatService extends BaseService<Cat> {
      constructor(catModel: Model<Cat>) {
        super();
        this.model = catModel;
      }
    }
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
