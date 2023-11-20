'use client';
import {
  addPost,
  fetchPosts,
  getPostById,
  getPosts,
} from '@/redux/features/posts/postsSlice';
import { AppDispatch, RootState } from '@/redux/store';
import { useDispatch, useSelector } from 'react-redux';
const PostsList = () => {
  const posts = useSelector((state: RootState) => getPosts(state));
  const post = useSelector((state: RootState) => getPostById(state, 2));
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className="flex flex-col gap-10">
      <div className="flex gap-3">
        <h2>{post && post.id}</h2>
        <h2>{post && post.title.substring(0, 5)}</h2>
        <h2>{post && post.body.substring(0, 5)}</h2>
        <h2>{post && post.userId}</h2>
      </div>
      <div className="flex flex-col gap-5 max-h-64 h-64 w-40 items-center overflow-y-auto rounded-md px-5 py-3 border border-emerald-500 ">
        {posts.map((post, idx) => (
          <h2 className="text-center">
            {posts[posts.length - idx - 1].title.substring(0, 5)}
          </h2>
        ))}
      </div>
      <button
        onClick={() =>
          dispatch(addPost({ id: '3', title: 'Hello', content: "It's me" }))
        }
        className="px-5 py-2 bg-orange-500 rounded-md"
      >
        Add
      </button>
      <button
        onClick={() => dispatch(fetchPosts())}
        className="px-5 py-2 bg-orange-500 rounded-md"
      >
        Fetch
      </button>
    </div>
  );
};
export default PostsList;
