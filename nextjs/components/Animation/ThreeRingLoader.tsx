const ThreeRingLoader = () => {
  return (
    <div className="w-full h-full flex items-center justify-center gap-10  ">
      <div className="relative w-48 h-48 ">
        <div className="w-48 h-48 border-b-8 border-indigo-500 animate-rotate_1 rounded-full absolute" />
        <div className="w-48 h-48 border-r-8 border-cyan-500 animate-rotate_2 rounded-full absolute" />
        <div className="w-48 h-48 border-t-8 border-emerald-500 animate-rotate_3 rounded-full absolute" />
      </div>
      <p className="absolute dark:text-white text-black animate-pulse">
        Loading
      </p>
      {/* <div className="w-48 h-48 relative">
        <div className="w-48 h-48 border-b-8 border-indigo-500 animate-rotate_1 rounded-full absolute" />
        <div className="w-48 h-48 border-t-8 border-cyan-500 animate-rotate_2 rounded-full absolute" />
        <div className="w-48 h-48 border-r-8 border-emerald-500 animate-rotate_3 rounded-full absolute" />
      </div> */}
    </div>
  );
};
export default ThreeRingLoader;
