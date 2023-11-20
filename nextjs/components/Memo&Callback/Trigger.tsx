'use client';

import React, { useEffect, useMemo, useState } from 'react';

const Trigger = ({ click }: { click: number }) => {
   const [isMounted, setMounted] = useState(false);
   useEffect(() => {
      setMounted(true);
   }, []);
   console.log('Render');
   const [trigger, setTrigger] = useState<boolean>(false);
   const Trigger = useMemo(() => {
      setTrigger((prev) => !prev);
      return 'Trigger';
   }, []);
   if (!isMounted) return null;
   return (
      <>
         <h1 className="text-violet-500 text-3xl font-semibold shadow-sm shadow-emerald-500 px-10 py-5 rounded-md">
            <h1>{trigger}</h1>
         </h1>
      </>
   );
};
export default React.memo(Trigger, (current, prev) => {
   console.log(prev.click === current.click);
   /* if true don't re-render */
   return prev.click !== current.click;
});

/* export default Trigger; */
