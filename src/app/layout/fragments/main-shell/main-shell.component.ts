import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { menuAngular, menuCSharp, menuDotNetCore, menuEFCore } from 'src/assets/menu';

@Component({
  selector: 'app-main-shell',
  templateUrl: './main-shell.component.html',
  styleUrls: ['./main-shell.component.css']
})
export class MainShellComponent implements OnInit {

  menuList: any;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe((param) => {
      let pathname = window.location.pathname.split('/')[1];
      switch (pathname) {
        case 'angular':
          {
            this.menuList = menuAngular;
            break;
          }
        case 'csharp':
          {
            this.menuList = menuCSharp;
            break;
          }
        case 'dotnetcore':
          {
            this.menuList = menuDotNetCore;
            break;
          }
        case 'efcore':
          {
            this.menuList = menuEFCore;
            break;
          }
        default:
          {
            this.menuList = menuAngular;
            break;
          }
      }
    })
  }

}
