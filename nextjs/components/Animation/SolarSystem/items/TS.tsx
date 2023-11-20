import Image from 'next/image';

const TS = () => {
  return (
    <div className="absolute left-0 top-0 w-10 h-10 ">
      <Image
        alt=""
        src="/rings/ts.svg"
        fill
        className="object-cover"
      />
    </div>
  );
};
export default TS;
