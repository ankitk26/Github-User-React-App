import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="w-full py-3 text-3xl text-white bg-blue-500 md:px-5">
      <Link
        to="/"
        className="flex items-center justify-center gap-4 px-10 md:mt-0"
      >
        <i className="text-2xl fab fa-github" />
        <h1>Github User Finder</h1>
      </Link>
    </nav>
  );
};

export default Header;
