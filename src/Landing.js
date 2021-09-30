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
      <Footer />
    </>
  );
}

export default Landing;
