import { Component, OnInit } from '@angular/core';
import { Store } from "@ngrx/store";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  showProductCode = false;

  constructor(private store:  Store<any>) {
  }

  ngOnInit(): void {

    // TODO: Unsubscribe
    this.store.select('products').subscribe(
      products => {
        if(products) {
          this.showProductCode = products.showProductCode;
        }
      }
    )
  }

  onDisplayProductCodeClick() {
    this.store.dispatch(
      { type: '[Product] Toggle Product Code'}
    );
  }

  get btnTitle() {
    return !this.showProductCode ? 'show' : 'hide';
  }

}

