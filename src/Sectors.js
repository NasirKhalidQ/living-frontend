import Footer from "./Footer";
import NavBar from "./Navbar";
import Tile from "./Tile";

function Sectors() {
  const sectorData = {
    rudn: {
      heading: "Rudn Enclave",
      sectors: [],
      imgSrc: "",
    },
    icon: {
      heading: "Icon Enclave",
      sectors: [],
      imgSrc: "",
    },
    cda: {
      heading: "CDA sectors",
      sectors: ["E-7", "E-11", "D-12", "F6-F11", "G7-G15", "I8-I16"],
      imgSrc: "",
    },
    mumtaz: {
      heading: "Mumtaz City",
      sectors: [],
      imgSrc: "",
    },
    life: {
      heading: "Life Residencia",
      sectors: [],
      imgSrc: "",
    },
    top: {
      heading: "Top City 1 & 2",
      sectors: [],
      imgSrc: "",
    },
    zarar: {
      heading: "Al-Zarar Heights B-17",
      sectors: [],
      imgSrc: "",
    },
    bahria: {
      heading: "Bahria Town",
      sectors: [
        "Bahria Town Islamabad",
        "Bahria Town Peshawar",
        "Bahria Town Karachi",
        "Bahria Town Lahore",
      ],
      imgSrc: "",
    },
    dha: {
      heading: "DHA",
      sectors: [
        "DHA Lahore Phase 1-12",
        "DHA Quetta",
        "DHA Bhawalpur",
        "DHA Multan",
        "DHA Karachi",
        "DHA Peshawar",
        "DHA Hyderabad",
        "DHA Gujranwala",
      ],
      imgSrc: "",
    },
  };
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

export default Sectors;
