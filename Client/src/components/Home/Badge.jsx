
const Badge = ({ text }) => {
  return (
    <div className="w-fit flex items-center gap-2 text-green-400 rounded-full px-4 py-2 bg-green-700/20">
      <div className="relative flex size-3.5 items-center justify-center">
            <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping duration-300"></span>
            <span className="relative inline-flex size-2 rounded-full bg-green-600"></span>
      </div>
      <span>{text}</span>
    </div>
  );
};

export default Badge;
