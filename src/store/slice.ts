import { createSlice } from '@reduxjs/toolkit';
import { IData } from '../tyeps';
export interface IState {
  isLoading: boolean;
  isError: boolean;
  posts: IData[];
}

const initialState: IState = { isLoading: false, isError: false, posts: [] };

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    getPostsData: (state, action) => {
      state.posts = action.payload;
    },
    removePostById: (state, action) => {
      state.posts = state.posts.filter((item) => item.id !== action.payload);
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.isError = action.payload;
    },
  },
});

export const { removePostById, getPostsData, setLoading, setError } = postsSlice.actions;
export default postsSlice.reducer;
