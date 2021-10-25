import Footer from "./Footer";
import NavBar from "./Navbar";
import Tile from "./Tile";

function RealEstates() {
  const tiles = [
    ["./imgs/rudn.jpg", "Rudn Enclave", "/quote"],
    [
      "https://res.cloudinary.com/living-solutions/image/upload/v1634537133/sub-categories/investment-management/icon_it4t5j.png",
      "Icon Enclave",
      "/quote",
    ],

    [
      "https://res.cloudinary.com/living-solutions/image/upload/v1634384728/sub-categories/investment-management/D12_hcphas.jpg",
      "CDA Sectors",
      "realestate/cda",
    ],

    ["./imgs/mumtaz.jpg", "Mumtaz City", "/quote"],
    ["./imgs/life.jpg", "Life Residencia", "/quote"],
    [
      "https://res.cloudinary.com/living-solutions/image/upload/v1634384729/sub-categories/investment-management/top-city_hoemkz.jpg",
      "Top City 1 & 2",
      "/quote",
    ],

    [
      "https://res.cloudinary.com/living-solutions/image/upload/v1634385025/sub-categories/investment-management/zarar_ukblwz.jpg",
      "Al-Zarar Heights B-17",
      "/quote",
    ],
    [
      "https://res.cloudinary.com/living-solutions/image/upload/v1634384728/sub-categories/investment-management/bahria_an7dqf.jpg",
      "Bahria Town",
      "realestate/bahria",
    ],
    [
      "https://gulbergheights.com.pk/wp-content/uploads/elementor/thumbs/gulberg-greens-maps-plots-oy3nzga02n5olz2gwjfp11bsdkwbzcob1hue0tmuls.jpg",
      "Gulberg Greens Islamabad",
      "/quote",
    ],
    ["./imgs/dha.jpg", "DHA", "realestate/dha"],
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
