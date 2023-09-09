import FetchingSongs from '@/components/ReactQuery/FetchingSongs';

export default function Home() {
  return (
    <div className="w-screen h-screen ">
      <div className="w-full h-full p-10 flex items-center justify-center my-auto">
        <FetchingSongs />
      </div>
    </div>
  );
}
