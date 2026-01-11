import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="flex items-center justify-center">
      <p className="text-neutral-50 text-2xl font-bold ml-1 -mt-1">
        resu<span className="text-green-500">Craft</span>
      </p>
    </Link>
  );
};

export default Logo;
