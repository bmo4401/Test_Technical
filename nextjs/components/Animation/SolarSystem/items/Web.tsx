import Image from 'next/image';

const Web = () => {
  return (
    <div className="absolute left-0 top-0 w-10 h-10  ">
      <Image
        alt=""
        src="/rings/web.svg"
        fill
        className="object-cover"
      />
    </div>
  );
};
export default Web;
