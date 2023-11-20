'use client';
import { useState } from 'react';

const data = [
  {
    name: 'One',
    children: [
      {
        name: '1.2',
        children: [
          {
            name: '1.2.1',
          },
          {
            name: '1.2.2',
          },
          {
            name: '1.2.3',
          },
          {
            name: '1.2.4',
          },
          {
            name: '1.2.5',
          },
        ],
      },
    ],
  },
  {
    name: 'Two',
    children: [
      {
        name: '2.1',
        children: [
          {
            name: '2.1.1',
            children: [
              {
                name: '2.1.1.1',
              },
              {
                name: '2.1.1.2',
              },
              {
                name: '2.1.1.3',
                children: [
                  {
                    name: '2.1.1.3.1',
                    children: [
                      {
                        name: '2.1.1.3.1.1',
                      },
                    ],
                  },
                ],
              },
              {
                name: '2.1.1.4',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: 'Three',
  },
];

type TEntry = {
  name: string;
  children?: TEntry[];
};

function Entry({ entry, deep }: { entry: TEntry; deep: number }) {
  const [click, setClick] = useState(false);
  return (
    <div style={{ marginLeft: `${deep * 10}px` }}>
      <button onClick={() => setClick(!click)}>
        {entry.children ? '+' : ''}
        {entry.name}
      </button>
      {click &&
        entry.children?.map((item) => (
          <Entry
            entry={item}
            deep={deep + 1}
          />
        ))}
    </div>
  );
}
const Dropdown = () => {
  return (
    <div>
      Dropdown
      <div>
        {data.map((entry) => (
          <Entry
            entry={entry}
            deep={1}
          />
        ))}
      </div>
    </div>
  );
};
export default Dropdown;
