import Footer from "./Footer";
import NavBar from "./Navbar";
import Carousel from "react-gallery-carousel";
import "react-gallery-carousel/dist/index.css";
import Tile from "./Tile";

function Landing() {
  const tiles = [
    ["./imgs/marketing.png", "Marketing and Branding", "/marketing"],
    ["./imgs/architecture.png", "Architecture", "#"],
    ["./imgs/real-estate.png", "Real Estate and Construction", "realestate"],
    ["./imgs/interior.png", "Interior Design", "#"],
    ["./imgs/insurance.png", "General Insurance", "#"],
    ["./imgs/govt.png", "Government/Non-government Contracts", "#"],
    ["./imgs/event.png", "Event Management", "#"],
    ["./imgs/procurement.png", "Procurement Solutions", "#"],
    ["./imgs/printing.png", "Printing Solutions", "#"],
    ["./imgs/video.png", "Video Production", "#"],
    ["./imgs/web.png", "Web Development/E-Commerce", "#"],
    ["./imgs/social.png", "Social Welfare", "#"],
  ];
  const images = [
    {
      src: `./imgs/rudn-c.png`, // required
      srcset: `./imgs/rudn-c.png 400w, ./imgs/rudn-c.png 700w, ./imgs/rudn-c.png 1000w`,
      sizes: "(max-width: 1000px) 400px, (max-width: 2000px) 700px, 1000px",
      alt: `Rudn Enclave`,
    },
    {
      src: `./imgs/kabir-c.png`, // required
      srcset: `./imgs/kabir-c.png 400w, ./imgs/kabir-c.png 700w, ./imgs/kabir-c.png 1000w`,
      sizes: "(max-width: 1000px) 400px, (max-width: 2000px) 700px, 1000px",
      alt: `Fauji Kabirwala Power Plant`,
    },
    {
      src: `./imgs/uic-c.jpg`, // required
      srcset: `./imgs/uic-c.jpg 400w, ./imgs/uic-c.jpg 700w, ./imgs/uic-c.jpg 1000w`,
      sizes: "(max-width: 1000px) 400px, (max-width: 2000px) 700px, 1000px",
      alt: `UIC Pakistan`,
    },
    {
      src: `./imgs/wind-c.png`, // required
      srcset: `./imgs/wind-c.png 400w, ./imgs/wind-c.png 700w, ./imgs/wind-c.png 1000w`,
      sizes: "(max-width: 1000px) 400px, (max-width: 2000px) 700px, 1000px",
      alt: `Foundation Wind Pakistan`,
    },
  ];
  return (
    <>
      <NavBar />
      <div className="bg-black hidden md:grid items-center">
        <Carousel
          className="justify-self-center"
          images={images}
          style={{ height: "100%", width: "75%" }}
          isAutoPlaying="true"
          hasMediaButton="false"
          hasSizeButton="false"
          hasIndexBoard="false"
          hasLeftButton="false"
          hasRightButton="false"
        />
      </div>
      <div className="flex md:hidden">
        <Carousel
          images={images}
          style={{ height: "fit-content", width: "fit-content" }}
          isAutoPlaying="true"
          hasMediaButton="false"
          hasSizeButton="false"
          hasIndexBoard="false"
          hasLeftButton="false"
          hasRightButton="false"
        />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 text-xs lg:text-xl bg-living-header text-white">
        {tiles.map((tile) => (
          <Tile imgPath={tile[0]} alt={tile[1]} link={tile[2]} />
        ))}
      </div>
      <div className="flex pl-10 md:pl-0 flex-col md:flex-row md:justify-around pt-10 pb-10 bg-living-header text-gray-50 border-t-2 border-white gap-y-6">
        <div className="text-2xl inline-flex">
          <div className=" border-4 border-gray-600 hover:border-living-chart transition duration-500 ease-in-out">
            <img className="p-2" src="./imgs/stats/chart.svg" alt="Chart" />
          </div>
          <div className="flex-col ml-4 mt-2">
            <h2>12+</h2>
            <p className="text-base text-gray-400">Successful Projects</p>
          </div>
        </div>
        <div className="text-2xl inline-flex">
          <div className=" border-4 border-gray-600 hover:border-living-chart transition duration-500 ease-in-out">
            <img className="p-2" src="./imgs/stats/team.svg" alt="Team" />
          </div>
          <div className="flex-col ml-4 mt-2">
            <h2>25+</h2>
            <p className="text-base text-gray-400">Team Members</p>
          </div>
        </div>
        <div className="text-2xl inline-flex">
          <div className=" border-4 border-gray-600 hover:border-living-chart transition duration-500 ease-in-out">
            <img className="p-2" src="./imgs/stats/hand.svg" alt="Hand" />
          </div>
          <div className="flex-col ml-4 mt-2">
            <h2>10+</h2>
            <p className="text-base text-gray-400">Happy Customers</p>
          </div>
        </div>
        <div className="text-2xl inline-flex">
          <div className=" border-4 border-gray-600 hover:border-living-chart transition duration-500 ease-in-out">
            <img
              className="p-2"
              src="./imgs/stats/creative.svg"
              alt="Machine Learning"
            />
          </div>
          <div className="flex-col ml-4 mt-2">
            <h2>213+</h2>
            <p className="text-base text-gray-400">Creative Ideas</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Landing;
