import ApiList from '@/components/Redux/ApiList';
import PostsList from '@/components/Redux/PostsList';

const Redux = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center p-10">
      {/*       <PostsList /> */}
      <ApiList />
    </div>
  );
};
export default Redux;
