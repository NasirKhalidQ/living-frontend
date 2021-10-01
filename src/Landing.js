import Footer from "./Footer";
import NavBar from "./Navbar";
import Carousel from "react-gallery-carousel";
import "react-gallery-carousel/dist/index.css";
import Tile from "./Tile";

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
      src: `https://res.cloudinary.com/living-solutions/image/upload/v1633075744/living-images/rudn-c_fvkmfs.png`, // required
      srcset: `https://res.cloudinary.com/living-solutions/image/upload/v1633075744/living-images/rudn-c_fvkmfs.png 400w, https://res.cloudinary.com/living-solutions/image/upload/v1633075744/living-images/rudn-c_fvkmfs.png 700w, https://res.cloudinary.com/living-solutions/image/upload/v1633075744/living-images/rudn-c_fvkmfs.png 1000w`,
      sizes: "(max-width: 1000px) 400px, (max-width: 2000px) 700px, 1000px",
      alt: `Rudn Enclave`,
    },
    {
      src: `https://res.cloudinary.com/living-solutions/image/upload/v1633075704/living-images/kabir-c_d5pv0t.png`, // required
      srcset: `https://res.cloudinary.com/living-solutions/image/upload/v1633075704/living-images/kabir-c_d5pv0t.png 400w, https://res.cloudinary.com/living-solutions/image/upload/v1633075704/living-images/kabir-c_d5pv0t.png 700w, https://res.cloudinary.com/living-solutions/image/upload/v1633075704/living-images/kabir-c_d5pv0t.png 1000w`,
      sizes: "(max-width: 1000px) 400px, (max-width: 2000px) 700px, 1000px",
      alt: `Fauji Kabirwala Power Plant`,
    },
    {
      src: `https://res.cloudinary.com/living-solutions/image/upload/v1633075712/living-images/uic-c_kqfvyj.jpg`, // required
      srcset: `https://res.cloudinary.com/living-solutions/image/upload/v1633075712/living-images/uic-c_kqfvyj.jpg 400w, https://res.cloudinary.com/living-solutions/image/upload/v1633075712/living-images/uic-c_kqfvyj.jpg 700w, https://res.cloudinary.com/living-solutions/image/upload/v1633075712/living-images/uic-c_kqfvyj.jpg 1000w`,
      sizes: "(max-width: 1000px) 400px, (max-width: 2000px) 700px, 1000px",
      alt: `UIC Pakistan`,
    },
    {
      src: `https://res.cloudinary.com/living-solutions/image/upload/v1633075719/living-images/wind-c_aivjkb.png`, // required
      srcset: `https://res.cloudinary.com/living-solutions/image/upload/v1633075719/living-images/wind-c_aivjkb.png 400w, https://res.cloudinary.com/living-solutions/image/upload/v1633075719/living-images/wind-c_aivjkb.png 700w, https://res.cloudinary.com/living-solutions/image/upload/v1633075719/living-images/wind-c_aivjkb.png 1000w`,
      sizes: "(max-width: 1000px) 400px, (max-width: 2000px) 700px, 1000px",
      alt: `Foundation Wind Pakistan`,
    },
  ];
  return (
    <>
      <NavBar />
      <div className="bg-black grid items-center">
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
