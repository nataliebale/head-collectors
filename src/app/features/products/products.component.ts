import { Component, OnInit } from '@angular/core';
import { Store } from "@ngrx/store";
import {getShowProductCode, State} from "./state/product.reducer";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  showProductCode = false;

  constructor(private store:  Store<State>) {
  }

  ngOnInit(): void {
    // TODO: Unsubscribe
    this.store.select(getShowProductCode).subscribe(
      showProductCode => this.showProductCode = showProductCode
    );
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

