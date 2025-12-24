import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="max-w-full mt-1 mx-4 md:mx-12">
      <div className="flex justify-between items-center">
        {/* Left section */}
        <div className="flex items-center gap-4 md:gap-25">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="" className="h-10 md:h-auto" />
            </Link>
          </div>

          {/* Desktop menu */}
          <ul className="hidden md:flex items-center gap-7">
            <li>
              <Link to="/pricing">Pricing</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Desktop button */}
        <button className="hidden md:block py-3 px-4 rounded-full bg-(--dark-pink) hover:bg-pink-600 text-white">
          Schedule a Demo
        </button>

        {/* Burger button (mobile) */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden mt-4 flex flex-col items-center gap-4">
          <ul className="flex flex-col items-center gap-4">
            <li>
              <Link to="/pricing" onClick={() => setOpen(false)}>
                Pricing
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={() => setOpen(false)}>
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={() => setOpen(false)}>
                Contact
              </Link>
            </li>
          </ul>

          <button className="py-3 px-6 rounded-full bg-(--dark-pink) hover:bg-pink-600 text-white">
            Schedule a Demo
          </button>
        </div>
      )}
    </nav>
  );
}
