import {createAction, createFeatureSelector, createReducer, createSelector, on} from "@ngrx/store";
import * as AppState from '../../../state/app.state';
import * as ProductActions from './product.actions';

export interface State extends AppState.State {
  products: ProductState
}

export interface Product {
  name?: string;
  uuid?: string;
}
export interface ProductState {
  showProductCode: boolean;
  currentProduct: Product;
  products: Product[];
}

const initialState: ProductState = {
  showProductCode: true,
  currentProduct: {},
  products: []
}

const getProductFeatureState = createFeatureSelector<ProductState>('products');

export const getShowProductCode = createSelector(
  getProductFeatureState,
  state => state.showProductCode
)

export const getCurrentProduct = createSelector(
  getProductFeatureState,
  state => state.currentProduct
)

export const getProducts = createSelector(
  getProductFeatureState,
  state => state.products
)

export const productReducer = createReducer<ProductState>(
  initialState as ProductState,
  on(createAction('[Product] Toggle Product Code'), (state): ProductState => {
    return {
      ...state,
      showProductCode: !state.showProductCode
    }
  })
);
