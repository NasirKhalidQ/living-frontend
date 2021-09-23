import Footer from "./Footer";
import NavBar from "./Navbar";
import { Link } from "react-router-dom";

function Landing({ imgpath }) {
  return (
    <>
      <NavBar />
      <div className="relative">
        <img src={imgpath} alt="background" />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 text-xs lg:text-xl bg-living-header text-white">
        <img
          className="object-cover w-full h-full border-2 border-black"
          src="./imgs/marketing.png"
          alt="marketing"
        />
        <img
          className="object-cover w-full h-full border-2 border-black"
          src="./imgs/architecture.jpg"
          alt="architecture"
        />
        <a className="flex md:hidden hover:text-living-red" href="#">
          Marketing and Branding
        </a>
        <a className="flex md:hidden hover:text-living-red" href="#">
          Architecture
        </a>
        <img
          className="object-cover w-full h-full border-2 border-black"
          src="./imgs/real-estate.png"
          alt="real estate"
        />
        <a className="hidden md:flex hover:text-living-red" href="#">
          Marketing and Branding
        </a>
        <a className="hidden md:flex hover:text-living-red" href="#">
          Architecture
        </a>
        <Link className="hidden md:flex hover:text-living-red" to="/category">
          Real Estate and Construction
        </Link>
        <img
          className="object-cover w-full h-full border-2 border-black"
          src="./imgs/interior.png"
          alt="interior"
        />
        <a className="flex md:hidden hover:text-living-red" href="#">
          Real Estate and Construction
        </a>
        <a className="flex md:hidden hover:text-living-red" href="#">
          Interior Design
        </a>

        <img
          className="object-cover w-full h-full border-2 border-black"
          src="./imgs/insurance.png"
          alt="general insurance"
        />

        <img
          className="object-cover w-full h-full border-2 border-black"
          src="./imgs/govt.png"
          alt="government contracts"
        />
        <a className="flex md:hidden hover:text-living-red" href="#">
          General Insurance
        </a>
        <a className="hidden md:flex hover:text-living-red" href="#">
          Interior Design
        </a>
        <a className="hidden md:flex hover:text-living-red" href="#">
          General Insurance
        </a>
        <a className="hidden md:flex hover:text-living-red" href="#">
          Government/Non-government Contracts
        </a>
        <a className="flex md:hidden hover:text-living-red" href="#">
          Govt/Non-govt Contracts
        </a>
        <img
          className="object-cover w-full h-full border-2 border-black"
          src="./imgs/event.png"
          alt="event management"
        />

        <img
          className="object-cover w-full h-full border-2 border-black"
          src="./imgs/procurement.jpg"
          alt="procurement"
        />
        <a className="flex md:hidden hover:text-living-red" href="#">
          Event Management
        </a>
        <a className="flex md:hidden hover:text-living-red" href="#">
          Procurement Solutions
        </a>
        <img
          className="object-cover w-full h-full border-2 border-black"
          src="./imgs/printing.jpg"
          alt="printing"
        />
        <a className="hidden md:flex hover:text-living-red" href="#">
          Event Management
        </a>
        <a className="hidden md:flex hover:text-living-red" href="#">
          Procurement Solutions
        </a>
        <a className="hidden md:flex hover:text-living-red" href="#">
          Printing Solutions
        </a>
        <img
          className="object-cover w-full h-full border-2 border-black"
          src="./imgs/video.jpg"
          alt="video"
        />
        <a className="flex md:hidden hover:text-living-red" href="#">
          Printing Solutions
        </a>
        <a className="flex md:hidden hover:text-living-red" href="#">
          Video Production
        </a>
        <p className="hidden md:flex text-living-header"></p>
        <p className="hidden md:flex text-living-header"></p>

        <a className="hidden md:flex hover:text-living-red" href="#">
          Video Production
        </a>
      </div>
      <Footer />
    </>
  );
}

export default Landing;
