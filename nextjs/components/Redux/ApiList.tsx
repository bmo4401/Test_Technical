'use client';

import { useGetTodoQuery } from '@/redux/features/api/apiSlice';
import { addBook, addBooks, getBooks } from '@/redux/features/books/booksSlice';
import { getPosts } from '@/redux/features/posts/postsSlice';
import { useAppDispatch, useAppSelector } from '@/redux/store';
import { useEffect } from 'react';

const ApiList = () => {
  const books = useAppSelector(getBooks);
  const posts = useAppSelector(getPosts);
  const dispatch = useAppDispatch();
  const { isSuccess, data } = useGetTodoQuery();

  useEffect(() => {
    if (data) {
      dispatch(addBooks(data));
    }
  }, [data, isSuccess]);
  return (
    <div className="flex flex-col w-60 gap-3 max-h-80 h-80 overflow-y-auto border border-emerald-500 rounded-md items-center py-3 ">
      <button
        onClick={() => {
          dispatch(
            addBook({
              id: Math.floor(Math.random() * 100),
              title: 'Hello',
              body: "It's me",
            }),
          );
        }}
      >
        Add
      </button>
      <h2 className="text-rose-500">Posts</h2>
      {posts.map((post) => {
        return (
          <div
            key={post.id}
            className="flex gap-3 underline border border-rose-500 hover:opacity-90"
          >
            <h2>{post.id}</h2>
            <h2>{post.body.substring(0, 5)}</h2>
          </div>
        );
      })}
      {/*  {data ? (
        data.map((item: Post) => (
          <div
           
            key={item.id}
            className="flex gap-5 underline border border-rose-500 hover:opacity-90"
          >
            <h2>{item.id}</h2>
            <h2>{item.body.substring(0, 5)}</h2>
          </div>
        ))
      ) : (
        <h2>Loading...</h2>
      )} */}
    </div>
  );
};
export default ApiList;
