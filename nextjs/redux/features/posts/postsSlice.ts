import { addBook, addBooks } from '@/redux/features/books/booksSlice';
import { RootState } from '@/redux/store';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
const POST_URL = 'https://jsonplaceholder.typicode.com/posts';

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}
const initialState = {
  posts: [] as Post[],
  status: 'pending' || 'fulfilled' || 'success',
  error: '',
};
/* createAsyncThunk */
export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const response = await axios.get(POST_URL);
  return response.data;
});

/* slice */
export const postsSlice = createSlice({
  name: 'postsSlice',
  initialState,
  reducers: {
    addPost: (state, action) => {
      state.posts.push(action.payload);
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchPosts.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message!;
      })
      /* listening action "addBooks" when dispatched */
      .addCase(addBooks, (state, action) => {
        state.posts = action.payload;
      });
  },
});

export const getPosts = (state: RootState) => {
  return state.postsSlice?.posts ?? [];
};
export const getPostById = (state: RootState, id: number) =>
  state.postsSlice?.posts.find((post) => post.id === id);
export const getStatus = (state: RootState) => state.postsSlice.status;
export const getError = (state: RootState) => state.postsSlice.error;

export const { addPost } = postsSlice.actions;
export default postsSlice.reducer;
