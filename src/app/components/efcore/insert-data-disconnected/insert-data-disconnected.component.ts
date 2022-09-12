import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-insert-data-disconnected',
  templateUrl: './insert-data-disconnected.component.html',
  styleUrls: ['./insert-data-disconnected.component.css']
})
export class InsertDataDisconnectedComponent implements OnInit {

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
    //Disconnected entity
    var std = new Student(){ Name = "Bill" };
    
    using (var context = new SchoolContext())
    {
        //1. Attach an entity to context with Added EntityState
        context.Add<Student>(std);
        
        //or the followings are also valid
        // context.Students.Add(std);
        // context.Entry<Student>(std).State = EntityState.Added;
        // context.Attach<Student>(std);
                      
        //2. Calling SaveChanges to insert a new record into Students table
        context.SaveChanges();
    }
    `;
    this.text2 = `
    exec sp_executesql N'SET NOCOUNT ON;
    INSERT INTO [Students] ([Name])
    VALUES (@p0);
    SELECT [StudentId]
    FROM [Students]
    WHERE @@ROWCOUNT = 1 AND [StudentId] = scope_identity();',N'@p0 nvarchar(4000), 
    @p1 nvarchar(4000) ',@p0=N'Bill'
    go
    `;
    this.text3 = `
    var stdAddress = new StudentAddress()
    {
        City = "SFO",
        State = "CA",
        Country = "USA"
    };
    
    var std = new Student()
    {
        Name = "Steve",
        Address = stdAddress
    };
    using (var context = new SchoolContext())
    {
        // Attach an entity to DbContext with Added state
        context.Add<Student>(std);
    
        // Calling SaveChanges to insert a new record into Students table
        context.SaveChanges();
    }
      `;
    this.text4 = `
    exec sp_executesql N'SET NOCOUNT ON;
    INSERT INTO [Students] ([Name])
    VALUES (@p0);
    SELECT [StudentId]
    FROM [Students]
    WHERE @@ROWCOUNT = 1 AND [StudentId] = scope_identity();',N'@p0 nvarchar(4000), 
    @p1 nvarchar(4000) ',@p0=N'Steve'
    go
    
    exec sp_executesql N'SET NOCOUNT ON;
    INSERT INTO [StudentAddresses] ([Address], [City], [Country], [State], [StudentId])
    VALUES (@p5, @p6, @p7, @p8, @p9);
    SELECT [StudentAddressId]
    FROM [StudentAddresses]
    WHERE @@ROWCOUNT = 1 AND [StudentAddressId] = scope_identity();
    ',N'@p5 nvarchar(4000),@p6 nvarchar(4000),@p7 nvarchar(4000),@p8 nvarchar(4000),
    @p9 int',@p5=NULL,@p6=N'SFO',@p7=N'USA',@p8=N'CA',@p9=1
    Go
      `;
    this.text5 = `
    var studentList = new List<Student>() {
      new Student(){ Name = "Bill" },
      new Student(){ Name = "Steve" }
  };
  
  using (var context = new SchoolContext())
  {
      context.AddRange(studentList);
      context.SaveChanges();
  }
      `;
    this.text6 = `
    var std1 = new Student(){ Name = "Bill" };

    var std2 = new Student(){ Name = "Steve" };
    
    var computer = new Course() { CourseName = "Computer Science" };
    
    var entityList = new List<Object>() {
        std1,
        std2,
        computer
    };
    
    using (var context = new SchoolContext())
    {                
        context.AddRange(entityList);
    
        // or 
        // context.AddRange(std1, std2, computer);
    
        context.SaveChanges();
    }
      `;
    this.text7 = `
    exec sp_executesql N'SET NOCOUNT ON;
    INSERT INTO [Courses] ([CourseName], [Description])
    VALUES (@p0, @p1);
    SELECT [CourseId]
    FROM [Courses]
    WHERE @@ROWCOUNT = 1 AND [CourseId] = scope_identity();
    
    DECLARE @inserted1 TABLE ([StudentId] int, [_Position] [int]);
    MERGE [Students] USING (
    VALUES (@p2, 0),
    (@p3, 1)) AS i ([Name], _Position) ON 1=0
    WHEN NOT MATCHED THEN
    INSERT ([Name])
    VALUES (i.[Name])
    OUTPUT INSERTED.[StudentId], i._Position
    INTO @inserted1;
    
    SELECT [t].[StudentId] FROM [Students] t
    INNER JOIN @inserted1 i ON ([t].[StudentId] = [i].[StudentId])
    ORDER BY [i].[_Position];
    ',N'@p0 nvarchar(4000),@p1 nvarchar(4000),@p2 nvarchar(4000),@p3 nvarchar(4000)',
    @p0=N'Computer Science',@p1=NULL,@p2=N'Steve',@p3=N'Bill'
    go
      `;
    this.text8 = `
    var std = new Student()
    {
        Name = "Bill"
    };
    
    using (var context = new SchoolContext())
    {
        context.Students.Add(std);
    
        // or
        // context.Students.Attach(std);
    
        context.SaveChanges();
    }
      `;
    this.text9 = `
    var context = new SchoolContext();

    var student = context.Students.Where(s => s.FirstName == "Bill")
                            .Include(s => s.Grade)
                                .ThenInclude(g => g.Teachers)
                            .FirstOrDefault(); 
      `;
    this.text10 = `
    SELECT TOP(1) [s].[StudentId], [s].[DoB], [s].[FirstName], [s].[GradeId], [s].[LastName],
    [s].[MiddleName], [s.Grade].[GradeId], [s.Grade].[GradeName], [s.Grade].[Section]
FROM [Students] AS [s]
LEFT JOIN [Grades] AS [s.Grade] ON [s].[GradeId] = [s.Grade].[GradeId]
WHERE [s].[FirstName] = N'Bill'
ORDER BY [s.Grade].[GradeId]
Go

SELECT [s.Grade.Teachers].[TeacherId], [s.Grade.Teachers].[GradeId], [s.Grade.Teachers].[Name]
FROM [Teachers] AS [s.Grade.Teachers]
INNER JOIN (
SELECT DISTINCT [t].*
FROM (
   SELECT TOP(1) [s.Grade0].[GradeId]
   FROM [Students] AS [s0]
   LEFT JOIN [Grades] AS [s.Grade0] ON [s0].[GradeId] = [s.Grade0].[GradeId]
   WHERE [s0].[FirstName] = N'Bill'
   ORDER BY [s.Grade0].[GradeId]
) AS [t]
) AS [t0] ON [s.Grade.Teachers].[GradeId] = [t0].[GradeId]
ORDER BY [t0].[GradeId]
go
      `;
    this.text11 = `
    var context = new SchoolContext();

    var stud = context.Students.Where(s => s.FirstName == "Bill")
                            .Select(s => new
                            {
                                Student = s,
                                Grade = s.Grade,
                                GradeTeachers = s.Grade.Teachers
                            })
                            .FirstOrDefault();
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
