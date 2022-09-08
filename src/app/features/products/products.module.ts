import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from "./products.component";
import { StoreModule } from "@ngrx/store";
import {productReducer} from "./state/product.reducer";

const routes: Routes = [
  {
    path: '',
    component: ProductsComponent,
  },
];

@NgModule({
  declarations: [
    ProductsComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    StoreModule.forFeature('products', productReducer)
  ],
  // providers: [ NotificationsService ]
})
export class ProductsModule {}
