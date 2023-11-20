import Image from 'next/image';

const CSS3 = () => {
  return (
    <div className="absolute left-0 top-0 w-10 h-10  ">
      <Image
        alt=""
        src="/rings/css3.svg"
        fill
        className="object-cover"
      />
    </div>
  );
};
export default CSS3;
