/* 'use client';
import { ElementRef, useEffect, useRef, useState } from 'react';
import { z } from 'zod';

const Folders = ({ folders }: { folders: Folder[] }) => {
   const audioRef = useRef<ElementRef<'input'>>(null);
   const [toggle, setToggle] = useState<boolean>(false);
   useEffect(() => {
      console.log('1');
      return () => {
         console.log('clean');
      };
   }, [toggle]);
   return (
      <div className="w-full h-full mx-20 my-10 flex gap-10 flex-col ">
         {folders &&
            folders.map(({ id, name }) => (
               <div
                  key={id}
                  className="flex gap-5 text-teal-500 "
               >
                  <div>{id}</div>
                  <div>{name}</div>
               </div>
            ))}
         <input
            type="text"
            ref={audioRef}
         />
         <button
            onClick={() => setToggle(!toggle)}
            className="p-5 border border-rose-500 rounded-md w-fit h-4 flex items-center justify-center text-rose-500"
         >
            Click me
         </button>
      </div>
   );
};
export default Folders;
 */
