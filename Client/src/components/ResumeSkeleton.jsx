import React from 'react';

const ResumeSkeleton = () => {
  return (
    <div className="p-5 rounded-2xl border border-neutral-800 bg-neutral-900/20 flex flex-col justify-between h-44 animate-pulse">
      <div className="flex justify-between items-center w-full">
        <div className="w-9 h-9 rounded-xl bg-neutral-800/80"></div>
        <div className="w-8 h-4 bg-neutral-800/80 rounded"></div>
      </div>
      <div className="mt-4 flex-1 flex flex-col justify-end">
        <div className="h-4 bg-neutral-800/80 rounded w-3/4 mb-2"></div>
        <div className="h-2.5 bg-neutral-800/80 rounded w-1/2 mt-1"></div>
      </div>
    </div>
  );
};

export default ResumeSkeleton;
