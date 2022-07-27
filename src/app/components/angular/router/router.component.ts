import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-router',
  templateUrl: './router.component.html',
  styleUrls: ['./router.component.css']
})
export class RouterComponent implements OnInit {

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
    @NgModule({
      declarations: [
        AppComponent
      ],
      imports: [
        BrowserModule,
        AppRoutingModule // Đây chính là AppRoutingModule được tạo tự động bằng CLI
      ],
      providers: [],
      bootstrap: [AppComponent]
    })
    export class AppModule { }
    `;
    this.text2 = `
    const routes: Routes = [];

    @NgModule({
      imports: [RouterModule.forRoot(routes)],
      exports: [RouterModule],
    })
    export class AppRoutingModule {}
    `;
    this.text3 = `
    const routes: Routes = [
      {
        path: "detail",
        component: ArticleDetailComponent,
      },
      {
        path: "",
        component: ArticleListComponent,
      },
    ];
      `;
    this.text4 = `
    <ul class="nav nav-pills card-header-pills">
    <li class="nav-item">
      <a class="nav-link" routerLink="/">Home</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" routerLink="detail">Detail</a>
    </li>
  </ul>
  <router-outlet></router-outlet>
      `;
    this.text5 = `
    const Articles: Article[] = [
      {
        id: "1",
        slug: "bai-viet-1",
        title: "Bai viet 1",
        content: "Day la noi dung bai viet 1",
        updateAt: "2020-07-06T13:26:31.785Z",
      },
      {
        id: "2",
        slug: "bai-viet-2",
        title: "Bai viet 2",
        content: "Day la noi dung bai viet 2 nhe",
        updateAt: "2020-07-15:00:00.000Z",
      },
    ];
    @Injectable({
      providedIn: "root",
    })
    export class ArticleService {
      getArticles(): Observable<Article[]> {
        return of(Articles).pipe(delay(500));
      }
    }
      `;
    this.text6 = `
    export class ArticleListComponent implements OnInit {
      articles$: Observable<Article[]>;
      constructor(private _api: ArticleService) {}
    
      ngOnInit(): void {
        this.articles$ = this._api.getArticles();
      }
    }
      `;
    this.text7 = `
    <div class="row" *ngIf="articles$ | async as articles">
    <div class="col-md-3" *ngFor="let article of articles">
      <div class="card text-center">
        <div class="card-header">
          {{ article.title }}
        </div>
        <div class="card-body">
          <p class="card-text">{{ article.content }}</p>
          <a [routerLink]="article.slug" class="btn btn-primary">
            Xem {{ article.title }}
          </a>
        </div>
      </div>
    </div>
  </div>
      `;
    this.text8 = `
    const routes: Routes = [
      {
        path: ":slug",
        component: ArticleDetailComponent,
      },
      {
        path: "",
        component: ArticleListComponent,
      },
    ];
      `;
    this.text9 = `
    export class ArticleDetailComponent implements OnInit {
      article$: Observable<Article>;
      constructor(private _route: ActivatedRoute, private _api: ArticleService) {}
    
      ngOnInit(): void {
        let slug = this._route.snapshot.paramMap.get("slug");
        this.article$ = this._api.getArticleBySlug(slug);
      }
    }
      `;
    this.text10 = `
    const subject = new ReplaySubject(100, 500 /* windowTime */);

    subject.subscribe({
      next: (v) => console.log('observerA: ' + v)
    });
    
    let i = 1;
    const id = setInterval(() => subject.next(i++), 200);
    
    setTimeout(() => {
      subject.subscribe({
        next: (v) => console.log('observerB: ' + v)
      });
    }, 1000);
    
    setTimeout(() => {
      subject.complete();
      clearInterval(id);
    }, 2000);
    
    /**
    Output:
    
    observerA: 1
    observerA: 2
    observerA: 3
    observerA: 4
    observerA: 5
    observerB: 3
    observerB: 4
    observerB: 5
    observerA: 6
    observerB: 6
    ...
    */
      `;
    this.text11 = `
    const subject = new AsyncSubject();

    subject.subscribe({
      next: (v) => console.log('observerA: ' + v)
    });
    
    subject.next(1);
    subject.next(2);
    subject.next(3);
    subject.next(4);
    
    subject.subscribe({
      next: (v) => console.log('observerB: ' + v)
    });
    
    subject.next(5);
    subject.complete();
    
    /**
    Output:
    
    observerA: 5
    observerB: 5
    */
      `;
    this.text12 = `
    const subject = new BehaviorSubject(0); // 0 is the initial value

    subject.subscribe({
      next: (v) => console.log('observerA: ' + v),
      complete: () => console.log('observerA: done')
    });
    
    subject.next(1);
    subject.next(2);
    
    subject.subscribe({
      next: (v) => console.log('observerB: ' + v),
      complete: () => console.log('observerB: done')
    });
    
    subject.next(3);
    
    subject.complete();
    
    subject.subscribe({
      next: (v) => console.log('observerC: ' + v),
      complete: () => console.log('observerC: done')
    });
    
    /**
    Output:
    
    observerA: 0
    observerA: 1
    observerA: 2
    observerB: 2
    observerA: 3
    observerB: 3
    observerA: done
    observerB: done
    observerC: done
    */
      `;
    this.text13 = `
    const subject = new ReplaySubject(3);

    subject.subscribe({
      next: (v) => console.log('observerA: ' + v),
      complete: () => console.log('observerA: done')
    });
    
    let i = 1;
    const id = setInterval(() => subject.next(i++), 200);
    
    setTimeout(() => {
      subject.complete();
      clearInterval(id);
      subject.subscribe({
        next: (v) => console.log('observerB: ' + v),
        complete: () => console.log('observerB: done')
      });
    }, 1000);
    
    /**
    Output:
    
    observerA: 1
    observerA: 2
    observerA: 3
    observerA: 4
    observerA: 5
    observerA: done
    observerB: 3
    observerB: 4
    observerB: 5
    observerB: done
    */
      `;
    this.text14 = `
    const subject = new AsyncSubject();

    subject.subscribe({
      next: (v) => console.log('observerA: ' + v),
      complete: () => console.log('observerA: done')
    });
    
    subject.next(1);
    subject.next(2);
    subject.next(3);
    subject.next(4);
    subject.next(5);
    
    subject.complete();
    
    subject.subscribe({
      next: (v) => console.log('observerB: ' + v),
      complete: () => console.log('observerB: done')
    });
    /**
    Output:
    
    observerA: 5
    observerA: done
    observerB: 5
    observerB: done
    */
      `;
    this.text15 = `
    const observable = interval(500).pipe(
      take(5)
    );
    
    const subject = new Subject();
    
    const observerA = {
      next: (val) => console.log(Observer A: $val}),
      error: (err) => console.log(Observer A Error: $err}),
      complete: () => console.log(Observer A complete),
    };
    
    const observerB = {
      next: (val) => console.log(Observer B: $val}),
      error: (err) => console.log(Observer B Error: $err}),
      complete: () => console.log(Observer B complete),
    };
    
    subject.subscribe(observerA);
    
    observable.subscribe(subject);
    
    setTimeout(() => {
      subject.subscribe(observerB);
    }, 2000);
      `;
    this.text16 = `
    const subject = new Subject();

    const connectableObservable = interval(500).pipe(
      take(5),
      multicast(subject)
    ) as ConnectableObservable<number>;
    
    const observerA = {
      next: (val) => console.log( Observer A: $ val} ),
      error: (err) => console.log( Observer A Error: $ err}),
      complete: () => console.log( Observer A complete),
    };
    
    const observerB = {
      next: (val) => console.log(Observer B: $ val}),
      error: (err) => console.log(Observer B Error: $ err} ),
      complete: () => console.log(Observer B complete),
    };
    
    connectableObservable.subscribe(observerA);
    connectableObservable.connect();
    
    setTimeout(() => {
      connectableObservable.subscribe(observerB);
    }, 2000);
    
    /**
    Output:
    
    Observer A: 0
    Observer A: 1
    Observer A: 2
    Observer A: 3
    Observer A: 4
    Observer B: 4
    Observer A complete
    Observer B complete
    */
      `;
    this.text17 = `
    const subject = new Subject();

    const connectableObservable = interval(500).pipe(
      tap(x => console.log('log.info: ' + x)),
      multicast(subject)
    ) as ConnectableObservable<number>;
    
    const observerA = {
      next: (val) => console.log(Observer A: $val } ),
      error: (err) => console.log(Observer A Error: $err } ),
      complete: () => console.log(Observer A complete),
    };
    
    const observerB = {
      next: (val) => console.log(Observer B: $val } ),
      error: (err) => console.log(Observer B Error: $err } ),
      complete: () => console.log(Observer B complete),
    };
    
    const sub = connectableObservable.subscribe(observerA);
    connectableObservable.connect();
    
    setTimeout(() => {
      sub.add(connectableObservable.subscribe(observerB));
    }, 2000);
    
    setTimeout(() => {
      sub.unsubscribe();
    }, 3000);
    
    /**
    Output:
    
    log.info: 0
    Observer A: 0
    log.info: 1
    Observer A: 1
    log.info: 2
    Observer A: 2
    log.info: 3
    Observer A: 3
    log.info: 4
    Observer A: 4
    Observer B: 4
    log.info: 5
    Observer A: 5
    Observer B: 5
    log.info: 6
    log.info: 7
    log.info: 8
    log.info: 9
    log.info: 10
    ...
      `;
    this.text18 = `
    const sub = connectableObservable.subscribe(observerA);
    const connectSub = connectableObservable.connect();
    
    setTimeout(() => {
      sub.add(connectableObservable.subscribe(observerB));
    }, 2000);
    
    setTimeout(() => {
      sub.unsubscribe();
    
      connectSub.unsubscribe();
    }, 3000);
      `;
    this.text19 = `
    const subject = new Subject();

    const connectableObservable = interval(500).pipe(
      tap(x => console.log('log.info: ' + x)),
      multicast(subject)
    ) as ConnectableObservable<number>;
    
    const observerA = {
      next: (val) => console.log(Observer A: $ val } ),
      error: (err) => console.log(Observer A Error: $ err } ),
      complete: () => console.log(Observer A complete),
    };
    
    const observerB = {
      next: (val) => console.log(Observer B: $ val } ),
      error: (err) => console.log(Observer B Error: $err } ),
      complete: () => console.log(Observer B complete),
    };
    
    const observable = connectableObservable.refCount();
    
    const subA = observable.subscribe(observerA); // ref from 0 => 1
    
    let subB;
    setTimeout(() => {
      subB = observable.subscribe(observerB); // ref from 1 => 2
    }, 2000);
    
    setTimeout(() => {
      subA.unsubscribe(); // ref from 2 => 1
    }, 3000);
    
    setTimeout(() => {
      subB.unsubscribe(); // ref from 1 => 0
    }, 5000);
      `;
    this.text20 = `
    const connectableObservable = interval(500).pipe(
      take(10),
      tap(x => console.log('log.info: ' + x)),
      multicast(new Subject())
    ) as ConnectableObservable<number>;
    
    const observerA = {
      next: (val) => console.log(Observer A: $val}),
      error: (err) => console.log(Observer A Error: $err}),
      complete: () => console.log(Observer A complete),
    };
    
    const observerB = {
      next: (val) => console.log(Observer B: $val}),
      error: (err) => console.log(Observer B Error: $err}),
      complete: () => console.log(Observer B complete),
    };
    
    const sharedObservable = connectableObservable.refCount();
    
    const subA = sharedObservable.subscribe(observerA);
    
    let subB;
    setTimeout(() => {
      subB = sharedObservable.subscribe(observerB);
    }, 2000);
    
    setTimeout(() => {
      const subA2 = sharedObservable.subscribe(observerA);
    }, 6000);
      `;
    this.text21 = `
    const connectableObservable = interval(500).pipe(
      take(10),
      tap(x => console.log('log.info: ' + x)),
      multicast(() => new Subject())
    ) as ConnectableObservable<number>;
      `;
    this.text22 = `
    const sharedObservable = connectableObservable.refCount();

    const subA = sharedObservable.subscribe(observerA);
    
    let subB;
    setTimeout(() => {
      subB = sharedObservable.subscribe(observerB);
    }, 2000);
    
    setTimeout(() => {
      const subA2 = sharedObservable.subscribe(observerA);
    }, 6000);
      `;
    this.text23 = `
    const connectableObservable = interval(500).pipe(
      tap(x => console.log('log.info: ' + x)),
      publish(),
    ) as ConnectableObservable<number>;
    
    const observerA = {
      next: (val) => console.log(Observer A: $val}),
      error: (err) => console.log(Observer A Error: $err}),
      complete: () => console.log(Observer A complete),
    };
    
    const observerB = {
      next: (val) => console.log(Observer B: $val}),
      error: (err) => console.log(Observer B Error: $err}),
      complete: () => console.log(Observer B complete),
    };
    
    const sharedObservable = connectableObservable.refCount();
    
    const subA = sharedObservable.subscribe(observerA); // ref from 0 => 1
    
    let subB;
    setTimeout(() => {
      subB = sharedObservable.subscribe(observerB); // ref from 1 => 2
    }, 2000);
    
    setTimeout(() => {
      subA.unsubscribe(); // ref from 2 => 1
    }, 3000);
    
    setTimeout(() => {
      subB.unsubscribe(); // ref from 1 => 0
    }, 5000);
      `;
    this.text24 = `
    const sharedObservable = interval(500).pipe(
      tap(x => console.log('log.info: ' + x)),
      share(),
    );
    
    const observerA = {
      next: (val) => console.log(Observer A: $val } ),
      error: (err) => console.log(Observer A Error: $err } ),
      complete: () => console.log(Observer A complete),
    };
    
    const observerB = {
      next: (val) => console.log(Observer B: $ val } ),
      error: (err) => console.log(Observer B Error: $ err }),
      complete: () => console.log(Observer B complete),
    };
    
    const subA = sharedObservable.subscribe(observerA); // ref from 0 => 1
    
    let subB;
    setTimeout(() => {
      subB = sharedObservable.subscribe(observerB); // ref from 1 => 2
    }, 2000);
    
    setTimeout(() => {
      subA.unsubscribe(); // ref from 2 => 1
    }, 3000);
    
    setTimeout(() => {
      subB.unsubscribe(); // ref from 1 => 0
    }, 5000);
    `;
    this.text25 = `
    import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { timer } from 'rxjs/observable/timer';
import { switchMap, shareReplay, map, takeUntil } from 'rxjs/operators';

export interface Joke {
  id: number;
  joke: string;
  categories: Array<string>;
}

export interface JokeResponse {
  type: string;
  value: Array<Joke>;
}

const API_ENDPOINT = 'https://api.icndb.com/jokes/random/5?limitTo=[nerdy]';
const REFRESH_INTERVAL = 10000;
const CACHE_SIZE = 1;

@Injectable()
export class JokeService {
  private cache$: Observable<Array<Joke>>;
  private reload$ = new Subject<void>();

  constructor(private http: HttpClient) { }

  // This method is responsible for fetching the data.
  // The first one who calls this function will initiate 
  // the process of fetching data.
  get jokes() {
    if (!this.cache$) {
      // Set up timer that ticks every X milliseconds
      const timer$ = timer(0, REFRESH_INTERVAL);
          
      // For each timer tick make an http request to fetch new data
      // We use shareReplay(X) to multicast the cache so that all 
      // subscribers share one underlying source and don't re-create 
      // the source over and over again. We use takeUntil to complete
      // this stream when the user forces an update.
      this.cache$ = timer$.pipe(
        switchMap(() => this.requestJokes()),
        takeUntil(this.reload$),
        shareReplay(CACHE_SIZE)
      );
    }

    return this.cache$;
  }

  // Public facing API to force the cache to reload the data
  forceReload() {
    this.reload$.next();
    this.cache$ = null;
  }

  // Helper method to actually fetch the jokes
  private requestJokes() {
    return this.http.get<JokeResponse>(API_ENDPOINT).pipe(
      map(response => response.value)
    );
  }
}
    `;
  }

  changeAge(event: any) {
    this.user.age = event.value;
  }

}
