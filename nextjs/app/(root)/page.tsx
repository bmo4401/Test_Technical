import DndBoard from '@/components/DndKit/DndBoard';
import Sass from '@/components/Sass/Sass';
import ServerAction from '@/components/ServerAction/ServerAction';
import { Button } from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import Link from 'next/link';

export default function HomePage() {
  return (
    <Container>
      <ServerAction />
    </Container>
  );
}
