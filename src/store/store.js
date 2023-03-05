import { createAction, createReducer, configureStore } from '@reduxjs/toolkit';

const ActionType = {
  SET_USERS: 'SET_USERS',
  SET_USER_POSTS: 'SET_USER_POSTS',
  SET_USER_ALBOMS: 'SET_USER_ALBUMS',
  SET_SELECT_USER: 'SET_SELECT_USER',
};

const initialState = {
  users: [],
  userPosts: [],
  userAlboms: [],
  selectUser: undefined,
};

export const setUsers = createAction(ActionType.SET_USERS);
export const setUserPosts = createAction(ActionType.SET_USER_POSTS);
export const setUserAlbums = createAction(ActionType.SET_USER_ALBOMS);
export const setSelectUser = createAction(ActionType.SET_SELECT_USER);

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setUsers, (state, action) => {
      state.users = action.payload;
    })
    .addCase(setUserPosts, (state, action) => {
      state.userPosts = action.payload;
    })
    .addCase(setUserAlbums, (state, action) => {
      state.userAlboms = action.payload;
    })
    .addCase(setSelectUser, (state, action) => {
      state.selectUser = action.payload;
    });
});

export const store = configureStore({
  reducer,
});
