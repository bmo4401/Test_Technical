'use client';

import { useCallback, useMemo, useState } from 'react';
import Trigger from './Trigger';

const Calculate = () => {
   const [click, setClick] = useState<number>(0);

   const [trigger, setTrigger] = useState<boolean>(false);
   const handleClick = () => {
      setTrigger((prev) => !prev);
      return 'Clicked';
   };
   const handleTrigger = useCallback(
      (trigger: boolean) => {
         handleClick();
         return '';
      },
      [click],
   );
   /*    useCallback caches a function between re-renders until its dependencies change. */
   return (
      <div className="text-white w-full h-full items-center justify-center flex flex-col gap-10">
         <button
            className="px-10 py-5 bg-emerald-500 rounded-md"
            onClick={() => setClick((prev) => prev + 1)}
         >
            Button
         </button>
         <h1>
            {click ? (
               <span className="text-rose-500 font-medium text-3xl">
                  "Click"
               </span>
            ) : (
               <span className="text-yellow-500 font-medium text-3xl">
                  "None"
               </span>
            )}
         </h1>
         <button
            className="px-10 py-5 bg-orange-500 rounded-md"
            onClick={() => handleTrigger(trigger)}
         >
            Button
         </button>

         <h1>{trigger ? 'True' : 'False'}</h1>
         <Trigger click={click} />
      </div>
   );
};
export default Calculate;
