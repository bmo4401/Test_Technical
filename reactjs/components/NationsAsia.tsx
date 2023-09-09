'use client';

import { Continent, Country } from '@/type/graphql';

const NationsAsia = ({ data }: { data: Continent }) => {
  return (
    <div className="p-10 ">
      {data.countries.map((nation) => (
        <h2>{nation.name}</h2>
      ))}
    </div>
  );
};
export default NationsAsia;
