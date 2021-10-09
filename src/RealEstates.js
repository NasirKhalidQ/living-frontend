import Footer from "./Footer";
import NavBar from "./Navbar";
import Tile from "./Tile";

function RealEstates() {
  const tiles = [
    [
      "https://res.cloudinary.com/living-solutions/image/upload/v1633764316/sub-categories/sub/Property_Management_c9duvi.jpg",
      "Consultancy and Projects",
      "#",
    ],

    [
      "https://res.cloudinary.com/living-solutions/image/upload/v1633764315/sub-categories/sub/construction_fn6ceb.jpg",
      "Civil Construction Services",
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

export default RealEstates;
