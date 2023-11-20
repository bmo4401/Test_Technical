import Image from 'next/image';

const NextJS = () => {
  return (
    <div className="absolute left-0 top-0 w-10 h-10 bg-white rounded-full border border-white">
      <Image
        alt=""
        src="/rings/nextjs.svg"
        fill
        className="object-cover"
      />
    </div>
  );
};
export default NextJS;
