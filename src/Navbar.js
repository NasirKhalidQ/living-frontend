import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import Hamburger from "hamburger-react";
import { SocialIcon } from "react-social-icons";

function NavBar() {
  const [isOpen, setOpen] = useState(false);
  const history = useHistory();

  return (
    <>
      {isOpen && (
        <nav className="gap-12 absolute bg-black p-6 h-auto sm:hidden w-1/2 justify-start top-0 right-0 text-xl border-l-2 border-b-2 border-white text-white z-10">
          <ul>
            <li className="mt-8 hover:text-living-red">
              <Link to="/">Home</Link>
            </li>
            <li className="mt-2 hover:text-living-red">
              <Link to="/about">Our Team</Link>
            </li>
            <li className="mt-2 hover:text-living-red">
              <Link to="/services">Services</Link>
            </li>
            <li className="mt-2 hover:text-living-red">
              <Link to="/clients">Portfolio</Link>
            </li>
            <li className="mt-2 hover:text-living-red">
              <Link to="/blog">Blog</Link>
            </li>
            <li className="mt-2 hover:text-living-red">
              <Link to="/careers">Careers</Link>
            </li>
            <li className="mt-2 hover:text-living-red">
              <Link to="/contact">Contact</Link>
            </li>
            <li className="mt-2 hover:text-living-red">
              <Link to="/quote">Get a Quote</Link>
            </li>
          </ul>
        </nav>
      )}

      <div className="flex cursor-default bg-living-header border-b-2 border-living-yellow pl-0 md:px-12">
        <div className="">
          <Link to="/">
            <img
              className="w-3/4 md:w-auto"
              src="/imgs/lv.svg"
              alt="living logo"
            />
          </Link>
        </div>
        <ul className="hidden sm:flex flex-auto justify-end items-center gap-12 text-white uppercase text-sm">
          <li className="hover:text-living-red transition duration-500 ease-in-out">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-living-red transition duration-500 ease-in-out">
            <Link to="/about">Our Team</Link>
          </li>
          <li className="hover:text-living-red transition duration-500 ease-in-out">
            <Link to="/services">Services</Link>
          </li>
          <li className="hover:text-living-red transition duration-500 ease-in-out">
            <Link to="/clients">Portfolio</Link>
          </li>
          <li className="hover:text-living-red transition duration-500 ease-in-out">
            <Link to="/blog">Blog</Link>
          </li>
          <li className="hover:text-living-red transition duration-500 ease-in-out">
            <Link to="/careers">Careers</Link>
          </li>
          <li className="hover:text-living-red transition duration-500 ease-in-out">
            <Link to="/contact">Contact</Link>
          </li>
          <li className>
            <button
              className="py-2 px-4 shadow-md bg-living-red hover:opacity-80 text-white"
              onClick={() => history.push("/quote")}
            >
              Get a Quote
            </button>
          </li>
        </ul>
        <div className="absolute px-6 py-4 sm:hidden top-0 right-0 z-10">
          <Hamburger toggled={isOpen} toggle={setOpen} color="white" />
        </div>
        <div className="fixed top-1/2 grid grid-flow-row right-2 z-10">
          <SocialIcon
            url="https://www.facebook.com/livingsolutionpk"
            fgColor="white"
            target="_blank"
          />
          <SocialIcon
            url="https://api.whatsapp.com/send/?phone=923005059740&text&app_absent=0"
            fgColor="white"
            target="_blank"
          />
          <SocialIcon
            url="https://twitter.com/pvt_living?t=EiV2w3Mqx5wy_oKLsKZRgw&s=09"
            fgColor="white"
            target="_blank"
          />
          <SocialIcon
            url="https://www.youtube.com/channel/UCLF-FxK_37E3CImuzdTJ64g"
            fgColor="white"
            target="_blank"
          />
          <SocialIcon
            url="https://www.instagram.com/livingsolutionspk/"
            fgColor="white"
            target="_blank"
          />
          <SocialIcon
            url="https://www.linkedin.com/company/living-solution/"
            fgColor="white"
            target="_blank"
          />
        </div>
      </div>
    </>
  );
}

export default NavBar;
