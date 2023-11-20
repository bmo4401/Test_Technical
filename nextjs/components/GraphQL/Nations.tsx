'use client';

import { getNations } from '@/components/GraphQL/getNations.graphql';
import { Query } from '@/types/graphql';
import { useState } from 'react';

const Nations = () => {
  const [nations, setNations] = useState<Query>();

  const onClick = async () => {
    const data = await getNations();
    data && setNations(data);
  };
  return (
    <div className="p-10 ">
      <button onClick={onClick}> Hello</button>
      <div className="border-green-600 border-2 px-5 py-3 max-h-40 overflow-y-auto flex justify-between flex-col items-center">
        {nations?.continent?.countries.map((country) => (
          <h2 className="text-green-600 px-2 py-2">{country.name}</h2>
        ))}
      </div>
    </div>
  );
};
export default Nations;
