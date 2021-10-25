import { Link } from "react-router-dom";
import Footer from "./Footer";
import NavBar from "./Navbar";

function Graphic() {
  return (
    <>
      <NavBar />
      <img src="/imgs/banner.jpg" alt="banner" />

      <div className="prose-lg m-10">
        <h2>Graphic Design</h2>
        <p>
          Graphic designing is a craft where we build visual content to market
          our idea. Graphic design uses visual compositions to solve problems
          and communicate ideas through typography, imagery, color, and form.
          Our designers in Living Solutions Pvt Ltd use typography and pictures
          to meet our client’s specific needs and focus on the sense of
          displaying elements ineffective designs, to optimize our client
          experience.
        </p>
      </div>
      <div className="container flex flex-wrap pt-4 pb-10 m-auto mt-6 md:mt-15 lg:px-12 xl:px-16">
        <div className="w-full px-0 lg:px-4">
          <h2 className="px-12 font-bold text-center text-xl md:text-4xl text-living-red">
            Choose your plan
          </h2>
          <p className="py-1 text-sm text-center text-living-red mb-10">
            or get a quote
          </p>
          <div className="flex flex-wrap items-center justify-center py-4 pt-0">
            <div className="w-full p-4 md:w-1/2 lg:w-1/4">
              <label className="flex flex-col rounded-lg shadow-lg group relative cursor-pointer hover:shadow-2xl">
                <div className="w-full px-4 pt-10 rounded-t-lg bg-red-100">
                  <h3 className="mx-auto text-base font-semibold text-center underline text-living-header">
                    Logo Designing
                  </h3>
                  <p className="text-3xl font-bold text-center text-living-header">
                    PKR 5-7,000
                  </p>
                  <p className="text-xs text-center uppercase text-living-header">
                    per logo
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center w-full h-full py-6 rounded-b-lg bg-red-500">
                  <button className="w-5/6 py-2 mt-2 font-semibold text-center uppercase bg-white border border-transparent rounded text-red-500">
                    Get Started
                  </button>
                </div>
              </label>
            </div>

            <div className="w-full p-4 md:w-1/2 lg:w-1/4">
              <label className="flex flex-col rounded-lg shadow-lg relative cursor-pointer hover:shadow-2xl">
                <div className="w-full px-4 pt-10 rounded-t-lg bg-red-400">
                  <h3 className="mx-auto text-base font-semibold text-center underline text-white">
                    Post Designing
                  </h3>
                  <p className="text-3xl font-bold text-center text-white">
                    PKR 1,500
                  </p>
                  <p className="text-xs text-center uppercase text-white">
                    per post
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center w-full h-full py-6 rounded-b-lg bg-red-700">
                  <button className="w-5/6 py-2 mt-2 font-semibold text-center uppercase bg-white border border-transparent rounded text-red-500">
                    Get Started
                  </button>
                </div>
              </label>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Graphic;
