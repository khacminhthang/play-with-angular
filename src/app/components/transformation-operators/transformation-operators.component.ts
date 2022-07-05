import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transformation-operators',
  templateUrl: './transformation-operators.component.html',
  styleUrls: ['./transformation-operators.component.scss']
})
export class TransformationOperatorsComponent implements OnInit {

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
    observableInstance.pipe(
      operator1(),
      operator2(),
    )
    `;
    this.text2 = `
    const returnObservable = observableInstance.pipe(
      operator1(),
      operator2(),
    )
    `;
    this.text3 = `
    const users = [
      {id: 'ddfe3653-1569-4f2f-b57f-bf9bae542662', username: 'tiepphan', firstname: 'tiep', lastname: 'phan'},
      {id: '34784716-019b-4868-86cd-02287e49c2d3', username: 'nartc', firstname: 'chau', lastname: 'tran'},
    ];
    
    const usersVm = users.map(user => {
      return {
        ...user,
        fullname: "$user.firstname $user.lastname"
      }
    });
      `;
    this.text4 = `
    usersVm = [
      {
        id: 'ddfe3653-1569-4f2f-b57f-bf9bae542662',
        username: 'tiepphan',
        firstname: 'tiep',
        lastname: 'phan',
        fullname: 'tiep phan'
      },
      {
        id: '34784716-019b-4868-86cd-02287e49c2d3',
        username: 'nartc',
        firstname: 'chau',
        lastname: 'tran',
        fullname: 'chau tran'
      }
    ]
      `;
    this.text5 = `
    import { Observable } from 'rxjs'; 
    import { map } from 'rxjs/operators';
    
    interface User {
      id: string;
      username: string;
      firstname: string;
      lastname: string;
    }
    
    const source = new Observable<User>((observer) => {
      const users = [
        {id: 'ddfe3653-1569-4f2f-b57f-bf9bae542662', username: 'tiepphan', firstname: 'tiep', lastname: 'phan'},
        {id: '34784716-019b-4868-86cd-02287e49c2d3', username: 'nartc', firstname: 'chau', lastname: 'tran'},
      ];
    
      setTimeout(() => {
        observer.next(users[0]);
      }, 1000);
      setTimeout(() => {
        observer.next(users[1]);
        observer.complete();
      }, 3000);
    });
    
    const observer = {
      next: value => console.log(value),
      error: err => console.error(err),
      complete: () => console.log('completed'),
    };
    source.subscribe(observer);
      `;
    this.text6 = `
    import { map } from 'rxjs/operators';

    source.pipe(
      map(user => {
        return {
          ...user,
          fullname: user.firstname user.lastname
        };
      })
    ).subscribe(observer);
      `;
    this.text7 = `
    source.pipe(
      map(user => user.id)
    ).subscribe(observer);
      `;
    this.text8 = `
    import { pluck } from 'rxjs/operators';

    source.pipe(
      pluck('id')
    ).subscribe(observer);
      `;
    this.text9 = `
    const element = document.querySelector('#hover');

    const mouseover$ = fromEvent(element, 'mouseover');
    const mouseleave$ = fromEvent(element, 'mouseleave');
    
    const hover$ = merge(
      mouseover$.pipe(
        mapTo(true),
      ),
      mouseleave$.pipe(
        mapTo(false),
      )
    );
    
    hover$.subscribe(observer);
      `;
    this.text10 = `
    const button = document.querySelector('#add');

    const click$ = fromEvent(button, 'click');
    
    click$.pipe(
      scan((acc, curr) => acc + 1, 0)
    ).subscribe(observer);
      `;
    this.text11 = `
    const users$ = new Observable<User>((observer) => {
      const users = [
        {id: 'ddfe3653-1569-4f2f-b57f-bf9bae542662', username: 'tiepphan', firstname: 'tiep', lastname: 'phan', postCount: 5},
        {id: '34784716-019b-4868-86cd-02287e49c2d3', username: 'nartc', firstname: 'chau', lastname: 'tran', postCount: 22},
      ];
    
      setTimeout(() => {
        observer.next(users[0]);
      }, 1000);
      setTimeout(() => {
        observer.next(users[1]);
        observer.complete();
      }, 3000);
    });
    
    users$.pipe(
      scan((acc, curr) => acc + curr.postCount, 0)
    ).subscribe(observer);
      `;
    this.text12 = `
    users$.pipe(
      reduce((acc, curr) => acc + curr.postCount, 0)
    ).subscribe(observer);
      `;
    this.text13 = `
    users$.pipe(
      reduce((acc, curr) => [...acc, curr], [])
    ).subscribe(observer);
      `;
    this.text14 = `
    users$.pipe(
      toArray()
    ).subscribe(observer)
      `;
    this.text15 = `
    const interval$ = interval(1000);

    const click$ = fromEvent(document, 'click');
    
    const buffer$ = interval$.pipe(
      buffer(click$)
    );
    
    
    const subscribe = buffer$.subscribe(
      val => console.log('Buffered Values: ', val)
    );
    
    // output có dạng
    "Buffered Values: "
    [0, 1]
    "Buffered Values: "
    [2, 3, 4, 5, 6]
      `;
    this.text16 = `
    const source = interval(500);

    const bufferTime = source.pipe(
      bufferTime(2000)
    );
    
    const bufferTimeSub = bufferTime.subscribe(
      val => console.log('Buffered with Time:', val)
    );
    // output
    "Buffered with Time:"
    [0, 1]
    "Buffered with Time:"
    [2, 3]
    "Buffered with Time:"
    [4, 5]
    ...
      `;
    this.text17 = `
    // of()
    const now$ = of(Math.random());
    // output: 0.4146530439875191
    now$.subscribe(observer);
    // output: 0.4146530439875191
    now$.subscribe(observer);
    // output: 0.4146530439875191
    now$.subscribe(observer);
      `;
    this.text18 = `
    const now$ = defer(() => of(Math.random()));
    // output: 0.27312186273281935
    now$.subscribe(observer);
    // output: 0.7180321390218474
    now$.subscribe(observer);
    // output: 0.9626312890837065
    now$.subscribe(observer);
      `;
  }

  changeAge(event: any) {
    this.user.age = event.value;
  }
}
