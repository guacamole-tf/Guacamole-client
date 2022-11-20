import * as types from '@/data/rootTypes';
import * as actions from '@/data/rootAction';
import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

const initialProduct = { id: '1' } as types.Product;

const product = createReducer(initialProduct, builder => {
  builder.addCase(actions.getProducts, (state: types.Product, action) => {
    state.id = action.payload;
  });
});

export default combineReducers({
  product,
});
