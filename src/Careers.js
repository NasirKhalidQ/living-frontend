import Footer from "./Footer";
import NavBar from "./Navbar";
import { useHistory } from "react-router-dom";

function Careers() {
  const history = useHistory();

  return (
    <>
      <NavBar />
      <div className="flex-auto pb-10 bg-black">
        <figure>
          <img
            className=" object-cover h-1/12"
            src="./imgs/hiring.jpg"
            alt="hiring"
          />
          <figcaption className="absolute text-gray-900 top-20 md:top-60 grid gap-6 ml-16 md:ml-32 w-3/4 md:w-1/2 font-normal md:font-bold">
            <h2 className="text-lg md:text-2xl font-bold">We are hiring!</h2>
          </figcaption>
        </figure>

        <div className="ml-10 md:ml-40 mt-2 md:mt-10 space-y-8 mr-10">
          <h3 className="text-2xl text-blue-400 underline">Open Positions</h3>
          <ul className="text-lg space-y-8 text-gray-50">
            <li className="grid grid-cols-2 md:grid-cols-5">
              Marketing
              <button
                onClick={() => history.push("/apply")}
                className="px-4 rounded-lg shadow-md border-blue-400 border-2 hover:bg-blue-900 text-blue-400 justify-self-end col-span-1 md:col-span-3"
              >
                Apply now
              </button>
            </li>

            <li className="grid grid-cols-2 md:grid-cols-5">
              Sales
              <button
                onClick={() => history.push("/apply")}
                className="px-4 rounded-lg shadow-md border-blue-400 border-2 hover:bg-blue-900 text-blue-400 justify-self-end col-span-1 md:col-span-3"
              >
                Apply now
              </button>
            </li>
            <li className="grid grid-cols-2 md:grid-cols-5">
              Content Writer
              <button
                onClick={() => history.push("/apply")}
                className="px-4 rounded-lg shadow-md border-blue-400 border-2 hover:bg-blue-900 text-blue-400 justify-self-end col-span-1 md:col-span-3"
              >
                Apply now
              </button>
            </li>
            <li className="grid grid-cols-2 md:grid-cols-5">
              Graphic Designer
              <button
                onClick={() => history.push("/apply")}
                className="px-4 rounded-lg shadow-md border-blue-400 border-2 hover:bg-blue-900 text-blue-400 justify-self-end col-span-1 md:col-span-3"
              >
                Apply now
              </button>
            </li>
            <li className="grid grid-cols-2 md:grid-cols-5">
              Architect
              <button
                onClick={() => history.push("/apply")}
                className="px-4 rounded-lg shadow-md border-blue-400 border-2 hover:bg-blue-900 text-blue-400 justify-self-end col-span-1 md:col-span-3"
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
