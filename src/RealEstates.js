import Footer from "./Footer";
import NavBar from "./Navbar";
import Tile from "./Tile";

function RealEstates() {
  const tiles = [
    [
      "https://res.cloudinary.com/living-solutions/image/upload/v1633764316/sub-categories/sub/Property_Management_c9duvi.jpg",
      "Rudn Enclave",
      "#",
    ],
    [
      "https://res.cloudinary.com/living-solutions/image/upload/v1633764316/sub-categories/sub/Property_Management_c9duvi.jpg",
      "Icon Enclave",
      "#",
    ],
    [
      "https://res.cloudinary.com/living-solutions/image/upload/v1633764316/sub-categories/sub/Property_Management_c9duvi.jpg",
      "B-17 (Residential and Commercial)",
      "#",
    ],
    [
      "https://res.cloudinary.com/living-solutions/image/upload/v1633764316/sub-categories/sub/Property_Management_c9duvi.jpg",
      "D-12",
      "#",
    ],
    [
      "https://res.cloudinary.com/living-solutions/image/upload/v1633764316/sub-categories/sub/Property_Management_c9duvi.jpg",
      "E-11",
      "#",
    ],
    [
      "https://res.cloudinary.com/living-solutions/image/upload/v1633764316/sub-categories/sub/Property_Management_c9duvi.jpg",
      "Mumtaz City",
      "#",
    ],
    [
      "https://res.cloudinary.com/living-solutions/image/upload/v1633764316/sub-categories/sub/Property_Management_c9duvi.jpg",
      "Life Residencia",
      "#",
    ],
    [
      "https://res.cloudinary.com/living-solutions/image/upload/v1633764316/sub-categories/sub/Property_Management_c9duvi.jpg",
      "Top City",
      "#",
    ],

    [
      "https://res.cloudinary.com/living-solutions/image/upload/v1633764316/sub-categories/sub/Property_Management_c9duvi.jpg",
      "Al-Zarar Heights",
      "#",
    ],
    [
      "https://res.cloudinary.com/living-solutions/image/upload/v1633764316/sub-categories/sub/Property_Management_c9duvi.jpg",
      "Bahria Phase 1-8",
      "#",
    ],
    [
      "https://res.cloudinary.com/living-solutions/image/upload/v1633764316/sub-categories/sub/Property_Management_c9duvi.jpg",
      "DHA Phase 1-3",
      "#",
    ],
  ];
  return (
    <>
      <NavBar />
      <div className="grid justify-center text-xl md:text-2xl text-living-red">
        <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl text-living-red mt-16 mb-10">
          Investment Management
        </h1>
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
