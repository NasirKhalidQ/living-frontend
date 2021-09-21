function Landing({ imgpath }) {
  return (
    <>
      <div className="relative">
        <img src={imgpath} alt="background" />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 text-xs lg:text-xl bg-living-header text-white">
        <img
          className="object-cover w-full h-full"
          src="./imgs/marketing.png"
          alt="marketing"
        />
        <img
          className="object-cover w-full h-full"
          src="./imgs/interior.png"
          alt="architecture"
        />
        <a className="flex md:hidden hover:text-living-red" href="#">
          Marketing and Branding
        </a>
        <a className="flex md:hidden hover:text-living-red" href="#">
          Interior Design
        </a>
        <img
          className="object-cover w-full h-full"
          src="./imgs/insurance.png"
          alt="general insurance"
        />
        <a className="hidden md:flex hover:text-living-red" href="#">
          Marketing and Branding
        </a>
        <a className="hidden md:flex hover:text-living-red" href="#">
          Interior Design
        </a>
        <a className="hidden md:flex hover:text-living-red" href="#">
          General Insurance
        </a>
        <img
          className="object-cover w-full h-full border-white border-t-2"
          src="./imgs/real-estate.png"
          alt="real estate"
        />
        <a className="flex md:hidden hover:text-living-red" href="#">
          General Insurance
        </a>
        <a className="flex md:hidden hover:text-living-red" href="#">
          Real Estate and Construction
        </a>
        <img
          className="object-cover w-full h-full border-white border-t-2"
          src="./imgs/govt.png"
          alt="government contracts"
        />
        <img
          className="object-cover w-full h-full border-white border-t-2"
          src="./imgs/event.png"
          alt="event management"
        />
        <a className="flex md:hidden hover:text-living-red" href="#">
          Govt/Non-govt Contracts
        </a>
        <a className="flex md:hidden hover:text-living-red" href="#">
          Event Management
        </a>
        <a className="hidden md:flex hover:text-living-red" href="#">
          Real Estate and Construction
        </a>
        <a className="hidden md:flex hover:text-living-red" href="#">
          Government/Non-government Contracts
        </a>
        <a className="hidden md:flex hover:text-living-red" href="#">
          Event Management
        </a>
        <img
          className="object-cover w-full h-full border-white border-t-2"
          src="./imgs/procurement.jpeg"
          alt="procurement"
        />
        <img
          className="object-cover w-full h-full border-white border-t-2"
          src="./imgs/architecture.jpg"
          alt="architecture"
        />
        <p className="hidden md:flex text-living-header"></p>
        <a className="hidden md:flex hover:text-living-red" href="#">
          Procurement Solutions
        </a>
        <a className="flex md:hidden hover:text-living-red" href="#">
          Procurement Solutions
        </a>
        <a className="flex md:hidden hover:text-living-red" href="#">
          Architecture
        </a>
        <a className="hidden md:flex hover:text-living-red" href="#">
          Architecture
        </a>
      </div>
    </>
  );
}

export default Landing;
