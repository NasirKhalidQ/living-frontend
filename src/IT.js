import Footer from "./Footer";
import NavBar from "./Navbar";
import Tile from "./Tile";

function IT() {
  const tiles = [
    [
      "https://res.cloudinary.com/living-solutions/image/upload/v1633610119/main-page/Marketing_Branding_bjudp1.svg",
      "Web Development ",
      "#",
    ],
    [
      "https://res.cloudinary.com/living-solutions/image/upload/v1633610120/main-page/Real_Esate_n0cjki.svg",
      "App Development ",
      "#",
    ],

    [
      "https://res.cloudinary.com/living-solutions/image/upload/v1633075702/living-images/insurance_xccutc.png",
      "Software Development",
      "#",
    ],
    [
      "https://res.cloudinary.com/living-solutions/image/upload/v1633610121/main-page/Event_Management_nyrpqx.svg",
      "Graphic Designing",
      "#",
    ],
    [
      "https://res.cloudinary.com/living-solutions/image/upload/v1633610121/main-page/IT_Solutions_wsuotr.svg",
      "Content Writing ",
      "#",
    ],
  ];
  return (
    <>
      <NavBar />
      <div className="grid justify-center text-xl md:text-2xl text-living-red">
        <h1 className="mt-16 mb-10">IT Solutions</h1>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 pb-16 gap-x-6 md:gap-x-16 gap-y-4 md:gap-y-10 px-6 text-xs pt-6 lg:text-xl">
        {tiles.map((tile, index) => (
          <Tile key={index} imgPath={tile[0]} alt={tile[1]} link={tile[2]} />
        ))}
      </div>
      <Footer />
    </>
  );
}

export default IT;
