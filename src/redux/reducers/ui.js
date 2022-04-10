import { pages } from '../../helpers/constants';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { ADD_PAGE, EXAMPLE_ACTION_TYPE, REMOVE_PAGE } from '../actions/actionTypes';

const initState = {
  foo: false,
  persistedValue: 0,
  pages
};

const persistConfig = {
  key: 'root',
  storage,
  whitelist: [
    'persistedValue'
  ]
};

// eslint-disable-next-line default-param-last
const uiReducer = (state = initState, action) => {
  switch (action.type) {
    case EXAMPLE_ACTION_TYPE:
      return {
        ...state,
        foo: 'bar',
        persistedValue: state.persistedValue + 1
      };

    case ADD_PAGE: {
      const oldPages = [...state.pages];
      const existsInPagesArr = oldPages.find(page => page.id === action.page.id);

      if (!existsInPagesArr) {
        const newPages = [...oldPages, action.page];

        return {
          ...state,
          pages: newPages
        };
      }

      return { ...state };
    }

    case REMOVE_PAGE: {
      const oldPages = state.pages;
      const newPages = oldPages.filter(oldPage => oldPage.id !== action.id);

      return {
        ...state,
        pages: newPages
      };
    }

    default:
      return state;
  }
};

export default persistReducer(persistConfig, uiReducer);
