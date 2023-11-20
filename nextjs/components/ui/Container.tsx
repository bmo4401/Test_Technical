import { cn } from '@/libs/utils';

const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn('h-full py-10 inline-block mx-auto', className)}>
      {children}
    </div>
  );
};
export default Container;
