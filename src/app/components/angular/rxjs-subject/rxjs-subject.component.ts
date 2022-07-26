import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rxjs-subject',
  templateUrl: './rxjs-subject.component.html',
  styleUrls: ['./rxjs-subject.component.css']
})
export class RxjsSubjectComponent implements OnInit {

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
    interval(1000)
    .pipe(map((val) => val * 2))
    .suscribe(console.log);
  // output: 0 -- 2 -- 4 -- 6 -- 8
    `;
    this.text2 = `
    fromEvent(document, 'click')
    .pipe(map(() => interval(1000)))
    .subscribe(console.log);
  // Click
  // output: Observable {}
  // Click
  // output: Observable {}
  // Click
  // output: Observable {}
    `;
    this.text3 = `
    const source = fromEvent(document, 'click').pipe(map(() => interval(1000)));

    source.pipe(mergeAll()).subscribe(console.log);
    source.pipe(switchAll()).subscribe(console.log);
    source.pipe(concatAll()).subscribe(console.log);
      `;
    this.text4 = `
    this.queryInput.valueChanges.pipe(debounceTime(500)).subscribe((query) => {
      this.apiService.filterData(query).subscribe((data) => {
        /*...*/
      });
    });
      `;
    this.text5 = `
    fromEvent(document, 'click').pipe(
      switchMap(() => interval(1000).pipe(take(10)))
    );
      `;
    this.text6 = `
    this.queryInput.valueChanges
    .pipe(
      debounceTime(500),
      switchMap((query) => this.apiService.filterData(query))
    )
    .subscribe((data) => {
      /*...*/
    });
      `;
    this.text7 = `
    fromEvent(document, 'click').pipe(
      mergeMap(() => interval(1000).pipe(take(10)))
    );
    
    // Click, subscribe {1}
    // {1}: 0 -- 1 -- 2 -- 3 -- 4
    // Click, subscribe {2}
    // {1}: 5 -- 6 -- 7 -- 8
    // {2}: 0 -- 1 -- 2 -- 3
    // Click, subscribe {3}
    // {1}: 9 -- complete {1}
    // {2}: 4 -- 5 -- 6 -- 7 -- 8 -- 9 -- complete {2}
    // {3}: 0 -- 1 -- 2 -- 3 -- 4 -- 5 -- 6 -- 7 -- 8 -- 9 -- complete {3}
      `;
    this.text8 = `
    fromEvent(document, 'click').pipe(
      concatMap(() => interval(1000).pipe(take(5))) // mình giảm từ take(10) thành take(5) để type ít hơn 😅
    );
    // Click, subscribe {1}
    // {1}: 0 -- 1 -- 2 --
    // Click, không có gì xảy ra
    // {1}: 3 -- 4 -- complete {1}
    // subscribe {2}
    // {2}: 0 -- 1
    // Click, không có gì xảy ra
    // {2}: 2 -- 3 -- 4 -- complete {2}
    // subscribe {3}
    // {3}: 0 -- 1 -- 2 -- 3 -- 4 -- complete {3}
      `;
    this.text9 = `
    from([image1, image2, image3]).pipe(
      // image1, image2, và image3 là loại dữ liệu File
      concatMap((singleImage) => this.apiService.upload(singleImage)) // upload từng image theo thứ tự
    );
      `;
    this.text10 = `
    fromEvent(document, 'click').pipe(
      map(() => axios('...')),
      concatAll()
    );
      `;
    this.text11 = `
    function log(val) {
      // helper function thôi
      console.log(val + ' emitted!!!');
      console.log('-----------------');
    }
    
    concat(
      timer(1000).pipe(mapTo('first timer'), tap(log)), // emit "first timer" sau 1 giây
      timer(5000).pipe(mapTo('second timer'), tap(log)), // emit "second timer" sau 5 giây
      timer(3000).pipe(mapTo('last timer'), tap(log)) // emit "last timer" sau 3 giây
    )
      .pipe(
        exhaustMap((c) =>
          interval(1000).pipe(
            map((v) =>  c }: v } ),
            take(4)
          )
        ) // interval(1000) này sẽ mất 4 giây để complete
      )
      .subscribe(console.log);
    
    // Sau 1 giây:
    // first timer emitted!! -- đây là hàm log
    // first timer: 0
    // first timer: 1
    // first timer: 2
    // first timer: 3 -- complete -- và lúc này 5 giây đã trôi qua
    
    // second timer emitted!! -- đây là hàm log
    // second timer: 0
    // second timer: 1
    // second timer: 2 -- lúc này 3 giây tiếp theo trôi qua
    // last timer emitted!! -- đây là hàm log
    // second timer: 3 -- complete
    // KHÔNG CÒN GÌ XẢY RA
      `;
    this.text12 = `
    fromEvent(document, 'click').pipe(switchMapTo(interval(1000).pipe(take(10))));

    fromEvent(document, 'click').pipe(mergeMapTo(interval(1000).pipe(take(10))));
    
    fromEvent(document, 'click').pipe(concatMapTo(interval(1000).pipe(take(10))));
      `;
    this.text13 = `
    const [even$, odd$] = partition(interval(1000), (x) => x % 2 === 1);
    merge(
      evens$.pipe(map((x) => even -  x } )),
      odds$.pipe(map((x) => odd -  x } ))
    ).subscribe(console.log);
    
    // even - 0
    // odd - 1
    // even - 2
    // odd - 3
    // ...
      `;
    this.text14 = `
    interval(1000)
    .pipe(
      tap((val) => console.log('before map', val)),
      map((val) => val * 2),
      tap((val) => console.log('after map', val))
    )
    .subscribe();
  
  // before map: 0
  // after map: 0
  
  // before map: 1
  // after map: 2
  
  // before map: 2
  // after map: 4
  // ...
      `;
    this.text15 = `
    fromEvent(document, 'click').pipe(delay(1000)).subscribe(console.log);

    // click
    // 1s -- MouseEvent
    // click
    // 1s -- MouseEvent
      `;
    this.text16 = `
    fromEvent(document, 'click')
    .pipe(delayWhen(() => timer(1000)))
    .subscribe(console.log);
  // click
  // 1s -- MouseEvent
  // click
  // 1s -- MouseEvent
      `;
    this.text17 = `
    this.loading = true;
    this.apiService
      .get()
      .pipe(finalize(() => (this.loading = false)))
      .subscribe();
      `;
    this.text18 = `
    of('repeated data').pipe(repeat(3)).subscribe(console.log);
    // 'repeated data'
    // 'repeated data'
    // 'repeated data'
      `;
    this.text19 = `
    fromEvent(document, 'click').pipe(timeInterval()).subscribe(console.log);
    // click
    // TimeInterval {value: MouseEvent, interval: 1000 } // nghĩa là từ lúc subscribe đến lúc click lần đầu thì mất 1s
      `;
    this.text20 = `
    interval(2000).pipe(timeout(1000)).subscribe(console.log, console.error);

    // Error { name: "TimeoutError" }
      `;
    this.text21 = `
    async function test() {
      const helloWorld = await of('hello')
        .pipe(map((val) => val + ' World'))
        .toPromise();
      console.log(helloWorld); // hello World
    }
      `;
  }

  changeAge(event: any) {
    this.user.age = event.value;
  }

}
