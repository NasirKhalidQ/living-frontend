function Landing({ imgpath }) {
  return (
    <>
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
        <a className="hidden md:flex hover:text-living-red" href="#">
          Real Estate and Construction
        </a>
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
          src="./imgs/procurement.jpeg"
          alt="procurement"
        />

        <p className="hidden md:flex text-living-header"></p>
        <a className="hidden md:flex hover:text-living-red" href="#">
          Event Management
        </a>
        <a className="hidden md:flex hover:text-living-red" href="#">
          Procurement Solutions
        </a>
        <a className="flex md:hidden hover:text-living-red" href="#">
          Event Management
        </a>
        <a className="flex md:hidden hover:text-living-red" href="#">
          Procurement Solutions
        </a>
      </div>
    </>
  );
}

export default Landing;
