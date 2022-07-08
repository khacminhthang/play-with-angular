import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-child',
  templateUrl: './content-child.component.html',
  styleUrls: ['./content-child.component.scss']
})
export class ContentChildComponent implements OnInit {

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
    <app-bs-tab-group>
  <app-tab-panel title="Tab 1">
    content tab 1
    <app-counter></app-counter>
  </app-tab-panel>
  <app-tab-panel title="Tab 2">
    content tab 2
    <app-counter></app-counter>
  </app-tab-panel>
  <app-tab-panel title="Tab 3">
    content tab 3
    <app-counter></app-counter>
  </app-tab-panel>
</app-bs-tab-group>
<app-counter></app-counter>
    `;
    this.text2 = `
    ContentChild(selector: string | Function | Type<any>, opts?: {
      read?: any;
      static?: boolean;
    }): any
    }
    `;
    this.text3 = `
    import { Directive } from '@angular/core';

    @Directive({
      selector: 'ng-template[tabPanelContent]'
    })
    export class TabPanelContentDirective {
      constructor() { }
    }
      `;
    this.text4 = `
    export class TabPanelComponent implements OnInit, OnDestroy {
      @Input() title: string;
      @ViewChild(TemplateRef, {static: true}) panelBody: TemplateRef<unknown>;
    
      @ContentChild(TabPanelContentDirective, {static: true}) explicitBody: TemplateRef<unknown>;
    
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
    <app-tab-panel title="Tab 1">
  <ng-template tabPanelContent>
    content tab 1
    <app-counter></app-counter>
  </ng-template>
</app-tab-panel>
      `;
    this.text6 = `
    @ContentChild(TabPanelContentDirective, {static: true, read: TemplateRef}) explicitBody: TemplateRef<unknown>;
      `;
    this.text7 = `
    export class TabPanelComponent implements OnInit, OnDestroy {
      @Input() title: string;
      @ViewChild(TemplateRef, {static: true}) implicitBody: TemplateRef<unknown>;
    
      @ContentChild(TabPanelContentDirective, {static: true, read: TemplateRef}) explicitBody: TemplateRef<unknown>;
    
      get panelBody(): TemplateRef<unknown> {
        return this.explicitBody || this.implicitBody;
      }
    
    }
      `;
    this.text8 = `
    <app-bs-tab-group>
  <app-tab-panel title="Tab 1">
    <ng-template tabPanelContent>
      content tab 1
      <app-counter></app-counter>
    </ng-template>

  </app-tab-panel>
  <app-tab-panel title="Tab 2">
    <ng-template tabPanelContent>
      content tab 2
      <app-counter></app-counter>
    </ng-template>
  </app-tab-panel>
  <app-tab-panel title="Tab 3">
    <ng-template tabPanelContent>
      content tab 3
      <app-counter></app-counter>
    </ng-template>
  </app-tab-panel>
</app-bs-tab-group>

<app-counter></app-counter>
      `;
    this.text9 = `
    export class TabGroupComponent implements OnInit {

      @Input() tabActiveIndex = 0;
      @Output() tabActiveChange = new EventEmitter<number>();
    
      @ContentChildren(TabPanelComponent) tabPanelList: QueryList<TabPanelComponent>
    
      constructor() { }
    
      ngOnInit() {
      }
    
      selectItem(idx: number) {
        this.tabActiveIndex = idx;
        this.tabActiveChange.emit(idx);
      }
    
    }
      `;
    this.text10 = `
    export class TabPanelComponent {
      @Input() title: string;
      @ViewChild(TemplateRef, {static: true}) implicitBody: TemplateRef<unknown>;
    
      @ContentChild(TabPanelContentDirective, {static: true, read: TemplateRef}) explicitBody: TemplateRef<unknown>;
    
      get panelBody(): TemplateRef<unknown> {
        return this.explicitBody || this.implicitBody;
      }
    
    }
      `;
    this.text11 = `
    export class TabGroupComponent implements OnInit, AfterContentInit {

      @Input() tabActiveIndex = 0;
      @Output() tabActiveChange = new EventEmitter<number>();
    
      @ContentChildren(TabPanelComponent) tabPanelList: QueryList<TabPanelComponent>
    
      constructor() { }
    
      ngOnInit() {
      }
    
      ngAfterContentInit() {
        this.tabPanelList.changes.subscribe(() => {
          if (this.tabPanelList.length <= this.tabActiveIndex) {
            this.selectItem(0);
          }
        });
      }
    
      selectItem(idx: number) {
        this.tabActiveIndex = idx;
        this.tabActiveChange.emit(idx);
      }
    
    }
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
