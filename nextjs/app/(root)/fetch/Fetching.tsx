import { Button } from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import Link from 'next/link';

const Fetching = ({ data, random }: { data: any; random: string }) => {
  return (
    <Container className="dark: text-white text-4xl flex flex-col items-center gap-5">
      <h3> {data}</h3>
      <h3> {random}</h3>
      <Button>
        {' '}
        <Link href="/">Click to Home</Link>
      </Button>
    </Container>
  );
};
export default Fetching;
