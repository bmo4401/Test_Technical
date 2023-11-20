import { booksSlice } from '@/redux/features/books/booksSlice';
import { postsSlice } from '@/redux/features/posts/postsSlice';
import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from '@/redux/features/api/apiSlice';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
export const store = configureStore({
  reducer: {
    [postsSlice.name]: postsSlice.reducer,
    [booksSlice.name]: booksSlice.reducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  devTools: true,
  middleware: (getDefault) => {
    return getDefault().concat(apiSlice.middleware);
  },
});
/* setupListeners(store.dispatch); */

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
