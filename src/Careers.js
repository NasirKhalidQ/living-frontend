import Footer from "./Footer";
import NavBar from "./Navbar";
import { useHistory } from "react-router-dom";

function Careers() {
  const history = useHistory();

  return (
    <>
      <NavBar />
      <div className="flex-auto mb-10">
        <img
          className=" object-cover h-1/12"
          src="./imgs/hiring.jpg"
          alt="hiring"
        />
        <div className="ml-10 md:ml-40 mt-2 md:mt-10 space-y-8 mr-10">
          <h3 className="text-2xl text-living-red">Open Positions</h3>
          <ul className="text-lg space-y-8 text-gray-700">
            <li className="grid grid-cols-2 md:grid-cols-5">
              Open position 1
              <button
                onClick={() => history.push("/apply")}
                className="px-4 rounded-lg shadow-md border-blue-400 border-2 hover:bg-blue-50 text-blue-400 justify-self-end col-span-1 md:col-span-3"
              >
                Apply now
              </button>
            </li>

            <li className="grid grid-cols-2 md:grid-cols-5">
              Open position 2
              <button
                onClick={() => history.push("/apply")}
                className="px-4 rounded-lg shadow-md border-blue-400 border-2 hover:bg-blue-50 text-blue-400 justify-self-end col-span-1 md:col-span-3"
              >
                Apply now
              </button>
            </li>
            <li className="grid grid-cols-2 md:grid-cols-5">
              Open position 3
              <button
                onClick={() => history.push("/apply")}
                className="px-4 rounded-lg shadow-md border-blue-400 border-2 hover:bg-blue-50 text-blue-400 justify-self-end col-span-1 md:col-span-3"
              >
                Apply now
              </button>
            </li>
            <li className="grid grid-cols-2 md:grid-cols-5">
              Open position 4
              <button
                onClick={() => history.push("/apply")}
                className="px-4 rounded-lg shadow-md border-blue-400 border-2 hover:bg-blue-50 text-blue-400 justify-self-end col-span-1 md:col-span-3"
              >
                Apply now
              </button>
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Careers;
