import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rxjs-filtering-operators',
  templateUrl: './rxjs-filtering-operators.component.html',
  styleUrls: ['./rxjs-filtering-operators.component.scss']
})
export class RxjsFilteringOperatorsComponent implements OnInit {

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
    from([1, 2, 3, 4, 5, 6])
    .pipe(
      filter((x) => x % 2 === 0) // số chẵn
    )
    .subscribe(console.log); // output: 2, 4, 6
    `;
    this.text2 = `
    from([1, 2, 3, 4, 5, 6])
    .pipe(first())
    .subscribe(console.log, null, () => console.log('complete')); // output: 1 -> complete
  
  of() // an empty Observable
    .pipe(first())
    .subscribe(null, console.log, null); // Error: EmptyError
    `;
    this.text3 = `
    from([1, 2, 3, 4, 5, 6])
    .pipe(first((x) => x > 3))
    .subscribe(console.log, null, () => console.log('complete')); // output: 4 -> complete
  
  from([1, 2, 3, 4, 5, 6])
    .pipe(first((x) => x > 6)) // without default value
    .subscribe(null, console.log, null); // Error: Error
  
  from([1, 2, 3, 4, 5, 6])
    .pipe(
      first((x) => x > 6),
      'defaultValue'
    ) // with default value
    .subscribe(console.log, null, () => console.log('complete')); // output: 'defaultValue' -> complete
      `;
    this.text4 = `
    from([1, 2, 3, 4, 5, 6])
    .pipe(last())
    .subscribe(console.log, null, () => console.log('complete')); // output: 6 -> complete
  
  of() // an empty Observable
    .pipe(last())
    .subscribe(null, console.log, null); // Error: EmptyError
      `;
    this.text5 = `
    from([1, 2, 3, 4, 5, 6])
    .pipe(
      find((x) => x % 2 === 0) // số chẵn
    )
    .subscribe(console.log, null, () => console.log('complete')); // output: 2 -> complete
      `;
    this.text6 = `
    from([1, 2, 3]).pipe(single()).subscribe(null, console.log, null); // error: Error -> nhiều hơn 1 giá trị được emit từ from() và single() không có điều kiện gì.

    from([1, 2, 3])
      .pipe(single((x) => x === 2))
      .subscribe(console.log, null, () => console.log('complete')); // output: 2 -> complete
    
    from([1, 2, 3])
      .pipe(single((x) => x > 1))
      .subscribe(null, console.log, null); // error: Error -> có nhiều hơn 1 giá trị > 1.
      `;
    this.text7 = `
    from([1, 2, 3, 4])
    .pipe(take(2))
    .subscribe(console.log, null, () => console.log('complete')); // output: 1, 2 -> complete
      `;
    this.text8 = `
    from([1, 2, 3, 4])
    .pipe(takeLast(2))
    .subscribe(console.log, null, () => console.log('complete')); // output: 3, 4 -> complete
      `;
    this.text9 = `
    interval(1000)
    .pipe(takeUntil(fromEvent(document, 'click')))
    .subscribe(console.log, null, () => console.log('complete')); // output: 0, 1, 2, 3, 4 -- click --> 'complete'
      `;
    this.text10 = `
    interval(1000)
    .pipe(takeWhile((x) => x < 6))
    .subscribe(console.log, null, () => console.log('complete')); // output: 0, 1, 2, 3, 4, 5 --> complete
      `;
    this.text11 = `
    from([1, 2, 3, 4])
    .pipe(skip(1))
    .subscribe(console.log, null, () => console.log('complete')); // output: 2, 3, 4 --> complete
      `;
    this.text12 = `
    interval(1000)
    .pipe(skipUntil(fromEvent(document, 'click')))
    .subscribe(console.log); // output: click at 5 seconds -> 5, 6, 7, 8, 9....
      `;
    this.text13 = `
    interval(1000)
    .pipe(skipWhile((x) => x < 5))
    .subscribe(console.log); // output: 6, 7, 8, 9....
      `;
    this.text14 = `
    from([1, 2, 3, 4, 5, 5, 4, 3, 6, 1])
    .pipe(distinct())
    .subscribe(console.log, null, () => console.log('complete')); // output: 1, 2, 3, 4, 5, 6 -> complete
      `;
    this.text15 = `
    of({ age: 4, name: 'Foo' }, { age: 7, name: 'Bar' }, { age: 5, name: 'Foo' })
    .pipe(distinct((p) => p.name))
    .subscribe(console.log, null, () => console.log('complete')); // output: { age: 4, name: 'Foo' }, { age: 7, name: 'Bar' } -> complete
      `;
    this.text16 = `
    from([1, 1, 2, 2, 2, 1, 1, 2, 3, 3, 4])
    .pipe(distinctUntilChanged())
    .subscribe(console.log, null, () => console.log('complete')); // output: 1, 2, 1, 2, 3, 4 -> complete
      `;
    this.text17 = `
    of(
      { age: 4, name: 'Foo' },
      { age: 6, name: 'Foo' },
      { age: 7, name: 'Bar' },
      { age: 5, name: 'Foo' }
    )
      .pipe(distinctUntilChanged((a, b) => a.name === b.name))
      .subscribe(console.log, null, () => console.log('complete')); // output: { age: 4, name: 'Foo' }, { age: 7, name: 'Bar' }, { age: 5, name: 'Foo' } -> complete
      `;
    this.text18 = `
    of(
      { age: 4, name: 'Foo' },
      { age: 6, name: 'Foo' },
      { age: 7, name: 'Bar' },
      { age: 5, name: 'Foo' }
    )
      .pipe(distinctUntilKeyChanged('name')
      .subscribe(console.log, null, () => console.log('complete')); // output: { age: 4, name: 'Foo' }, { age: 7, name: 'Bar' }, { age: 5, name: 'Foo' } -> complete
      `;
    this.text19 = `
    fromEvent(document, 'mousemove')
    .pipe(throttleTime(1000))
    .subscribe(console.log, null, () => console.log('complete')); // output: MouseEvent {} - wait 1s -> MouseEvent { } - wait 1s -> MouseEvent { }
      `;
    this.text20 = `
    this.filterControl.valueChanges.pipe(debounceTime(500)).subscribe(console.log); // output: type "abcd" rồi dừng 500ms -> 'abcd'
      `;
    this.text21 = `
    fromEvent(document, 'click').pipe(auditTime(1000)).subscribe(console.log); // output: click - wait 1s -> MouseEvent {} -click  wait 1s (trong 1s, click 10 times) -> MouseEvent {} -> click wait 1s -> MouseEvent {}
      `;
    this.text22 = `
    fromEvent(document, 'click').pipe(sampleTime(1000)).subscribe(console.log); // click - wait 1s -> MouseEvent {}
      `;
  }

  changeAge(event: any) {
    this.user.age = event.value;
  }

}
