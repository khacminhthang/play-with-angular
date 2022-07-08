import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro-dependence-injection',
  templateUrl: './intro-dependence-injection.component.html',
  styleUrls: ['./intro-dependence-injection.component.scss']
})
export class IntroDependenceInjectionComponent implements OnInit {

  text1: any;
  text2: any;
  text3: any;
  text4: any;
  text5: any;
  text6: any;
  text7: any;
  text8: any;
  text9: any;


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
    class ProductModel {
      sku: string;
      name: string;
      price: number;
    }
    
    interface CartItem {
      product: ProductModel;
      quantity: number;
    }
    
    class CartService {
      selectedProducts: CartItem[] = [];
      calculateTotal(): number {
        return this.selectedProducts.reduce(
          (total, item) => item.product.price * item.quantity + total,
          0
        );
      }
      addToCart(): void {
        // logic here
      }
    }
    
    class ProductComponent {
      cartService: CartService;
    }
    `;
    this.text2 = `
    class ProductComponent {
      cartService: CartService;
      constructor() {
        this.cartService = new CartService();
      }
    }
    
    // tương đương với
    
    class ProductComponent {
      cartService: CartService = new CartService();
    }
    `;
    this.text3 = `
    class ProductComponent {
      cartService: CartService;
      constructor(cartService: CartService) {
        this.cartService = cartService;
      }
    }
    
    // tương đương cú pháp sau trong TypeScript
    class ProductComponent {
      constructor(public cartService: CartService) {}
    }
      `;
    this.text4 = `
    (function container() {
      const service = new CartService(); // và các dependencies của CartService nếu có
      const productComp = new ProductComponent(service);
      // other code logic
    })();
      `;
    this.text5 = `
    @Injectable({
      providedIn: "root",
    })
    export class CartService {
      // properties and methods
    }
      `;
    this.text6 = `
    @Component({
      selector: "app-product",
      templateUrl: "./product.component.html",
      styleUrls: ["./product.component.css"],
    })
    export class ProductComponent implements OnInit {
      constructor(private cartService: CartService) {}
    
      ngOnInit() {
        console.log(this.cartService.calculateTotal());
      }
    }
      `;
    this.text7 = `
    @Injectable()
    export class CartExtService {
      calculateTotal(): number {
        // call external datasource
        // return data from exteral datasource
        return Math.random() * 100;
      }
      addToCart(): void {
        // logic here
      }
    }
    }
      `;
    this.text8 = `
    @NgModule({
      // other metadata
      providers: [
        {
          provide: CartService,
          useClass: CartExtService,
        },
      ],
    })
    export class AppModule {}
      `;
    this.text9 = `
    @Injectable({
      providedIn: "root",
      useClass: CartExtService,
    })
    export class CartService {
      // logic here
    }
      `;
  }

  changeAge(event: any) {
    this.user.age = event.value;
  }

}
