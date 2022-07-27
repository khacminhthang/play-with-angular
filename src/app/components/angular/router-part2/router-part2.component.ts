import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-router-part2',
  templateUrl: './router-part2.component.html',
  styleUrls: ['./router-part2.component.css']
})
export class RouterPart2Component implements OnInit {

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
    import { NgModule } from '@angular/core';
    import { CommonModule } from '@angular/common';
    import { ArticleListComponent } from './article-list/article-list.component';
    import { ArticleDetailComponent } from './article-detail/article-detail.component';
    
    @NgModule({
      imports: [
        CommonModule,
      ],
      declarations: [ArticleListComponent, ArticleDetailComponent]
    })
    export class ArticleModule { }
    `;
    this.text2 = `
    import { NgModule } from '@angular/core';
    import { CommonModule } from '@angular/common';
    import { Routes, RouterModule } from '@angular/router';
    import { ArticleListComponent } from './article-list/article-list.component';
    import { ArticleDetailComponent } from './article-detail/article-detail.component';
    
    const routes: Routes = [
      {
        path: 'article',
        component: ArticleListComponent
      },
      {
        path: 'article/:slug',
        component: ArticleDetailComponent
      }
    ];
    
    @NgModule({
      imports: [
        CommonModule,
        RouterModule.forChild(routes),
      ],
      declarations: [ArticleListComponent, ArticleDetailComponent]
    })
    export class ArticleModule { }
    `;
    this.text3 = `
    import { ArticleModule } from './article/article.module';

    @NgModule({
      imports: [
        BrowserModule,
        FormsModule,
        ArticleModule, // <== lưu ý thứ tự import này
        AppRoutingModule
      ],
      declarations: [ AppComponent ],
      bootstrap:    [ AppComponent ]
    })
    export class AppModule { }
      `;
    this.text4 = `
    const routes: Routes = [
      {
        path: '',
        redirectTo: 'article',
        pathMatch: 'full'
      }
    ];
      `;
    this.text5 = `
    const routes: Routes = [
      {
        path: 'article',
        component: ArticleListComponent
      },
      {
        path: 'article/:slug',
        component: ArticleDetailComponent
      }
    ];
    
    @NgModule({
      imports: [
        CommonModule,
        RouterModule.forChild(routes) // <== config routing
      ],
      declarations: [],
      exports: [RouterModule] // <== exports this NgModule
    })
    export class ArticleRoutingModule { }
      `;
    this.text6 = `
    import { ArticleRoutingModule } from './article-routing.module';

    @NgModule({
      imports: [
        CommonModule,
        ArticleRoutingModule
      ],
      declarations: [ArticleListComponent, ArticleDetailComponent]
    })
    export class ArticleModule { }
      `;
    this.text7 = `
    const routes: Routes = [
      {
        path: 'article',
        component: ArticleListComponent
      },
      {
        path: 'article/:slug',
        component: ArticleDetailComponent
      }
    ];
      `;
    this.text8 = `
    const routes: Routes = [
      {
        path: 'article',
        children: [
          {
            path: '',
            component: ArticleListComponent,
          },
          {
            path: ':slug',
            component: ArticleDetailComponent
          }
        ]
      },
    ];
      `;
    this.text9 = `
    const routes: Routes = [
      {
        path: 'article',
        component: ArticleComponent, // <== this component can be called Layout component
        children: [
          {
            path: '',
            component: ArticleListComponent,
          },
          {
            path: ':slug',
            component: ArticleDetailComponent
          }
        ]
      },
    ];
      `;
    this.text10 = `
    export class ArticleDetailComponent implements OnInit {
      article$: Observable<Article>;
      constructor(private _route: ActivatedRoute, private _api: ArticleService) {}
    
      ngOnInit(): void {
        let slug = this._route.snapshot.paramMap.get('slug');
        this.article$ = this._api.getArticleBySlug(slug);
      }
    }
    */
      `;
    this.text11 = `
    export class ArticleDetailComponent implements OnInit {
      article$: Observable<Article>;
      constructor(private _route: ActivatedRoute, private _api: ArticleService) {}
    
      ngOnInit(): void {
        this.article$ = this._route.paramMap.pipe(
          map(params => params.get('slug')),
          switchMap(slug => this._api.getArticleBySlug(slug))
        );
      }
    }
      `;
    this.text12 = `
    queryParamMap.subscribe(query => {
      console.log(query.get('sort'));
    })
      `;
    this.text13 = `
    navigateByUrl(url: string | UrlTree, extras: NavigationExtras = { skipLocationChange: false }): Promise<boolean>;
    navigate(commands: any[], extras: NavigationExtras = { skipLocationChange: false }): Promise<boolean>;
      `;
    this.text14 = `
    class SomeComponent {
      constructor(private router: Router) {}
      onClick() {
        // do something
        this.router.navigate(['/article']);
      }
    }
      `;
    this.text15 = `
    this.router.events.pipe(
      filter(e => e instanceof NavigationEnd)
    ).subscribe(e => {
      console.log(e);
    });
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
