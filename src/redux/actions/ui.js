import { ADD_PAGE, EXAMPLE_ACTION_TYPE, REMOVE_PAGE } from './actionTypes';

export const actionExampleAction = val => ({
  type: EXAMPLE_ACTION_TYPE,
  val
});

export const actionAddPage = page => ({
  type: ADD_PAGE,
  page
});

export const actionRemovePage = id => ({
  type: REMOVE_PAGE,
  id
});
