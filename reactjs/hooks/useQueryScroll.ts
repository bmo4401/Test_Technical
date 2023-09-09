'use client';

import getSongs, { LIMIT, Slug } from '@/actions/getSongs';
import { useInfiniteQuery } from '@tanstack/react-query';

const UseQueryScroll = ({ slug }: { slug: Slug }) => {
  return useInfiniteQuery({
    queryKey: ['songs'],
    queryFn: ({ pageParam }) => getSongs({ pageParam, slug }),
    getNextPageParam: (lastPage, pages) => {
      return lastPage.length === LIMIT ? pages.length + 1 : undefined;
    },
  });
};
export default UseQueryScroll;
