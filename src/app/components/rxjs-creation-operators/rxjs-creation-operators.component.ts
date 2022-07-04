import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rxjs-creation-operators',
  templateUrl: './rxjs-creation-operators.component.html',
  styleUrls: ['./rxjs-creation-operators.component.scss']
})
export class RxjsCreationOperatorsComponent implements OnInit {

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
    const observable = new Observable(function subscribe(observer) {
      const id = setTimeout(() => {
        observer.next('Hello Rxjs');
        observer.complete();
      }, 1000);
      return function unsubscribe() {
        clearTimeout(id);
      };
    });
    `;
    this.text2 = `
    const observer = {
      next: (val) => console.log(val),
      error: (err) => console.log(err),
      complete: () => console.log('complete'),
    };
    `;
    this.text3 = `
    // output: 'hello'
    // complete: 'complete'
    of('hello').subscribe(observer);
      `;
    this.text4 = `
    // output: [1, 2, 3]
    // complete: 'complete'
    of([1, 2, 3]).subscribe(observer);
      `;
    this.text5 = `
    // output: 1, 2, 3, 'hello', 'world', {foo: 'bar'}, [4, 5, 6]
    // complete: 'complete'
    of(1, 2, 3, 'hello', 'world', { foo: 'bar' }, [4, 5, 6]).subscribe(observer);
      `;
    this.text6 = `
    // output: 1, 2, 3
    // complete: 'complete'
    from([1, 2, 3]).subscribe(observer);
      `;
    this.text7 = `
    // output: 'h', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd'
    // complete: 'complete'
    from('hello world').subscribe(observer);
      `;
    this.text8 = `
    const map = new Map();
    map.set(1, 'hello');
    map.set(2, 'bye');
    
    // output: [1, 'hello'], [2, 'bye']
    // complete: 'complete'
    from(map).subscribe(observer);
    
    const set = new Set();
    set.add(1);
    set.add(2);
    
    // output: 1, 2
    // complete: 'complete'
    from(set).subscribe(observer);
      `;
    this.text9 = `
    // output: 'hello world'
    // complete: 'complete'
    from(Promise.resolve('hello world')).subscribe(observer);
      `;
    this.text10 = `
    const btn = document.querySelector('#btn');
    const input = document.querySelector('#input');
    
    // output (example): MouseEvent {...}
    // complete: không có gì log.
    fromEvent(btn, 'click').subscribe(observer);
    
    // output (example): KeyboardEvent {...}
    // complete: không có gì log.
    fromEvent(input, 'keydown').subscribe(observer);
      `;
    this.text11 = `
    // fromEvent() từ ví dụ trên
    // output: MouseEvent {...}
    fromEvent(btn, 'click').subscribe(observer);
    
    // fromEventPattern
    // output: MouseEvent {...}
    fromEventPattern(
      (handler) => {
        btn.addEventListener('click', handler);
      },
      (handler) => {
        btn.removeEventListener('click', handler);
      }
    ).subscribe(observer);
      `;
    this.text12 = `
    // output: 10 10
    fromEvent(btn, 'click')
      .pipe(map((ev: MouseEvent) => ev.offsetX + ' ' + ev.offsetY))
      .subscribe(observer);
    
    // fromEventPattern
    // Ở ví dụ này, chúng ta sẽ tách addHandler và removeHandler ra thành function riêng nhé
    
    function addHandler(handler) {
      btn.addEventListener('click', handler);
    }
    
    function removeHandler(handler) {
      btn.removeEventListener('click', handler);
    }
    
    // output: 10 10
    fromEventPattern(
      addHandler,
      removeHandler,
      (ev: MouseEvent) => ev.offsetX + ' ' + ev.offsetY
    ).subscribe(observer);
      `;
    this.text13 = `
    // _getHub() là hàm trả về Hub.
    const hub = this._getHub(url);
    return fromEventPattern(
      (handler) => {
        // mở websocket
        hub.connection.on(methodName, handler);
    
        if (hub.refCount === 0) {
          hub.connection.start();
        }
    
        hub.refCount++;
      },
      (handler) => {
        hub.refCount--;
        // đóng websocket khi unsubscribe
        hub.connection.off(methodName, handler);
        if (hub.refCount === 0) {
          hub.connection.stop();
          delete this._hubs[url];
        }
      }
    );
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
    this.text15 = `
    // output: sau 1 giây -> 0
    // complete: 'complete'
    timer(1000).subscribe(observer);
    
    // output: sau 1 giây -> 0, 1, 2, 3, 4, 5 ...
    timer(1000, 1000).subscribe(observer);
      `;
    this.text16 = `
    // error: 'an error'
    throwError('an error').subscribe(observer);
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
