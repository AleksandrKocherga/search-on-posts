import { ADD_POSTS, ADD_USERS, SEARCH_PART } from './actionTypes';

export function reducer(state = { users: [], posts: [], search: '' }, action) {
  switch (action.type) {
    case ADD_POSTS:
      return { ...state, posts: action.payload };
    case ADD_USERS:
      return { ...state, users: action.payload };
    case SEARCH_PART:
      return { ...state, search: action.payload };
    default:
      return state;
  }
}
