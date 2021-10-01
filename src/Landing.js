import Footer from "./Footer";
import NavBar from "./Navbar";
import Tile from "./Tile";
import "react-image-gallery/styles/css/image-gallery.css";
import ReactImageGallery from "react-image-gallery";

function Landing() {
  const tiles = [
    [
      "https://res.cloudinary.com/living-solutions/image/upload/v1633075707/living-images/marketing_rwju4q.png",
      "Marketing and Branding",
      "/marketing",
    ],
    [
      "https://res.cloudinary.com/living-solutions/image/upload/v1633075699/living-images/architecture_lacp5f.png",
      "Architecture",
      "#",
    ],
    [
      "https://res.cloudinary.com/living-solutions/image/upload/v1633075710/living-images/real-estate_fecel9.png",
      "Real Estate and Construction",
      "realestate",
    ],
    [
      "https://res.cloudinary.com/living-solutions/image/upload/v1633075705/living-images/interior_z4plv3.png",
      "Interior Design",
      "#",
    ],
    [
      "https://res.cloudinary.com/living-solutions/image/upload/v1633075702/living-images/insurance_xccutc.png",
      "General Insurance",
      "#",
    ],
    [
      "https://res.cloudinary.com/living-solutions/image/upload/v1633075705/living-images/govt_lejyxb.png",
      "Government/Non-government Contracts",
      "#",
    ],
    [
      "https://res.cloudinary.com/living-solutions/image/upload/v1633075701/living-images/event_poelpn.png",
      "Event Management",
      "#",
    ],
    [
      "https://res.cloudinary.com/living-solutions/image/upload/v1633075710/living-images/procurement_sctjnm.png",
      "Procurement Solutions",
      "#",
    ],
    [
      "https://res.cloudinary.com/living-solutions/image/upload/v1633075708/living-images/printing_efcpx4.png",
      "Printing Solutions",
      "#",
    ],
    [
      "https://res.cloudinary.com/living-solutions/image/upload/v1633075714/living-images/video_odk3pq.png",
      "Video Production",
      "#",
    ],
    [
      "https://res.cloudinary.com/living-solutions/image/upload/v1633075715/living-images/web_d4hi8j.png",
      "Web Development/E-Commerce",
      "#",
    ],
    [
      "https://res.cloudinary.com/living-solutions/image/upload/v1633075713/living-images/social_wi091q.png",
      "Social Welfare",
      "#",
    ],
  ];
  const images = [
    {
      original: `https://res.cloudinary.com/living-solutions/image/upload/v1633085818/living-images/carousel-images/rudn-c_q9zut3.png`,
      alt: `Rudn Enclave`,
    },
    {
      original: `https://res.cloudinary.com/living-solutions/image/upload/v1633085812/living-images/carousel-images/kabir-c_j1hczr.png`,

      alt: `Fauji Kabirwala Power Plant`,
    },
    {
      original: `https://res.cloudinary.com/living-solutions/image/upload/v1633085805/living-images/carousel-images/uic-c_zrydtc.jpg`,

      alt: `UIC Pakistan`,
    },

    {
      original: `https://res.cloudinary.com/living-solutions/image/upload/v1633085816/living-images/carousel-images/wind-c_yordfk.png`,
      alt: `Foundation Wind Pakistan`,
    },
  ];
  return (
    <>
      <NavBar />
      <div className="w-screen flex justify-center bg-black">
        <div className="w-auto md:w-3/4 bg-living-header">
          <ReactImageGallery
            showPlayButton={false}
            lazyLoad={true}
            items={images}
            showBullets={true}
            showIndex={false}
            showThumbnails={false}
            showNav={false}
            showFullscreenButton={false}
            autoPlay={true}
          />
        </div>
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
