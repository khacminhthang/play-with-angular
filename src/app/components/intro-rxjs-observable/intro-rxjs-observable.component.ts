import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro-rxjs-observable',
  templateUrl: './intro-rxjs-observable.component.html',
  styleUrls: ['./intro-rxjs-observable.component.scss']
})
export class IntroRxjsObservableComponent implements OnInit {

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
    const btnjsThrottle = document.querySelector("#jsThrottle");
    const btnrxjsThrottle = document.querySelector("#rxjsThrottle");
    // PURE JS version
    let count = 0;
    let rate = 500;
    let lastClick = Date.now() - rate;
    btnjsThrottle.addEventListener('click', () => {
      if (Date.now() - lastClick >= rate) {
        console.log(Clicked ++count times);
        lastClick = Date.now();
      }
    });
    
    // RxJS version
    import { fromEvent } from 'rxjs';
    import { throttleTime, scan } from 'rxjs/operators';
    
    fromEvent(btnrxjsThrottle, 'click')
      .pipe(
        throttleTime(500),
        scan(count => count + 1, 0)
      )
      .subscribe(count => console.log(RxJS: Clicked $count times));
    `;
    this.text2 = `
    const observable = new Observable(function subscribe(observer) {
      const id = setTimeout(() => {
        observer.next('Hello Rxjs');
        observer.complete();
      }, 1000);
    });
    }
    `;
    this.text3 = `
    const observable = new Observable(function subscribe(observer) {
      const id = setTimeout(() => {
        observer.next('Hello Rxjs');
        observer.complete();
      }, 1000);
      return function unsubscribe() {
        clearTimeout(id);
      }
    });
      `;
    this.text4 = `
    const subscription = observable.subscribe({
      next: (value) => {
        console.log(value);
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {
        console.log('Done');
      }
    });
      `;
    this.text5 = `
    const subscription = observable.subscribe({
      next: (value) => {
        console.log(value);
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {
        console.log('Done');
      }
    });
    
    setTimeout(() => {
      subscription.unsubscribe();
    }, 500)
      `;
    this.text6 = `
    const observer = {
      next: x => console.log('Observer got a next value: ' + x),
      error: err => console.error('Observer got an error: ' + err),
      complete: () => console.log('Observer got a complete notification'),
    };
      `;
    this.text7 = `
    observable.subscribe(observer);
      `;
    this.text8 = `
    observable.subscribe(
      x => console.log('Observer got a next value: ' + x),
      err => console.error('Observer got an error: ' + err),
      () => console.log('Observer got a complete notification')
    );
    
    // tương đương với
    
    const observer = {
      next: x => console.log('Observer got a next value: ' + x),
      error: err => console.error('Observer got an error: ' + err),
      complete: () => console.log('Observer got a complete notification'),
    };
    
    observable.subscribe(observer);
      `;
    this.text9 = `
    observable.subscribe(
      x => console.log('Observer got a next value: ' + x),
      null,
      () => console.log('Observer got a complete notification')
    );
      `;
    this.text10 = `
    const observable = interval(1000);
const subscription = observable.subscribe(x => console.log(x));

setTimeout(() => {
  subscription.unsubscribe();
}, 5000);
      `;
    this.text11 = `
    const foo = interval(500);
    const bar = interval(700);
    
    const subscription = foo.subscribe(x => console.log('first: ' + x));
    const childSub = bar.subscribe(x => console.log('second: ' + x));
    
    subscription.add(childSub);
    
    setTimeout(() => {
      // Unsubscribes BOTH subscription and childSub
      subscription.unsubscribe();
    }, 2000);
    Summary
      `;
    this.text12 = `
    @Component({
      providers: [
        {
          provide: SomeClass,
          useExisting: OtherClass
        }
      ]
    })
      `;
    this.text13 = `
    @Component({
      providers: [
        {
          provide: SomeClass,
          useFactory: function() {
            return aValue;
          }
        }
      ]
    })
      `;
    this.text14 = `
    @Component({
      providers: [
        {
          provide: SomeToken,
          useValue: someValue
        }
      ]
    })
      `;
  }

  changeAge(event: any) {
    this.user.age = event.value;
  }

}
