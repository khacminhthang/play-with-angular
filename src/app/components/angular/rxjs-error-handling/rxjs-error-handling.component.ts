import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rxjs-error-handling',
  templateUrl: './rxjs-error-handling.component.html',
  styleUrls: ['./rxjs-error-handling.component.css']
})
export class RxjsErrorHandlingComponent implements OnInit {

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
    const observer = {
      next: (val) => console.log(val),
      error: (err) => console.log(err),
      complete: () => console.log('complete'),
    };
    `;
    this.text2 = `
    import { of } from "rxjs";
    import { map, catchError } from "rxjs/operators";
    const cached = [4, 5];
    of(1, 2, 3, 4, 5)
      .pipe(
        map(n => {
          if (cached.includes(n)) {
            throw new Error("Duplicated: " + n);
          }
          return n;
        }),
        catchError((err, caught) => of(err))
      )
      .subscribe(observer);
    
    /**
    * Output:
    * --1--2--3--(next: Error)--|
    */
    `;
    this.text3 = `
    forkJoin([
      of(1),
      of(2),
      throwError(new Error('401')),
    ]).subscribe(observer);
    /**
    * Output:
    * --(x: Error 401)--
    */
    
    
    // with catchError
    
    forkJoin([
      of(1),
      of(2),
      throwError(new Error('401')).pipe(
        catchError(err => of(err))
      ),
    ]).subscribe(observer);
    
    /**
    * Output:
    * --(next: [1, 2, Error 401])|--
    */
      `;
    this.text4 = `
    of(1, 2, 3, 4, 5)
    .pipe(
      map(n => {
        if (cached.includes(n)) {
          throw new Error("Duplicated: " + n);
        }
        return n;
      }),
      catchError((err, caught) => caught),
      take(10)
    )
    .subscribe(observer);
  
  /**
  * Output:
  * --1--2--3--1--2--3--1|
  */
      `;
    this.text5 = `
    const cached = [4, 5];
    of(1, 2, 3, 4, 5)
      .pipe(
        map(n => {
          if (cached.includes(n)) {
            throw new Error("Duplicated: " + n);
          }
          return n;
        }),
        retry(3)
      )
      .subscribe(observer);
    
    /**
    * Output:
    * --1--2--3--1--2--3--1--2--3--1--2--3--(x: Error)
    */
      `;
    this.text6 = `
    export function retryBackoff(
      config: number | RetryBackoffConfig
    ): <T>(source: Observable<T>) => Observable<T> {
      const {
        initialInterval,
        maxRetries = Infinity,
        maxInterval = Infinity,
        shouldRetry = () => true,
        resetOnSuccess = false,
        backoffDelay = exponentialBackoffDelay,
      } = typeof config === 'number' ? { initialInterval: config } : config;
      return <T>(source: Observable<T>) =>
        defer(() => {
          let index = 0;
          return source.pipe(
            retryWhen<T>(errors =>
              errors.pipe(
                concatMap(error => {
                  const attempt = index++;
                  return iif(
                    () => attempt < maxRetries && shouldRetry(error),
                    timer(
                      getDelay(backoffDelay(attempt, initialInterval), maxInterval)
                    ),
                    throwError(error)
                  );
                })
              )
            ),
            tap(() => {
              if (resetOnSuccess) {
                index = 0;
              }
            })
          );
        });
    }
      `;
    this.text7 = `
    import { fromEvent, timer } from 'rxjs';
    import { throwIfEmpty, takeUntil } from 'rxjs/operators';
     
    const click$ = fromEvent(document, 'click');
     
    click$.pipe(
      takeUntil(timer(1000)),
      throwIfEmpty(
        () => new Error('the document was not clicked within 1 second')
      ),
    )
    .subscribe(observer);
      `;
    this.text8 = `
    of(1, 2, 3, 4, 5, 6).pipe(
      every(x => x < 5),
    )
    .subscribe(observer);
    
    /**
    * Output:
    * ------false|
    */
      `;
    this.text9 = `
    of(1, 2, 3, 14, 5, 6).pipe(
      first(x => x > 10, false),
      map(v => Boolean(v))
    )
    .subscribe(observer);
    
    /**
    * Output:
    * ------true|
    */
      `;
    this.text10 = `
    import { iif, of } from 'rxjs';
 
    let subscribeToFirst;
    const firstOrSecond = iif(
      () => subscribeToFirst,
      of('first'),
      of('second'),
    );
     
    subscribeToFirst = true;
    firstOrSecond.subscribe(value => console.log(value));
     
    // Logs:
    // "first"
     
    subscribeToFirst = false;
    firstOrSecond.subscribe(value => console.log(value));
     
    // Logs:
    // "second"
      `;
  }

  changeAge(event: any) {
    this.user.age = event.value;
  }
}
