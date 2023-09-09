import { Song } from '@/type/song';
import axios from 'axios';
export type Slug = '/trending' | '/favorite' | '/new-music' | '/top-views';
interface getSongsProps {
  slug: Slug;
  params?: {
    _limit?: number;
    _page?: number;
    _type?: 'million' | 'billion';
  };
  pageParam: number;
}

export const LIMIT = 10;

const getSongs = async ({ pageParam = 1, slug }: getSongsProps) => {
  console.log('❄️ ~ file: getSongs.ts:17 ~ pageParam:', pageParam);
  const url = process.env.NEXT_PUBLIC_SONG_API + '/music' + slug;
  const {
    data: { data },
  } = await axios.get<{ data: Song[] }>(url, {
    params: {
      _limit: LIMIT,
      _page: pageParam,
    },
  });
  return data;
};
export default getSongs;
