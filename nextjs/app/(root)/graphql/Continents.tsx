'use client';

import { DocumentType } from '@/gql';
import { Continent } from '@/gql/graphql';
import { cn } from '@/libs/utils';
import { useEffect, useState } from 'react';

interface ContinentsProps {
  continents: {
    __typename?: 'Continent' | undefined;
    name: string;
    countries: {
      __typename?: 'Country' | undefined;
      capital?: string | null | undefined;
    }[];
  }[];
  continent:
    | {
        __typename?: 'Continent' | undefined;
        name: string;
        countries:
          | {
              __typename?: 'Country' | undefined;
              capital?: string | null | undefined;
              emoji: string;
            }[];
      }
    | null
    | undefined;
}

const Continents: React.FC<ContinentsProps> = ({ continents, continent }) => {
  const [pick, setPick] = useState(0);
  useEffect(() => {
    pick &&
      document
        .getElementById('choose')
        ?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }, [pick]);
  return (
    <div className="w-full h-full justify-around flex gap-10">
      <div className="w-5 h-3 ">
        <input
          type="number"
          value={pick}
          className="w-36 h-10 border-4 border-emerald-500  bg-slate-100 rounded-md px-3 py-2 text-black"
          onChange={(e) => setPick(+e.target.value)}
        />
      </div>
      <div className="flex gap-10">
        <div className="w-60 h-80 max-h-80 overflow-y-auto flex flex-col gap-5 px-5 py-3 border-4 border-emerald-500 rounded-md">
          {continents.map((continent, idx) => (
            <div
              key={continent.name}
              className="flex gap-5"
            >
              <h2
                id={idx === pick ? 'choose' : ''}
                className={cn(
                  pick === idx
                    ? 'text-rose-500 underline decoration-rose-500'
                    : 'text-white',
                )}
              >
                {' '}
                {continent.name}
              </h2>
            </div>
          ))}
        </div>
        <div className="w-60 h-80 max-h-80 overflow-y-auto flex flex-col gap-5 px-5 py-3 border-4 border-emerald-500 rounded-md">
          {continent &&
            continent.countries.map((country, idx) => (
              <div
                key={country.capital}
                className="flex gap-5"
              >
                <h2
                  id={idx === pick ? 'choose' : ''}
                  className={cn(
                    pick === idx
                      ? 'text-rose-500 underline decoration-rose-500'
                      : 'text-white',
                  )}
                >
                  {' '}
                  {country.emoji}
                </h2>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
export default Continents;
