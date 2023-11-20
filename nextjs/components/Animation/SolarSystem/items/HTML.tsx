import Image from 'next/image';

const HTML = () => {
  return (
    <div className="absolute left-0 top-0 w-10 h-10 ">
      <Image
        alt=""
        src="/rings/html.svg"
        fill
        className="object-cover"
      />
    </div>
  );
};
export default HTML;
