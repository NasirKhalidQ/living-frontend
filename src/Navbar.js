import { Link } from "react-router-dom";
import { useState } from "react";
import Hamburger from "hamburger-react";

function NavBar() {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      {isOpen && (
        <nav className="gap-12 absolute bg-black p-6 h-auto sm:hidden w-1/2 justify-start top-0 right-0 text-xl border-l-2 border-b-2 border-white text-white z-10">
          <ul>
            <li className="mt-8 hover:text-living-red">
              <Link to="/">Home</Link>
            </li>
            <li className="mt-2 hover:text-living-red">
              <Link to="/about">About</Link>
            </li>
            <li className="mt-2 hover:text-living-red">
              <Link to="/services">Services</Link>
            </li>
            <li className="mt-2 hover:text-living-red">
              <Link to="/clients">Our Clients</Link>
            </li>
            <li className="mt-2 hover:text-living-red">
              <Link to="/careers">Careers</Link>
            </li>
            <li className="mt-2 hover:text-living-red">
              <Link to="/contact">Contact</Link>
            </li>
            <li className="mt-2 hover:text-living-red">
              <Link to="/contact">Get a Quote</Link>
            </li>
          </ul>
        </nav>
      )}

      <div className="flex cursor-default bg-living-header sm:px-12">
        <div className="">
          <Link to="/">
            <img
              className="flex w-1/2 md:w-full "
              src="./imgs/logo.svg"
              width="200"
              height="200"
              alt="logo"
            />
          </Link>
        </div>
        <ul className="hidden sm:flex flex-auto justify-end items-center gap-12 text-white uppercase text-sm">
          <li className="hover:text-living-red">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-living-red">
            <Link to="/about">About</Link>
          </li>
          <li className="hover:text-living-red">
            <Link to="/services">Services</Link>
          </li>
          <li className="hover:text-living-red">
            <Link to="/clients">Our Clients</Link>
          </li>
          <li className="hover:text-living-red">
            <Link to="/careers">Careers</Link>
          </li>
          <li className="hover:text-living-red">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="hover:text-living-red">
            <Link to="/contact">Get a Quote</Link>
          </li>
        </ul>
        <div className="absolute px-6 py-4 sm:hidden top-0 right-0 z-10">
          <Hamburger toggled={isOpen} toggle={setOpen} color="white" />
        </div>
      </div>
    </>
  );
}

export default NavBar;
