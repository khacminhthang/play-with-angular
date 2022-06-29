import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.scss']
})
export class PipeComponent implements OnInit {

  text1: any;
  text2: any;
  text3: any;
  text4: any;
  text5: any;
  text6: any;
  text7: any;
  text8: any;
  text9: any;
  text14: any;
  text10: any;
  text11: any;
  text12: any;
  text13: any;
  text18: any;
  text15: any;
  text16: any;
  text17: any;
  text19: any;
  text20: any;


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
    export class PipeExampleComponent implements OnInit {
      now = "2020-06-24T09:00:00.000Z";
    }
    `;
    this.text2 = `
    <div>{{ now | date }}</div> //Jun 24, 2020 
    <div>{{ now | date:'medium'}}</div> //Jun 24, 2020, 5:00:00
    PM
    `;
    this.text3 = `
    {{ interpolated_value | pipe_name }}
      `;
    this.text4 = `
    {{ interpolated_value | pipe_name:parameter1:parameter2:...:parameterN }}
      `;
    this.text5 = `
    {{ interpolated_value | pipe_name_1 | pipe_name_2 |... | pipe_name_n }}
      `;
    this.text6 = `
    {{ itemId ? "Edit" : "Add" }}
      `;
    this.text7 = `
    interface PipeTransform {
      transform(value: any, ...args: any[]): any;
    }
      `;
    this.text8 = `
    export class AppTitlePipe implements PipeTransform {
      transform(resourceId: string): string {
        return resourceId ? "Edit" : "Add";
      }
    }
      `;
    this.text9 = `
    @Pipe({
      name: 'appTitle'
    })
    export class AppTitlePipe implements PipeTransform {
      transform(resourceId: string): string {
        return resourceId ? "Edit" : "Add";
      }
    }
      `;
    this.text10 = `
    <h2 class="ibox-title">{{ userId | appTitle }} User</h2>
      `;
    this.text11 = `
    transform(
      resourceId: string,
      addText: string = "Add",
      editText: string = "Edit"
    ): string {
      return resourceId ? editText : addText;
    }
      `;
    this.text12 = `
    {{ userId | appTitle:"Set":"Change"}}
      `;
    this.text13 = `
    export class PipeExampleComponent implements OnInit {
      userIdChangeAfterFiveSeconds = "14324";
      time$: Observable<number> = timer(0, 1000).pipe(
        map((val) => 5 - (val + 1)),
        startWith(5),
        finalize(() => {
          this.userIdChangeAfterFiveSeconds = "";
        }),
        takeWhile((val) => val >= 0)
      );
    }
      `;
    this.text14 = `
    <p>
  Set userId to empty string after {{ timer | async }} seconds, notice the text
  "Edit" will be set to "Add"
</p>
<pre ngNonBindable>{{ userIdChangeAfterFiveSeconds | appTitle}}</pre>
<div>Form title: {{ userIdChangeAfterFiveSeconds | appTitle}} User</div>
      `;
    this.text15 = `
    users: User[] = [
      {
        name: "Tiep Phan",
        age: 30
      },
      {
        name: "Trung Vo",
        age: 28
      },
      {
        name: "Chau Tran",
        age: 29
      },
      {
        name: "Tuan Anh",
        age: 16
      }
    ];
      `;
    this.text16 = `
    @Pipe({
      name: "isAdult",
    })
    export class IsAdultPipe implements PipeTransform {
      transform(arr: User[]): User[] {
        return arr.filter((x) => x.age > 18);
      }
    }
      `;
    this.text17 = `
    <div class="row">
    <div class="col-xs-6">
      <h4>Full user list</h4>
      <div *ngFor="let user of users">{{ user.name }}</div>
    </div>
    <div class="col-xs-6">
      <div class="ml-4">
        <h4>Adult user list</h4>
        <div *ngFor="let user of users | isAdult">{{ user.name }}</div>
      </div>
    </div>
  </div>
      `;
    this.text18 = `
    addUser() {
      this.users.push(this.newUser);
      this.newUser = new User()
    }
      `;
    this.text19 = `
    addUserByUpdateReference() {
      this.users = [...this.users, this.newUser];
      this.newUser = new User();
    }
      `;
    this.text20 = `
    @Pipe({
      name: 'isAdult',
      pure: false
    })
      `;
  }

  changeAge(event: any) {
    this.user.age = event.value;
  }
}
