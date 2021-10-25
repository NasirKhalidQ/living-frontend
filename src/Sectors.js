import { useParams } from "react-router";
import Footer from "./Footer";
import NavBar from "./Navbar";
import Tile from "./Tile";

function Sectors() {
  const { area } = useParams();
  const sectorData = {
    rudn: {
      heading: "Rudn Enclave",
      sectors: [],
      imgSrc:
        "https://res.cloudinary.com/living-solutions/image/upload/v1634384728/sub-categories/investment-management/D12_hcphas.jpg",
    },
    icon: {
      heading: "Icon Enclave",
      sectors: [],
      imgSrc:
        "https://res.cloudinary.com/living-solutions/image/upload/v1634384728/sub-categories/investment-management/D12_hcphas.jpg",
    },
    cda: {
      heading: "CDA sectors",
      sectors: ["E-7", "E-11", "D-12", "F6-F11", "G7-G15", "I8-I16"],
      imgSrc:
        "https://res.cloudinary.com/living-solutions/image/upload/v1634384728/sub-categories/investment-management/D12_hcphas.jpg",
    },
    mumtaz: {
      heading: "Mumtaz City",
      sectors: [],
      imgSrc:
        "https://res.cloudinary.com/living-solutions/image/upload/v1634384728/sub-categories/investment-management/D12_hcphas.jpg",
    },
    life: {
      heading: "Life Residencia",
      sectors: [],
      imgSrc:
        "https://res.cloudinary.com/living-solutions/image/upload/v1634384728/sub-categories/investment-management/D12_hcphas.jpg",
    },
    top: {
      heading: "Top City 1 & 2",
      sectors: [],
      imgSrc: "/imgs/top.jpeg",
    },
    zarar: {
      heading: "Al-Zarar Heights B-17",
      sectors: [],
      imgSrc:
        "https://res.cloudinary.com/living-solutions/image/upload/v1634384728/sub-categories/investment-management/D12_hcphas.jpg",
    },
    bahria: {
      heading: "Bahria Town",
      sectors: [
        "Bahria Town Islamabad",
        "Bahria Town Peshawar",
        "Bahria Town Karachi",
        "Bahria Town Lahore",
      ],
      imgSrc:
        "https://res.cloudinary.com/living-solutions/image/upload/v1634384728/sub-categories/investment-management/D12_hcphas.jpg",
    },
    dha: {
      heading: "DHA",
      sectors: [
        "DHA Islamabad Phase 1-5",
        "DHA Lahore Phase 1-12",
        "DHA Quetta",
        "DHA Bhawalpur",
        "DHA Multan",
        "DHA Karachi",
        "DHA Peshawar",
        "DHA Hyderabad",
        "DHA Gujranwala",
      ],
      imgSrc:
        "https://res.cloudinary.com/living-solutions/image/upload/v1634384728/sub-categories/investment-management/D12_hcphas.jpg",
    },
    gulberg: {
      heading: "Gulberg Greens Islamabad",
      sectors: [],
      imgSrc:
        "https://res.cloudinary.com/living-solutions/image/upload/v1634384728/sub-categories/investment-management/D12_hcphas.jpg",
    },
  };
  return (
    <>
      <NavBar />
      <div className="grid justify-center text-xl md:text-2xl text-living-red">
        <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl text-living-red mt-16 mb-10">
          {sectorData[area].heading}
        </h1>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 pb-16 gap-x-6 md:gap-x-16 gap-y-4 md:gap-y-10 px-6 text-xs pt-6 lg:text-xl">
        {sectorData[area].sectors.map((sector, index) => (
          <Tile
            key={index}
            imgPath={sectorData[area].imgSrc}
            alt={sector}
            link="/quote"
          />
        ))}
      </div>
      <Footer />
    </>
  );
}

export default Sectors;
