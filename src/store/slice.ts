import { createSlice } from '@reduxjs/toolkit';
import { IData } from '../tyeps';
export interface IState {
  isLoading: boolean;
  isError: boolean;
  isAuth: boolean;
  languge: string;
  posts: IData[];
}

const localPosts: IData[] =
  localStorage.getItem('posts') !== null ? JSON.parse(localStorage.getItem('posts')!) : [];

const localAuth: boolean =
  localStorage.getItem('auth') !== null ? JSON.parse(localStorage.getItem('auth')!) : false;

const localLanguage: string =
  localStorage.getItem('language') !== null ? localStorage.getItem('language')! : 'EN';

const initialState: IState = {
  isLoading: false,
  isError: false,
  isAuth: localAuth,
  languge: localLanguage,
  posts: localPosts,
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    getPostsData: (state, action) => {
      state.posts = action.payload;
      localStorage.setItem('posts', JSON.stringify(state.posts));
    },
    removePostById: (state, action) => {
      state.posts = state.posts.filter((item) => item.id !== action.payload);
      localStorage.setItem('posts', JSON.stringify(state.posts));
    },
    setAuth: (state) => {
      state.isAuth = !state.isAuth;
      localStorage.setItem('auth', JSON.stringify(state.isAuth));
    },
    setLanguage: (state) => {
      state.languge === 'EN' ? (state.languge = 'UA') : (state.languge = 'EN');
      localStorage.setItem('language', state.languge);
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.isError = action.payload;
    },
  },
});

export const { removePostById, getPostsData, setLoading, setError, setAuth, setLanguage } =
  postsSlice.actions;
export default postsSlice.reducer;
