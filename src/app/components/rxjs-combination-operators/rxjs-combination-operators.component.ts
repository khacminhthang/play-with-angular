import { Component, OnInit } from '@angular/core';
import { of, zip } from 'rxjs';

@Component({
  selector: 'app-rxjs-combination-operators',
  templateUrl: './rxjs-combination-operators.component.html',
  styleUrls: ['./rxjs-combination-operators.component.css']
})
export class RxjsCombinationOperatorsComponent implements OnInit {
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
    zip(of(1, 2, 3, 99), of(4, 5, 6), of(7, 8, 9)).subscribe(observer)
    this.text1 = `
    const observer = {
      next: (val) => console.log(val),
      error: (err) => console.log(err),
      complete: () => console.log('complete'),
    };
    `;
    this.text2 = `
    forkJoin([of(1), of('hello'), of({ foo: 'bar' })]).subscribe(observer);
    // output: [1, 'hello', {foo: 'bar'}]
    // output: 'complete'
    
    forkJoin({ one: of(1), hello: of('hello'), foo: of({ foo: 'bar' }) }).subscribe(
      observer
    );
    /**
     * output:
     * {
     *   one: 1,
     *   hello: 'hello',
     *   foo: { foo: 'bar' }
     * }
     * output: 'complete'
     */
    `;
    this.text3 = `
    forkJoin([
      this.apiService.getAccountDropdown(),
      this.apiService.getDepartmentDropdown(),
      this.apiService.getStoreDropdown(),
    ]).subscribe(observer);
    // output: [accountList, departmentList, storeList]
    // output: 'complete'
      `;
    this.text4 = `
    forkJoin(
      [
        this.apiService.getAccountDropdown(),
        this.apiService.getDepartmentDropdown(),
        this.apiService.getStoreDropdown(),
      ],
      (accountList, departmentList, storeList) => {
        return {
          accounts: accountList,
          departments: departmentList,
          stores: storeList,
        };
      }
    ).subscribe(observer);
    // output: { accounts: [...], departments: [...], stores: [...] }
    // output: 'complete'
      `;
    this.text5 = `
    combineLatest([
      interval(2000).pipe(map((x) => First:  x})), // {1}
      interval(1000).pipe(map((x) => Second: x})), // {2}
      interval(3000).pipe(map((x) => Third:  x})), // {3}
    ]).subscribe(observer);
    
    // output:
    // sau 3s, vì interval(3000) có khoảng thời gian dài nhất:
    // [First 0, Second 2, Third 0] -- vì sao? vì tại 3s, thì {2} đã emit đc 3 lần rồi (3s, mỗi giây nhảy từ 0 -> 1 -> 2)
    
    // sau 1s kế tiếp: (giây thứ 4)
    // [First 1, Second 2, Third 0] -- vì sao? vì lúc này là giây thứ 4, {1} đã emit đc 2 lần (4s, mỗi 2 giây nhảy từ  0 -> 1)
    // [First 1, Second 3, Third 0] -- vì sao? vì lúc này là giây thứ 4, {2} đã emit đc lần thứ 4 (0 -> 1 -> 2 -> 3)
    
    // sau 1s kế tiếp: (giây thứ 5)
    // [First 1, Second 4, Third 0] -- {2} emit lần thứ 5
    
    // sau 1s kế tiếp: (giây thứ 6)
    // [First 2, Second 4, Third 0] -- {1} emit lần thứ 3
    // [First 2, Second 5, Third 0] -- {2} emit lần thứ 6
    // [First 2, Second 5, Third 1] -- {3} emit lần thứ
      `;
    this.text6 = `
    this.vm$ = combineLatest([
      this.paginationService.currentPage$,
      this.paginationService.currentSize$,
      this.paginationService.totalCount$,
      this.paginationService.currentOffset$,
    ]).pipe(
      map((currentPage, currentSize, totalCount, currentOffset) => {
        return {
          currentPage,
          currentSize,
          totalCount,
          currentOffset,
        };
      })
    );
    
    onSizeChanged(newSize: number) {
      this.paginationService.updateSize(newSize);
    }
    
    onPageChanged(newPage: number) {
      this.paginationService.updatePage(newPage);
    }
      `;
    this.text7 = `
    <ng-container *ngIf="vm$ | async as vm">
    <app-show-total
      [offset]="vm.currentOffset"
      [total]="vm.totalCount"
      [size]="vm.currentSize"
    ></app-show-total>
    <!-- Display: 1 - 20 of 100 -->
    <app-paginator
      [current]="vm.currentPage"
      [total]="vm.totalCount"
      [size]="vm.currentSize"
      (sizeChanged)="onSizeChanged($event)"
      (pageChanged)="onPageChanged($event)"
    ></app-paginator>
  </ng-container>
      `;
    this.text8 = `
    this.vm$ = combineLatest(
      [
        this.paginationService.currentPage$,
        this.paginationService.currentSize$,
        this.paginationService.totalCount$,
        this.paginationService.currentOffset$,
      ],
      (currentPage, currentSize, totalCount, currentOffset) => {
        return {
          currentPage,
          currentSize,
          totalCount,
          currentOffset,
        };
      }
    );
      `;
    this.text9 = `
    combineLatest(of(1, 2, 3), of(4, 5, 6), of(7, 8, 9)).subscribe(observer);
    // [1, 4, 7], // cả 3 emit
    // [2, 4, 7], // obs1 emit 2, combineLatest emit giá trị 2 của obs1 và 2 giá trị cũ của obs2 và obs3
    // ...        // sau 1 loạt emit
    // [3, 6, 9]
      `;
    this.text10 = `
    zip(of(1, 2, 3), of(4, 5, 6), of(7, 8, 9)).subscribe(observer);
    // [1, 4, 7]; // 3 số đầu tiên ở từng observable
    // [2, 5, 8]; // 3 số tiếp theo
    // [3, 6, 9]; // 3 số cuối cùng
      `;
    this.text11 = `
    zip(of(1, 2, 3, 99), of(4, 5, 6), of(7, 8, 9)).subscribe(observer);
    // [1, 4, 7]; // 3 số đầu tiên ở từng observable
    // [2, 5, 8]; // 3 số tiếp theo
    // [3, 6, 9]; // 3 số cuối cùng
    // 99 của observable đầu tiên sẽ bị bỏ qua vì observable thứ 2 và thứ 3 đã complete mất rồi.
      `;
    this.text12 = `
    const age$ = of<number>(29, 28, 30);
    const name$ = of<string>('Chau', 'Trung', 'Tiep');
    const isAdmin$ = of<boolean>(true, false, true);
    
    zip(age$, name$, isAdmin$).pipe(
      map(([age, name, isAdmin]) => ({ age, name, isAdmin }))
    );
    // output:
    // { age: 29, name: 'Chau', isAdmin: true }
    // { age: 28, name: 'Trung', isAdmin: false }
    // { age: 30, name: 'Tiep', isAdmin: true }
    
    // dùng với projectFunction
    zip(age$, name$, isAdmin$, (age, name, isAdmin) => ({
      age,
      name,
      isAdmin,
    })).subscribe(observer);
    // output:
    // { age: 29, name: 'Chau', isAdmin: true }
    // { age: 28, name: 'Trung', isAdmin: false }
    // { age: 30, name: 'Tiep', isAdmin: true }
      `;
    this.text13 = `
    const log = (event, val) => event}: JSON.stringify(val)};
    const getCoords = pipe(
      map((e: MouseEvent) => ({ x: e.clientX, y: e.clientY }))
    );
    const documentEvent = (eventName) =>
      fromEvent(document, eventName).pipe(getCoords);
    
    zip(documentEvent('mousedown'), documentEvent('mouseup')).subscribe((e) =>
      console.log(log('start', e[0])} log('end', e[1])})
    );
    // output:
    // start: {"x":291,"y":136} end: {"x":143,"y":168}
    // start: {"x":33,"y":284} end: {"x":503,"y":74}
      `;
    this.text14 = `
    concat(of(4, 5, 6).pipe(delay(1000)), of(1, 2, 3)).subscribe(observer);
    // output:
    // sau 1s:
    // 4-5-6-1-2-3
    // output: 'complete'
      `;
    this.text15 = `
    const fiveSecondTimer = interval(1000).pipe(take(5));

    concat(fiveSecondTimer, fiveSecondTimer, fiveSecondTimer).subscribe(observer);
    // output: 0,1,2,3,4 - 0,1,2,3,4 - 0,1,2,3,4
    // output: 'complete'
    
    // dùng repeat()
    concat(fiveSecondTimer.pipe(repeat(3))).subscribe(observer);
    // output: 0,1,2,3,4 - 0,1,2,3,4 - 0,1,2,3,4
    // output: 'complete'
      `;
    this.text16 = `
    merge(of(4, 5, 6).pipe(delay(1000)), of(1, 2, 3)).subscribe(observer);
    // output:
    // 1,2,3
    // sau 1s: 4,5,6
    // output: 'complete'
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
