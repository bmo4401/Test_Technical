'use client';

import { Slug } from '@/actions/getSongs';
import { useInView } from '@/hooks/custom/useInView';
import UseQueryScroll from '@/hooks/useQueryScroll';

import { ElementRef, Fragment, useEffect, useRef, useState } from 'react';
const slugs: Slug[] = ['/trending', '/favorite', '/new-music', '/top-views'];
const FetchingSongs = () => {
  const { data, fetchNextPage, hasNextPage, status } = UseQueryScroll({
    slug: slugs[0],
  });
  const ref = useRef<ElementRef<'div'>>(null);
  const root = useRef<ElementRef<'div'>>(null);
  const { isIntersecting } = useInView(ref, {
    root: root.current!,
    threshold: 1,
    rootMargin: '300px',
  });
  useEffect(() => {
    if (isIntersecting) {
      fetchNextPage();
    }
  }, [isIntersecting]);

  return (
    <div className="w-full h-full px-auto m-auto flex items-center justify-center flex-col">
      <div className="p-5 border border-emerald-700 rounded-md pb-20 flex flex-col gap-10">
        <button
          onClick={() => fetchNextPage()}
          className=" px-5 py-3 bg-yellow-400 rounded-md"
        >
          Load more
        </button>
        <div
          ref={root}
          className="flex flex-col gap-3 border-white border rounded-md px-5 py-3 overflow-y-auto max-h-80"
        >
          {data?.pages?.map((songs, idx) => {
            return (
              <Fragment key={songs[idx]?._id ?? idx}>
                {songs.map((song, index) => {
                  return (
                    <h2
                      ref={index === songs.length - 1 ? ref : null}
                      className={`${
                        index === songs.length - 1 && 'text-rose-500 z-10'
                      }`}
                    >
                      {song.name_music}
                    </h2>
                  );
                })}
              </Fragment>
            );
          })}
        </div>
        <div className="h-1 w-full border border-red-500" />
      </div>
    </div>
  );
};
export default FetchingSongs;
