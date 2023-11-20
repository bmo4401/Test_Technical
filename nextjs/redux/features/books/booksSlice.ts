'use client';
import { Post } from '@/redux/features/posts/postsSlice';
import { RootState } from '@/redux/store';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [] as Post[],
  status: 'pending' || 'fulfilled' || 'success',
  error: '',
};

/* slice */
export const booksSlice = createSlice({
  name: 'booksSlice',
  initialState,
  reducers: {
    addBooks(state, action) {
      state.books = action.payload;
    },
    addBook(state, action) {
      state.books.push(action.payload);
      return state;
    },
  },
});

export const getBooks = (state: RootState) => state.booksSlice?.books ?? [];
export const { addBook, addBooks } = booksSlice.actions;
export default booksSlice.reducer;
