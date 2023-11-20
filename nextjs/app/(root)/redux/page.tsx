import Redux from '@/components/Redux/Redux';
import Sass from '@/components/Sass/Sass';
import ReduxCreateApiProvider from '@/providers/ReduxCreateApiProvider';
import ReduxProvider from '@/providers/ReduxProvider';

const ReduxPage = () => {
  return (
    <ReduxProvider>
      <Sass />
    </ReduxProvider>
  );
};
export default ReduxPage;
