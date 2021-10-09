import Footer from "./Footer";
import NavBar from "./Navbar";
import Tile from "./Tile";

function Web() {
  const tiles = [
    [
      "https://res.cloudinary.com/living-solutions/image/upload/v1633764316/sub-categories/sub/Property_Management_c9duvi.jpg",
      "Real Estate",
      "#",
    ],
    [
      "https://res.cloudinary.com/living-solutions/image/upload/v1633764319/sub-categories/sub/town_Management_v0agmv.jpg",
      "E-commerce",
      "#",
    ],

    [
      "https://res.cloudinary.com/living-solutions/image/upload/v1633764315/sub-categories/sub/construction_fn6ceb.jpg",
      "Construction",
      "#",
    ],
    [
      "https://res.cloudinary.com/living-solutions/image/upload/v1633764316/sub-categories/sub/interior_designing_ta0osr.jpg",
      "Interior Designing",
      "#",
    ],
    [
      "https://res.cloudinary.com/living-solutions/image/upload/v1633764315/sub-categories/sub/architecture_etnqx8.jpg",
      "Architecture",
      "#",
    ],
  ];
  return (
    <>
      <NavBar />
      <div className="grid justify-center text-xl md:text-2xl text-living-red">
        <h1 className="mt-16 mb-10">Real Estate</h1>
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

export default Web;
