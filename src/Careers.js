import Footer from "./Footer";
import NavBar from "./Navbar";
import { useHistory } from "react-router-dom";

function Careers() {
  const history = useHistory();

  return (
    <>
      <NavBar />
      <div className="flex-auto pb-40 pt-20 bg-blue-50">
        <div className="space-y-8 mx-72 border-living-header border-2 rounded-xl bg-white font-semibold">
          <div className="grid space-y-8 ml-14 mr-14">
            <h2 className="text-3xl text-center pt-10 font-bold">
              Careers at Living Solutions Pakistan
            </h2>

            <h3 className="text-xl underline">Open Positions</h3>
            <hr />

            <ul className="text-lg space-y-8">
              <li className="inline-block space-y-2">
                <p>Bahria Town, Rawalpindi | Full Time</p>
                <p>Marketing</p>
                <button
                  onClick={() => history.push("/apply")}
                  className="px-4 rounded-lg shadow-md border-blue-400 border-2 hover:bg-blue-100 text-blue-400"
                >
                  Apply now
                </button>
              </li>
              <hr />

              <li className="inline-block space-y-2">
                <p>Bahria Town, Rawalpindi | Full Time</p>
                <p>Sales</p>

                <button
                  onClick={() => history.push("/apply")}
                  className="px-4 rounded-lg shadow-md border-blue-400 border-2 hover:bg-blue-100 text-blue-400"
                >
                  Apply now
                </button>
              </li>
              <hr />

              <li className="inline-block space-y-2">
                <p>Bahria Town, Rawalpindi | Full Time</p>
                <p>Content Writer</p>

                <button
                  onClick={() => history.push("/apply")}
                  className="px-4 rounded-lg shadow-md border-blue-400 border-2 hover:bg-blue-100 text-blue-400"
                >
                  Apply now
                </button>
              </li>
              <hr />

              <li className="inline-block space-y-2">
                <p>Bahria Town, Rawalpindi | Full Time</p>
                <p>Graphic Designer</p>

                <button
                  onClick={() => history.push("/apply")}
                  className="px-4 rounded-lg shadow-md border-blue-400 border-2 hover:bg-blue-100 text-blue-400"
                >
                  Apply now
                </button>
              </li>
              <hr />

              <li className="inline-block space-y-2">
                <p>Bahria Town, Rawalpindi | Full Time</p>
                <p>Architect</p>

                <button
                  onClick={() => history.push("/apply")}
                  className="px-4 rounded-lg shadow-md border-blue-400 border-2 hover:bg-blue-100 text-blue-400"
                >
                  Apply now
                </button>
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
