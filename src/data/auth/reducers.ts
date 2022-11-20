import * as types from '@/data/rootTypes';
import * as actions from '@/data/rootAction';
import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

const initialUser = { id: '1' } as types.User;

const user = createReducer(initialUser, builder => {
  builder.addCase(actions.login, (state: types.User, action) => {
    state.id = action.payload;
  });
});

export default combineReducers({
  user,
});
