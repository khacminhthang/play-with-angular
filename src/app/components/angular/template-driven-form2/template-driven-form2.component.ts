import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven-form2',
  templateUrl: './template-driven-form2.component.html',
  styleUrls: ['./template-driven-form2.component.css']
})
export class TemplateDrivenForm2Component implements OnInit {

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
  text15: any;
  text16: any;
  text17: any;
  text18: any;
  text19: any;
  text20: any;
  text21: any;
  text22: any;
  text23: any;
  text24: any;
  text25: any;
  text26: any;
  text27: any;
  text28: any;


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
    const observer = {
      next: (val: any) => console.log(val),
      error: (err: any) => console.log(err),
      complete: () => console.log('complete'),
    };
    this.text1 = `
    <div class="container">
    <form class="sign-in-form" novalidate #signInForm="ngForm" (submit)="onSubmit(signInForm)">
      <h2>Sign in</h2>
      <div class="row-control">
        <mat-form-field appearance="outline">
          <mat-label>Username</mat-label>
          <input matInput placeholder="Username" [(ngModel)]="userInfo.userName" name="username">
        </mat-form-field>
      </div>
      <div class="row-control">
        <mat-form-field appearance="outline">
          <mat-label>Password</mat-label>
          <input type="password" matInput placeholder="Password" [(ngModel)]="userInfo.password" name="password">
        </mat-form-field>
      </div>
      <div class="row-control">
        <mat-checkbox [(ngModel)]="userInfo.rememberMe" name="rememberMe">Remember me</mat-checkbox>
      </div>
      <div class="row-control row-actions">
        <button mat-raised-button color="primary" type="submit">Sign in</button>
      </div>
  
      <pre>{{ signInForm.value | json }}</pre>
      <pre>{{ userInfo | json }}</pre>
    </form>
  </div>
    `;
    this.text2 = `
    <input
    matInput
    placeholder="Username"
    required
    minlength="6"
    maxlength="32"
    [pattern]="usernamePattern"
    [(ngModel)]="userInfo.userName"
    name="username">
    `;
    this.text3 = `
    export class SignInComponent {
      usernamePattern = /^[a-z]{6,32}$/i;
    }
      `;
    this.text4 = `
    <input
    matInput
    placeholder="Username"
    required
    minlength="6"
    maxlength="32"
    [pattern]="usernamePattern"
    #username="ngModel"
    [(ngModel)]="userInfo.userName"
    name="username">
  
  <pre>{{ username.errors | json }}</pre>
      `;
    this.text5 = `
    <mat-form-field appearance="outline">
    <mat-label>Username</mat-label>
    <input
      matInput
      placeholder="Username"
      required
      minlength="6"
      maxlength="32"
      [pattern]="usernamePattern"
      #username="ngModel"
      [(ngModel)]="userInfo.userName"
      name="username">
    <mat-error *ngIf="username.errors.required">Username is required!</mat-error>
  </mat-form-field>
      `;
    this.text6 = `
    <mat-form-field appearance="outline">
    <mat-label>Username</mat-label>
    <input
      matInput
      placeholder="Username"
      required
      minlength="6"
      maxlength="32"
      [pattern]="usernamePattern"
      #username="ngModel"
      [(ngModel)]="userInfo.userName"
      name="username">
    <mat-error *ngIf="username.errors?.required">Username is required!</mat-error>
  </mat-form-field>
      `;
    this.text7 = `
    <mat-error *ngIf="username.touched && !username.valid">
    <span *ngIf="username.errors.required">Username is required</span>
    <span *ngIf="username.errors.minlength || username.errors.maxlength">Length from 6 to 32 characters</span>
    <span *ngIf="!(username.errors.minlength || username.errors.maxlength) && username.errors.pattern">Only alphabet</span>
  </mat-error>
      `;
    this.text8 = `
    <mat-form-field appearance="outline">
    <mat-label>Password</mat-label>
    <input
      type="password"
      matInput
      placeholder="Password"
      required
      minlength="6"
      maxlength="32"
      [pattern]="passwordPattern"
      #password="ngModel"
      [(ngModel)]="userInfo.password"
      name="password">
    <mat-error *ngIf="password.touched && !password.valid">
      <span *ngIf="password.errors.required">Password is required</span>
      <span *ngIf="password.errors.minlength || password.errors.maxlength">Length from 6 to 32 characters</span>
      <span *ngIf="!(password.errors.minlength || password.errors.maxlength) && password.errors.pattern">
        Only alphabet, digit and at least one of !@#$%^&*
      </span>
    </mat-error>
  </mat-form-field>
  passwordPattern = /^(?=.*[!@#$%^&*]+)[a-z0-9!@#$%^&*]{6,32}$/;
      `;
    this.text9 = `
    <input matInput placeholder="Username" ngModel />
      `;
    this.text10 = `
    Error: If ngModel is used within a form tag, either the name attribute must be set or the form control must be defined as 'standalone' in ngModelOptions.

    Example 1: <input [(ngModel)]="person.firstName" name="first">
    Example 2: <input [(ngModel)]="person.firstName" [ngModelOptions]="{standalone: true}">
      `;
    this.text11 = `
    <input matInput placeholder="Username" ngModel name="username" />
      `;
    this.text12 = `
    <form
    class="sign-in-form"
    novalidate
    #signInForm="ngForm"
    (submit)="onSubmit(signInForm)"
  >
    <h2>Sign in</h2>
    <div class="row-control">
      <mat-form-field appearance="outline">
        <mat-label>Username</mat-label>
        <input matInput placeholder="Username" ngModel name="username" />
      </mat-form-field>
    </div>
    <div class="row-control">
      <mat-form-field appearance="outline">
        <mat-label>Password</mat-label>
        <input
          type="password"
          matInput
          placeholder="Password"
          ngModel
          name="password"
        />
      </mat-form-field>
    </div>
    <div class="row-control">
      <mat-checkbox ngModel name="rememberMe">Remember me</mat-checkbox>
    </div>
    <div class="row-control row-actions">
      <button mat-raised-button color="primary" type="submit">Sign in</button>
    </div>
  
    <pre>{{ signInForm.value | json }}</pre>
  </form>
      `;
    this.text13 = `
    onSubmit(form: NgForm) {
      // Do something awesome
      console.log(form);
      throw new Error('something went wrong');
    }
      `;
    this.text14 = `
    export class SignInComponent implements OnInit {
      userInfo = {
        userName: 'tiepphan',
        password: '',
        rememberMe: true,
      };
      constructor() {}
    
      ngOnInit(): void {}
    
      onSubmit(form: NgForm): void {
        console.log(form);
      }
    }
      `;
    this.text15 = `
    <form
    class="sign-in-form"
    novalidate
    #signInForm="ngForm"
    (submit)="onSubmit(signInForm)"
  >
    <h2>Sign in</h2>
    <div class="row-control">
      <mat-form-field appearance="outline">
        <mat-label>Username</mat-label>
        <input
          matInput
          placeholder="Username"
          [ngModel]="userInfo.userName"
          name="username"
        />
      </mat-form-field>
    </div>
    <div class="row-control">
      <mat-form-field appearance="outline">
        <mat-label>Password</mat-label>
        <input
          type="password"
          matInput
          placeholder="Password"
          [ngModel]="userInfo.password"
          name="password"
        />
      </mat-form-field>
    </div>
    <div class="row-control">
      <mat-checkbox [ngModel]="userInfo.rememberMe" name="rememberMe"
        >Remember me</mat-checkbox
      >
    </div>
    <div class="row-control row-actions">
      <button mat-raised-button color="primary" type="submit">Sign in</button>
    </div>
  
    <pre>{{ signInForm.value | json }}</pre>
    <pre>{{ userInfo | json }}</pre>
  </form>
      `;
    this.text16 = `
    <form
    class="sign-in-form"
    novalidate
    #signInForm="ngForm"
    (submit)="onSubmit(signInForm)"
  >
    <h2>Sign in</h2>
    <div class="row-control">
      <mat-form-field appearance="outline">
        <mat-label>Username</mat-label>
        <input
          matInput
          placeholder="Username"
          [(ngModel)]="userInfo.userName"
          name="username"
        />
      </mat-form-field>
    </div>
    <div class="row-control">
      <mat-form-field appearance="outline">
        <mat-label>Password</mat-label>
        <input
          type="password"
          matInput
          placeholder="Password"
          [(ngModel)]="userInfo.password"
          name="password"
        />
      </mat-form-field>
    </div>
    <div class="row-control">
      <mat-checkbox [(ngModel)]="userInfo.rememberMe" name="rememberMe"
        >Remember me</mat-checkbox
      >
    </div>
    <div class="row-control row-actions">
      <button mat-raised-button color="primary" type="submit">Sign in</button>
    </div>
  
    <pre>{{ signInForm.value | json }}</pre>
    <pre>{{ userInfo | json }}</pre>
  </form>
      `;
    this.text17 = `
    merge(
      interval(2000).pipe(mapTo('emit every 2 seconds'), take(3)),
      interval(1000).pipe(mapTo('emit every 1 second'), take(3))
    ).subscribe(observer);
    
    // output:
    // (sau 1s):
    // emit every 1 second
    // (sau 2s):
    // emit every 2 seconds
    // emit every 1 second
    // (sau 3s):
    // emit every 1 second - cái này complete, vì đã emit 3 lần rồi (take(3))
    // (sau 4s):
    // emit every 2 seconds
    // (sau 6s):
    // emit every 2 seconds - cái này complete (take(3))
    // output: 'complete'
      `;
    this.text18 = `
    merge(
      interval(1000).pipe(mapTo('first'), take(5)), // will take 5 seconds to complete
      interval(2000).pipe(mapTo('second'), take(3)), // will take 6 seconds to complete
      interval(3000).pipe(mapTo('third'), take(2)), // will take 6 seconds to complete
      2
    ).subscribe(observer);
    
    // output:
    // (sau 1s):
    // first
    // (sau 2s):
    // first
    // second
    // (sau 3s):
    // first
    // (sau 4s):
    // first
    // second
    // (sau 5s):
    // first (first complete (take(5)), third sẽ bắt đầu được subscribe)
    // (sau 6s):
    // second (second complete (take(3)))
    // (sau 8s):
    // third (vì third bắt đầu đc subscribe ở giây thứ 5)
    // (sau 11s):
    // third (third complete vì take(2))
      `;
    this.text19 = `
    const formControlValueChanges = Object.keys(this.formGroup.value).map((key) =>
    this.formGroup.get(key).valueChanges.pipe(map((value) => ({ key, value })))
  ); // ví dụ từ {firstName: 'Chau', lastName: 'Tran'} -> [Observable<{key, value}>, Observable<{key, value}>]
  merge(...formControlValueChanges).subscribe(({key, value}) => {
    if (key === 'firstName') {...};
    if (key === 'lastName') {...};
  });
      `;
    this.text20 = `
    race(
      interval(1000).pipe(mapTo('fast')),
      interval(2000).pipe(mapTo('medium')),
      interval(3000).pipe(mapTo('slow'))
    ).subscribe(observer);
    // output: fast - 1s -> fast - 1s -> fast - 1s -> fast...
      `;
    this.text21 = `
    race(
      timer(10000), // timer 10 second
      this.userClick$, // user click event
      this.componentDestroy$ // navigate -> ngOnDestroy
    )
      .pipe(takeUntil(this.componentDestroy$)) // chúng ta cũng sẽ ko muốn lắng nghe vào race nữa nếu như componentDestroy$
      .subscribe(() => this.closeBanner());
      `;
    this.text22 = `
    fromEvent(document, 'click')
    .pipe(withLatestFrom(interval(1000)))
    .subscribe(observer);
  // output:
  // - click trước 1s --- chờ đến 1s --> [MouseEvent, 0]
  // - click sau 1s -> [MouseEvent, 0];
  // - click lúc 5.5s -> [MouseEvent, 4]; // sau 5s thì giá trị gần nhất của interval(1000) là 4 (0 - 1 - 2 - 3 -4)
      `;
    this.text23 = `
    this.apiService.getSomething().pipe(withLatestFrom(this.currentLoggedInUser$));
    // các bạn gọi một API và các bạn muốn dùng kết quả của API này + với thông tin của người dùng đang đăng nhập để thực hiện nghiệp vụ ké tiếp
      `;
    this.text24 = `
    of('world').pipe(starWith('Hello')).subscribe(observer);
    // output:
    // 'Hello'
    // 'word'
    // 'complete'
      `;
    this.text25 = `
    this.books$ = this.apiService.getBooks().pipe(startWith([]));

    <ng-container *ngIf="books$ | async as books">
    <!-- vì books$ đã có startWith([]) nên giá trị của books sẽ là truthy ngay từ đầu, nên *ngIf này sẽ truthy và render bên trong ng-container ngay -->
    </ng-container>
      `;
    this.text26 = `
    of('hi', 'how are you?', 'sorry, I have to go now')
    .pipe(endWith('goodbye!'))
    .subscribe(observer);
  // output:
  // 'hi'
  // 'how are you?'
  // 'sorry, I have to go now'
  // 'goodbye!'
      `;
    this.text27 = `
    from([1, 2, 3, 4, 5])
    .pipe(
      pairwise(),
      map((prev, cur) => prev + cur)
    )
    .subscribe(observer);
  // output:
  // 3 (1 + 2)
  // 5 (2 + 3)
  // 7 (3 + 4)
  // 9 (4 + 5)
      `;
  }

  changeAge(event: any) {
    this.user.age = event.value;
  }

}
