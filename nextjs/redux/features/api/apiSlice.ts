import { Post } from '@/redux/features/posts/postsSlice';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const API_URL = 'https://jsonplaceholder.typicode.com';
export const apiSlice = createApi({
  reducerPath: 'api',
  tagTypes: [''],
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    getTodo: builder.query<Post[], void>({
      query: () => ({
        url: '/posts',
        method: 'GET',
      }),
      transformResponse: (res: [Post]) => {
        return res.splice(0, 10);
      },
    }),
  }),
});

export const { useGetTodoQuery } = apiSlice;
