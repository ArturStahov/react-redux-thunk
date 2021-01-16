import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import * as action from './contacts-action';

const itemsReducer = createReducer([], {
  [action.getAllIItemSuccess]: (_, { payload }) => payload,
  [action.addItemSuccess]: (state, { payload }) => [...state, payload],
  [action.deleteItemSuccess]: (state, { payload }) =>
    state.filter(item => item.id !== payload.id),
});

const loadingReducer = createReducer(false, {});

const filterReducer = createReducer('', {
  [action.changeFilter]: (state, { payload }) => payload,
});

const contactsReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
  loading: loadingReducer,
});

export default contactsReducer;
