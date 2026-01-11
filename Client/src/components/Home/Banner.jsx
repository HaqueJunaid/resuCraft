const Banner = () => {
  return (
    <div class="w-full py-2.5 font-medium text-sm text-white text-center bg-linear-to-r from-green-600 to-green-900">
      <p className="flex items-center justify-center">
        <span class="px-3 py-1 rounded-md text-green-600 bg-white mr-2 flex w-fit items-center gap-2 text-xs md:text-sm">
          <div className="relative flex size-2 items-center justify-center">
          <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping duration-300"></span>
            <span className="relative inline-flex size-2 rounded-full bg-green-600"></span>
          </div>
          New
        </span>
        <p className="text-xs md:text-sm">Use <span className="italic"> AI </span> to increase the chances of hiring.</p>
      </p>
    </div>
  );
};

export default Banner;
