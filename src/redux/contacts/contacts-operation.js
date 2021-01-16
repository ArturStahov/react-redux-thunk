import {
  fetchAddItem,
  fetchGetItem,
  fetchDeleteItem,
} from '../../service/fetchApi';
import * as action from './contacts-action';

export const getAllItem = () => async dispatch => {
  dispatch(action.getAllItemRequest());
  try {
    const { data } = await fetchGetItem();
    dispatch(action.getAllIItemSuccess(data));
  } catch (error) {
    dispatch(action.getAllIItemError(error.message));
  }
};

export const addItem = item => async dispatch => {
  const contacts = {
    ...item,
  };
  dispatch(dispatch(action.addItemRequest()));

  try {
    const { data } = await fetchAddItem(contacts);
    dispatch(action.addItemSuccess(data));
  } catch (error) {
    dispatch(action.addItemError(error.message));
  }
};

export const deleteItem = item => async dispatch => {
  dispatch(action.deleteItemRequest());
  try {
    const response = await fetchDeleteItem(item.id);
    console.log(response);
    dispatch(action.deleteItemSuccess(item));
  } catch (error) {
    dispatch(action.getAllIItemError(error.message));
  }
};
