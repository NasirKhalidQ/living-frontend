import Footer from "./Footer";
import NavBar from "./Navbar";
import Tile from "./Tile";

function Marketings() {
  const tiles = [
    ["./imgs/digital.jpg", "Digital Marketing", "pricing"],
    [
      "./imgs/product-photography.jpg",
      "Product Photography",
      "/services/productPhotography",
    ],

    ["./imgs/videography.jpg", "Video Production", "/services/videoProduction"],

    ["./imgs/telemarketing.jpg", "Telemarketing", "/services/telemarketing"],
    [
      "./imgs/product.jpg",
      "Product Management  ",
      "/services/productManagement",
    ],
    ["./imgs/sales.jpg", "Sales Management", "/services/salesManagement"],
    [
      "https://res.cloudinary.com/living-solutions/image/upload/v1633764316/sub-categories/sub/Graphic_Design_wukbui.jpg",
      "Graphic Design",
      "services/graphic",
    ],
  ];
  return (
    <>
      <NavBar />
      <div className="grid justify-center text-xl md:text-2xl text-living-red">
        <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl text-living-red mt-16 mb-10">
          Marketing and Branding
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

export default Marketings;
