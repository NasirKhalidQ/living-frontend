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
          src="./imgs/architecture.png"
          alt="architecture"
        />
        <a className="flex md:hidden hover:text-living-red" href="#">
          Marketing and Branding
        </a>
        <a className="flex md:hidden hover:text-living-red" href="#">
          Architecure and Interior Design
        </a>
        <img
          className="object-cover w-full h-full"
          src="./imgs/insurance.png"
          alt="General Insurance"
        />
        <a className="hidden md:flex hover:text-living-red" href="#">
          Marketing and Branding
        </a>
        <a className="hidden md:flex hover:text-living-red" href="#">
          Architecure and Interior Design
        </a>
        <a className="hidden md:flex hover:text-living-red" href="#">
          General Insurance
        </a>
        <img
          className="object-cover w-full h-full border-white border-t-2"
          src="./imgs/real-estate.png"
          alt="marketing"
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
          alt="architecture"
        />
        <img
          className="object-cover w-full h-full border-white border-t-2"
          src="./imgs/event.png"
          alt="General Insurance"
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
          alt="architecture"
        />
        <p className="text-living-header"></p>
        <a className="flex md:hidden hover:text-living-red" href="#">
          Procurement Solutions
        </a>
        <p className="text-living-header"></p>
        <a className="hidden md:flex hover:text-living-red" href="#">
          Procurement Solutions
        </a>
      </div>
    </>
  );
}

export default Landing;
