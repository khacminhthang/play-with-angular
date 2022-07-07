import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { menuAngular, menuDotNetCore } from 'src/assets/menu';

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
      switch (param.slug) {
        case 'angular':
          {
            this.menuList = menuAngular;
            break;
          }
        case 'dotnetcore':
          {
            this.menuList = menuDotNetCore;
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
