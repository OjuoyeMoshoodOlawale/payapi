import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
export default function Header() {
  return (
    <nav className=" max-w-full flex justify-between items-center mt-1 mx-12">
      <div className="flex  justify-between items-center gap-25">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <ul className="flex justify-between items-center gap-7">
          <li>
            <Link to="/"> Home </Link>
          </li>
          <li>
            <Link to="/pricing"> Pricing </Link>
          </li>
          <li>
            <Link to="/about"> About </Link>
          </li>
          <li>
            <Link to="/contact"> Contact </Link>
          </li>
        </ul>
      </div>
      <button className="py-3 px-4 m-7 rounded-full  bg-(--dark-pink) hover:bg-pink-600  text-white cursor-pointer">
        Schedule a Demo
      </button>
    </nav>
  );
}
