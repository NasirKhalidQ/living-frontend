function NavBar() {
  return (
    <>
      <div className="flex cursor-default bg-living-header sm:px-12">
        <div className="">
          <img
            className="flex w-1/2 md:w-full "
            src="./imgs/logo.svg"
            width="200"
            height="200"
            alt="logo"
          />
        </div>
        <ul className="hidden sm:flex flex-auto justify-end items-center gap-12 text-white uppercase text-sm">
          <li className="hover:text-living-red flex text-left">
            <p>About</p>
          </li>
          <li className="hover:text-living-red">
            <p>Services</p>
          </li>
          <li className="hover:text-living-red">
            <p>Contact</p>
          </li>
        </ul>
      </div>
    </>
  );
}

export default NavBar;
