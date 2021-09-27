import Footer from "./Footer";
import NavBar from "./Navbar";
import Carousel from "react-gallery-carousel";
import "react-gallery-carousel/dist/index.css";
import Tile from "./Tile";

function Landing() {
  const tiles = [
    ["./imgs/marketing.png", "Marketing and Branding"],
    ["./imgs/architecture.png", "Architecture"],
    ["./imgs/real-estate.png", "Real Estate and Construction"],
    ["./imgs/interior.png", "Interior Design"],
    ["./imgs/insurance.png", "General Insurance"],
    ["./imgs/govt.png", "Government/Non-government Contracts"],
    ["./imgs/event.png", "Event Management"],
    ["./imgs/procurement.png", "Procurement Solutions"],
    ["./imgs/printing.png", "Printing Solutions"],
    ["./imgs/video.png", "Video Production"],
    ["./imgs/web.png", "Web Development/E-Commerce"],
    ["./imgs/social.png", "Social Welfare"],
  ];
  const images = [
    {
      src: `./imgs/rudn-c.png`, // required
      srcset: `./imgs/rudn-c.png 400w, ./imgs/rudn-c.png 700w, ./imgs/rudn-c.png 1000w`,
      sizes: "(max-width: 1000px) 400px, (max-width: 2000px) 700px, 1000px",
      alt: `Rudn Enclave`,
    },
    {
      src: `./imgs/uic-c.png`, // required
      srcset: `./imgs/uic-c.png 400w, ./imgs/uic-c.png 700w, ./imgs/uic-c.png 1000w`,
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

      <div className="grid grid-cols-2 md:grid-cols-3 text-xs lg:text-xl bg-living-header text-white">
        {tiles.map((tile) => (
          <Tile imgPath={tile[0]} alt={tile[1]} />
        ))}
      </div>
      <Footer />
    </>
  );
}

export default Landing;
