import Fetching from '@/app/(root)/fetch/Fetching';
import axios from 'axios';

const url = 'http://worldtimeapi.org/api/timezone/Asia/Ho_Chi_Minh';
const FetchingPage = async () => {
  /*   const res = await fetch(url, { next: { revalidate: 10 } }); */
  const res = await axios.get(url);
  const data = res.data;
  const date = new Date(data.datetime).toLocaleTimeString();
  const time = (Math.random() * 1000).toFixed(4);
  return (
    <Fetching
      data={date}
      random={time}
    />
  );
};

export default FetchingPage;
