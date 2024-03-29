import Footer from "./Footer";
import NavBar from "./Navbar";
import Tile from "./Tile";

function IT() {
  const tiles = [
    ["./imgs/web.jpg", "Web Development ", "/services/web"],
    [
      "https://res.cloudinary.com/living-solutions/image/upload/v1633764317/sub-categories/sub/SEO_ekuiby.jpg",
      "SEO",
      "/services/seo",
    ],
    ["./imgs/app.jpg", "App Development ", "#"],

    [
      "https://res.cloudinary.com/living-solutions/image/upload/v1633766686/sub-categories/sub/software_pefcdj.jpg",
      "Software Development",
      "#",
    ],
  ];
  return (
    <>
      <NavBar />
      <div className="grid justify-center text-xl md:text-2xl text-living-red">
        <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl text-living-red mt-16 mb-10">
          IT Solutions
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

export default IT;
