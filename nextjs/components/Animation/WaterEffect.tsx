import { cn } from '@/libs/utils';
import { Poppins } from 'next/font/google';
const font = Poppins({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800', '900'],
});
const WaterEffect = () => {
  return (
    <div className={cn('relative text-9xl', font.className)}>
      <h2
        className="absolute  -translate-x-1/2 -translate-y-1/2"
        style={{
          WebkitTextStroke: '2px #03a9f4',
        }}
      >
        Water
      </h2>
      <h2 className="absolute  -translate-x-1/2 -translate-y-1/2 text-[#03a9f4] animate-water">
        Water
      </h2>
    </div>
  );
};
export default WaterEffect;
