import Footer from "./Footer";
import NavBar from "./Navbar";
import { useHistory } from "react-router-dom";

function Careers() {
  const history = useHistory();
  const positions = [
    "Sales Executive",
    "Sales Executive",
    "Graphic Designer",
    "Web Developer",
    "Content Writer",
  ];

  return (
    <>
      <NavBar />
      <div className="pb-10 lg:pb-40 pt-10 lg:pt-20 bg-blue-50">
        <div className="space-y-8 mx-8 md:mx-40 lg:mx-72 border-living-header border-2 rounded-xl bg-white font-base lg:font-semibold">
          <div className="grid space-y-8 ml-4 lg:ml-14 mr-4 lg:mr-14">
            <h2 className="text-xl md:text-3xl text-center pt-10 lg:font-bold text-living-red">
              Careers at Living Solutions Pakistan
            </h2>

            <h3 className="text-lg md:text-xl underline">
              Current Career Opportunities
            </h3>
            <hr />

            <ul className="text-base md:text-lg space-y-8">
              <li className="flex flex-wrap space-y-2 justify-around lg:justify-between">
                <div className="">
                  <p className="mb-4">{positions[0]}</p>
                  <p className="font-normal">
                    Bahria Town Phase 7, Rawalpindi | Full Time
                  </p>
                </div>
                <div className="">
                  <button
                    onClick={() => history.push(`/apply/${positions[0]}`)}
                    className="px-14 py-3 shadow-md bg-living-red text-sm lg:text-base hover:bg-opacity-80 text-white mt-4 md:mt-0"
                  >
                    Apply now
                  </button>
                </div>
              </li>
              <hr />

              <h3 className="text-lg md:text-xl underline">Drop Your CV</h3>
              <hr />
              <li className="flex flex-wrap space-y-2 justify-around md:justify-between">
                <div className="">
                  <p className="mb-4">{positions[2]}</p>
                  <p className="font-normal">
                    Bahria Town Phase 7, Rawalpindi | Full Time
                  </p>
                </div>
                <div className="">
                  <button
                    onClick={() => history.push(`/apply/${positions[2]}`)}
                    className="px-14 py-3 shadow-md bg-living-red text-sm lg:text-base hover:bg-opacity-80 text-white mt-4 md:mt-0"
                  >
                    Apply now
                  </button>
                </div>
              </li>
              <hr />
              <li className="flex flex-wrap space-y-2 justify-around md:justify-between">
                <div className="">
                  <p className="mb-4">{positions[3]}</p>
                  <p className="font-normal">
                    Bahria Town Phase 7, Rawalpindi | Full Time
                  </p>
                </div>
                <div className="">
                  <button
                    onClick={() => history.push(`/apply/${positions[3]}`)}
                    className="px-14 py-3 shadow-md bg-living-red text-sm lg:text-base hover:bg-opacity-80 text-white mt-4 md:mt-0"
                  >
                    Apply now
                  </button>
                </div>
              </li>
              <hr />
              <li className="flex flex-wrap space-y-2 justify-around md:justify-between">
                <div className="">
                  <p className="mb-4">{positions[4]}</p>
                  <p className="font-normal">
                    Bahria Town Phase 7, Rawalpindi | Full Time
                  </p>
                </div>
                <div className="">
                  <button
                    onClick={() => history.push(`/apply/${positions[4]}`)}
                    className="px-14 py-3 shadow-md bg-living-red text-sm lg:text-base hover:bg-opacity-80 text-white mt-4 md:mt-0"
                  >
                    Apply now
                  </button>
                </div>
              </li>
              <hr />
              <li className="flex flex-wrap space-y-2 justify-around md:justify-between">
                <div className="">
                  <p className="mb-4">{positions[5]}</p>
                  <p className="font-normal">
                    Bahria Town Phase 7, Rawalpindi | Full Time
                  </p>
                </div>
                <div className="">
                  <button
                    onClick={() => history.push(`/apply/${positions[5]}`)}
                    className="px-14 py-3 shadow-md bg-living-red text-sm lg:text-base hover:bg-opacity-80 text-white mt-4 md:mt-0"
                  >
                    Apply now
                  </button>
                </div>
              </li>
              <hr />
              <hr />
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Careers;
