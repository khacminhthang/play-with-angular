import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dependence-injection',
  templateUrl: './dependence-injection.component.html',
  styleUrls: ['./dependence-injection.component.scss']
})
export class DependenceInjectionComponent implements OnInit {

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
    <app-tab-group>
    <app-tab-panel title="Tab 1">content tab 1</app-tab-panel>
    <app-tab-panel title="Tab 2">content tab 2</app-tab-panel>
    <app-tab-panel title="Tab 3">content tab 3</app-tab-panel>
    <!-- More tab panel -->
    /app-tab-group>
    `;
    this.text2 = `
    @Component({
      selector: 'app-tab-group',
      templateUrl: './tab-group.component.html',
      styleUrls: ['./tab-group.component.css']
    })
    export class TabGroupComponent implements OnInit {
      tabPanelList: TabPanelComponent[] = [];
    
      @Input() tabActiveIndex = 0;
      @Output() tabActiveChange = new EventEmitter<number>();
      constructor() { }
    
      ngOnInit() {
      }
    
      selectItem(idx: number) {
        this.tabActiveIndex = idx;
        this.tabActiveChange.emit(idx);
      }
    
      addTabPanel(tab: TabPanelComponent) {
        this.tabPanelList.push(tab);
      }
      removeTabPanel(tab: TabPanelComponent) {
        let index = -1;
        const tabPanelList: TabPanelComponent[] = [];
        this.tabPanelList.forEach((item, idx) => {
          if (tab === item) {
            index = idx;
            return;
          }
          tabPanelList.push(item);
        });
        this.tabPanelList = tabPanelList;
        if (index !== -1) {
          this.selectItem(0);
        }
        
      }
    
    }
    `;
    this.text3 = `
    <div class="tab-header">
  <div class="tab-item-header" role="presentation" *ngFor="let tab of tabPanelList; index as idx" (click)="selectItem(idx)">
    {{tab.title}}
  </div>

</div>

<div class="tab-body">
  <ng-container *ngFor="let tab of tabPanelList; index as idx">
    <div *ngIf="idx === tabActiveIndex">
      <ng-container *ngTemplateOutlet="tab.panelBody"></ng-container>
    </div>
  </ng-container>
      `;
    this.text4 = `

    <ng-template>
    <ng-content></ng-content>
    </ng-template>

    export class TabPanelComponent implements OnInit, OnDestroy {
      @Input() title: string;
      @ViewChild(TemplateRef, {static: true}) panelBody: TemplateRef<unknown>;
      constructor(private tabGroup: TabGroupComponent) { }
    
      ngOnInit() {
        this.tabGroup.addTabPanel(this);
      }
      ngOnDestroy() {
        this.tabGroup.removeTabPanel(this);
      }
    }
      `;
    this.text5 = `
    @Component({
      selector: 'app-bs-tab-group',
      templateUrl: './bs-tab-group.component.html',
      styleUrls: ['./bs-tab-group.component.css'],
      providers: [
        {
          provide: TabGroupComponent,
          useExisting: BsTabGroupComponent
        }
      ]
    })
    export class BsTabGroupComponent extends TabGroupComponent {
    }
      `;
    this.text6 = `
    <ul class="nav nav-tabs" role="tablist">
    <li class="nav-item" role="presentation" *ngFor="let tab of tabPanelList; index as idx" (click)="selectItem(idx)">
      <a class="nav-link" [class.active]="idx === tabActiveIndex" role="tab" aria-selected="true">{{tab.title}}</a>
    </li>
  
  </ul>
  
  <div class="tab-content">
    <ng-container *ngFor="let tab of tabPanelList; index as idx">
      <div class="tab-pane active" role="tabpanel" *ngIf="idx === tabActiveIndex">
        <ng-container *ngTemplateOutlet="tab.panelBody"></ng-container>
      </div>
    </ng-container>
  </div>
      `;
    this.text7 = `
    <app-bs-tab-group>
    <app-tab-panel title="Tab 1">content tab 1</app-tab-panel>
    <app-tab-panel title="Tab 2">content tab 2</app-tab-panel>
    <app-tab-panel title="Tab 3">content tab 3</app-tab-panel>
  </app-bs-tab-group>
      `;
    this.text8 = `
    const BsTabGroupProvider = {
      provide: TabGroupComponent,
      useExisting: BsTabGroupComponent
    }
    
    @Component({
      selector: 'app-bs-tab-group',
      templateUrl: './bs-tab-group.component.html',
      styleUrls: ['./bs-tab-group.component.css'],
      providers: [
        BsTabGroupProvider
      ]
    })
    export class BsTabGroupComponent extends TabGroupComponent {
    }
      `;
    this.text9 = `
    const BsTabGroupProvider = {
      provide: TabGroupComponent,
      useExisting: forwardRef(() => BsTabGroupComponent)
    }
      `;
    this.text10 = `
    @NgModule({
      providers: [SomeClass]
    })
      `;
    this.text11 = `
    @NgModule({
      providers: [{ provide: SomeClass, useClass: SomeClass}]
    })
      `;
    this.text12 = `
    @Component({
      providers: [
        {
          provide: SomeClass,
          useExisting: OtherClass
        }
      ]
    })
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
