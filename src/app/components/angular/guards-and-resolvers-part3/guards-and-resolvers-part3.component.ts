import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guards-and-resolvers-part3',
  templateUrl: './guards-and-resolvers-part3.component.html',
  styleUrls: ['./guards-and-resolvers-part3.component.css']
})
export class GuardsAndResolversPart3Component implements OnInit {

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
    this.text2 = `
    interface Resolve<T> {
      resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<T> | Promise<T> | T
    }
    `;
    this.text3 = `
    @Injectable({
      providedIn: 'root'
    })
    export class ArticleResolver implements Resolve<Article> {
    
      constructor(private articleService: ArticleService) { }
    
      resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Article> | Promise<Article> | Article {
        const slug = route.paramMap.get('slug');
        return this.articleService.getArticleBySlug(slug);
      }
    }
      `;
    this.text4 = `
    const routes: Routes = [
      {
        path: 'article',
        component: ArticleComponent,
        children: [
          {
            path: '',
            component: ArticleListComponent,
          },
          {
            path: ':slug',
            component: ArticleDetailComponent,
            resolve: {
              article: ArticleResolver,       // <== key: value (service or Dependency injection token)
            }
          },
        ]
      },
    ];
      `;
    this.text5 = `
    getArticleBySlug(slug: string): Observable<Article> {
      let article = Articles.find(x => x.slug === slug)
      return interval(1000).pipe(
        switchMap(() => of(article)),
        take(5)
      );
    }
      `;
    this.text6 = `
    @Injectable({
      providedIn: 'root'
    })
    export class CanLeaveEditGuard implements CanDeactivate<CheckDeactivate> {
      canDeactivate(component: CheckDeactivate, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        return component.checkDeactivate(currentRoute, currentState, nextState);
      }
    }
      `;
    this.text7 = `
    export class ArticleEditComponent implements OnInit, CheckDeactivate {
      slug$ = this.activatedRoute.paramMap.pipe(
        map(params => params.get('slug'))
      );
    
      isEditing = false;
      
      constructor(private activatedRoute: ActivatedRoute) { }
    
      ngOnInit() {
      }
    
      checkDeactivate(currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        return !this.isEditing;
      }
    
    }
      `;
    this.text8 = `
    export class ArticleEditComponent implements OnInit, CheckDeactivate {
      slug$ = this.activatedRoute.paramMap.pipe(
        map(params => params.get('slug'))
      );
    
      isEditing = false;
      
      constructor(private activatedRoute: ActivatedRoute, private dialog: MatDialog) { }
    
      ngOnInit() {
      }
    
      openDialog() {
        const ref = this.dialog.open(ConfirmDialogComponent, {
          data: {
            title: 'Do you want to leave this page?'
          }
        });
        return ref.afterClosed();
      }
    
      checkDeactivate(currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        return !this.isEditing || this.openDialog();
      }
    
    }
      `;
    this.text9 = `
    import { Injectable } from '@angular/core';
    import { CanLoad, UrlSegment, Route, RouterStateSnapshot, UrlTree } from '@angular/router';
    import { Observable } from 'rxjs';
    
    @Injectable({
      providedIn: 'root'
    })
    export class CanLoadAdminGuard implements CanLoad {
      canLoad(route: Route, segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        return true;
      }
    }
      `;
    this.text10 = `
    const routes: Routes = [
      {
        path: 'admin',
        loadChildren: () =>
          import('./admin/admin.module').then((m) => m.AdminModule),
        canLoad: [CanLoadAdminGuard], // <== this is an array, we can have multiple guards
      },
      {
        path: '',
        redirectTo: 'article',
        pathMatch: 'full'
      }
    ];
      `;
    this.text11 = `
    @Injectable({
      providedIn: 'root'
    })
    export class CanLoadAdminGuard implements CanLoad {
      constructor(private userService: UserService) {}
      canLoad(route: Route, segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        return this.userService.currentUser.isAdmin;
      }
    }
      `;
    this.text12 = `
    @Injectable({
      providedIn: 'root'
    })
    export class CanEditArticleGuard implements CanActivate {
      constructor(private userService: UserService, private articleService: ArticleService) {}
      canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        return this.articleService.getArticleBySlug(next.paramMap.get('slug')).pipe(
          map(article => article.author === this.userService.currentUser.username)
        );
      }
    }
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
