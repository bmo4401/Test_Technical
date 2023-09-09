import { Observable, Observer, map } from 'rxjs';
import { NextResponse, NextRequest } from 'next/server';
type Data = {
   id: number;
   name: string;
   active: number;
};
const data = [
   {
      id: 17,
      name: 'medicine',
      active: 0,
   },
   {
      id: 18,
      name: 'lucky',
      active: 1,
   },
   {
      id: 42,
      name: 'popular',
      active: 1,
   },
   {
      id: 55,
      name: 'imagine',
      active: 1,
   },
   {
      id: 39,
      name: 'perfect',
      active: 0,
   },
   {
      id: 31,
      name: 'butter',
      active: 1,
   },
   {
      id: 11,
      name: 'wing',
      active: 1,
   },
];

const observable = new Observable<Data[]>((subscriber) => {
   subscriber.error();
   subscriber.next(data);
   subscriber.next(data);
}).pipe(
   map((value) => {
      console.log(value);
      return value.map((data) => ({ ...data, name: '(1)' + data.name }));
   }),
   map((value) =>
      value.filter((data) => {
         console.log(data);
         return data.id > 10;
      }),
   ),
   map((value) => {
      throw new NextResponse("Doesn't enough data", { status: 500 });
   }),
);

const observer: Observer<Data[]> = {
   next: (value) => {
      console.log('❄️ ~ file: rxjs.ts:9 ~ value:', value);
   },
   error: (err) => {
      console.log('❄️ ~ file: rxjs.ts:15 ~ observer:Observer<JSON>.err:', err);
   },
   complete: () => {
      console.log('Completed');
   },
};

observable.subscribe(observer);
/* pipe->next */
