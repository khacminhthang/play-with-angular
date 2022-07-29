import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guards-and-resolvers-part1',
  templateUrl: './guards-and-resolvers-part1.component.html',
  styleUrls: ['./guards-and-resolvers-part1.component.css']
})
export class GuardsAndResolversPart1Component implements OnInit {

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
    const routes: Routes = [
      {
        path: 'admin',
        loadChildren: () =>
          import('./admin/admin.module').then((m) => m.AdminModule),
      },
      {
        path: '',
        redirectTo: 'article',
        pathMatch: 'full'
      }
    ];
    `;
    this.text2 = `
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
            component: ArticleDetailComponent
          }
        ]
      },
    ];
    `;
    this.text3 = `
    const routes: Routes = [
      {
        path: '',
        component: AdminComponent,
        children: [
          {
            path: '',
            component: AdminArticleListComponent,
          },
        ],
      },
    ];
      `;
    this.text4 = `
    interface CanActivate {
      canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree
    }
      `;
    this.text5 = `
    interface CanActivateChild {
      canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree
    }
      `;
    this.text6 = `
    interface CanDeactivate<T> {
      canDeactivate(component: T, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree
    }
      `;
    this.text7 = `
    interface CanLoad {
      canLoad(route: Route, segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree
    }
      `;
    this.text8 = `
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
            component: ArticleDetailComponent
          },
          {
            path: ':slug/edit',
            component: ArticleEditComponent
          }
        ]
      },
    ];
      `;
    this.text9 = `
    import { Injectable } from '@angular/core';
    import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
    import { Observable } from 'rxjs';
    
    @Injectable({
      providedIn: 'root' // you can change to any level if needed
    })
    export class CanEditArticleGuard implements CanActivate {
      canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        return true; // replace with actual logic
      }
    }
      `;
    this.text10 = `
    const routes: Routes = [
      {
        path: 'article',
        component: ArticleComponent,
        children: [
          // other configurations
          {
            path: ':slug/edit',
            component: ArticleEditComponent,
            canActivate: [CanEditArticleGuard] // <== this is an array, we can have multiple guards
          }
        ]
      },
    ];
      `;
    this.text11 = `
    import { Injectable } from '@angular/core';

    @Injectable({
      providedIn: 'root'
    })
    export class UserService {
      currentUser = {
        username: 'TiepPhan'
      };
      constructor() { }
    
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
