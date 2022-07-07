 
import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core'
 
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  mobileQuery: MediaQueryList

  @Input() menuList: any;
  
  ngOnInit() { }
   
}
