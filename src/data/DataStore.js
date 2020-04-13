
import { ShopReducer } from './ShopReducer';
import { CartReducer } from './CartReducer';
import { CommonReducer } from './CommonReducer';

import { createStore, applyMiddleware } from 'redux';
import { asyncActions } from "./AsyncMiddleware";



export const SportsStoreDataStore = createStore(CommonReducer(ShopReducer, CartReducer), applyMiddleware(asyncActions));