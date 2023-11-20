import { cn } from '@/libs/utils';
import Image from 'next/image';

export interface RingProps {
  name: string;
  duration: number;
  ring: {
    size: { width: number };
    position: {
      top: number;
      left: number;
    };
    color?: string;
  };
  target: {
    size: {
      width: number;
      height: number;
    };
    position: {
      top: number;
      left: number;
    };
    color?: string;
    children?: React.ReactNode;
  };
  isCore?: boolean;
}
const Ring: React.FC<RingProps> = ({
  duration,
  name,
  ring,
  target,

  isCore = false,
}) => {
  return (
    <li
      id={name}
      className={cn(
        'block absolute border-2  indent-[-9999px] rounded-full aspect-square',
        isCore ? '' : 'animate-spin',
      )}
      style={{
        width: ring.size.width,
        top: ring.position.top,
        left: ring.position.left,
        borderColor: ring.color ?? '#394057',
        animationDuration: `${duration}s`,
        backgroundColor: isCore ? ring.color ?? '#394057' : '',
      }}
    >
      <a href="#mercury">
        <span
          className={cn('block absolute rounded-full ')}
          style={{
            width: target.size.width,
            height: target.size.height,
            top: target.position.top,
            left: target.position.left,
            backgroundColor: target.color ?? '',
            display: isCore ? 'none' : '',
          }}
        >
          {name}
          {target.children}
        </span>
      </a>
    </li>
  );
};
export default Ring;
