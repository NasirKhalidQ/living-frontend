import Footer from "./Footer";
import NavBar from "./Navbar";
import Tile from "./Tile";

function RealEstates() {
  const tiles = [
    [
      "https://res.cloudinary.com/living-solutions/image/upload/v1634384729/sub-categories/investment-management/rudn_hjqqjl.jpg",
      "Rudn Enclave",
      "#",
    ],
    [
      "https://res.cloudinary.com/living-solutions/image/upload/v1634537133/sub-categories/investment-management/icon_it4t5j.png",
      "Icon Enclave",
      "#",
    ],

    [
      "https://res.cloudinary.com/living-solutions/image/upload/v1634384728/sub-categories/investment-management/D12_hcphas.jpg",
      "CDA Sectors",
      "#",
    ],

    [
      "https://res.cloudinary.com/living-solutions/image/upload/v1634384729/sub-categories/investment-management/mumtaz_lnb73k.jpg",
      "Mumtaz City",
      "#",
    ],
    [
      "https://res.cloudinary.com/living-solutions/image/upload/v1634384728/sub-categories/investment-management/life_fuji1q.jpg",
      "Life Residencia",
      "#",
    ],
    [
      "https://res.cloudinary.com/living-solutions/image/upload/v1634384729/sub-categories/investment-management/top-city_hoemkz.jpg",
      "Top City",
      "#",
    ],

    [
      "https://res.cloudinary.com/living-solutions/image/upload/v1634385025/sub-categories/investment-management/zarar_ukblwz.jpg",
      "Al-Zarar Heights",
      "#",
    ],
    [
      "https://res.cloudinary.com/living-solutions/image/upload/v1634384728/sub-categories/investment-management/bahria_an7dqf.jpg",
      "Bahria Phase 1-8",
      "#",
    ],
    [
      "https://res.cloudinary.com/living-solutions/image/upload/v1634384728/sub-categories/investment-management/Dha_jea3d2.jpg",
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
