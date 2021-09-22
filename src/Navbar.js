import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
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
          <li className="hover:text-living-red flex text-left">
            <p>About</p>
          </li>
          <li className="hover:text-living-red">
            <p>Services</p>
          </li>
          <li className="hover:text-living-red">
            <p>Our Clients</p>
          </li>
          <li className="hover:text-living-red">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default NavBar;
