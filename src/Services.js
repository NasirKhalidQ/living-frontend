import Footer from "./Footer";
import NavBar from "./Navbar";
import Service from "./Service";
import Tile from "./Tile";

function Services() {
  const services = [
    [
      "https://res.cloudinary.com/living-solutions/image/upload/v1634537948/main-page/interior_rtqkla.jpg",
      "Interior Designing",
      "#",
    ],
    ["./imgs/marketing.jpg", "Marketing and Branding", "marketing"],

    ["./imgs/architecture.jpg", "Architectural Design", "#"],
    ["./imgs/investment.jpg", "Investment Management", "realestate"],

    ["./imgs/construction.jpg", "Civil Construction Services", "#"],
    ["./imgs/insurance.jpg", "General Insurance", "#"],
    ["./imgs/event.jpg", "Event Management", "#"],
    [
      "https://res.cloudinary.com/living-solutions/image/upload/v1633610121/main-page/IT_Solutions_wsuotr.svg",
      "IT Solutions",
      "it",
    ],
    [
      "https://res.cloudinary.com/living-solutions/image/upload/v1633610120/main-page/Social_Responsibility_zvs1pz.svg",
      "Social Responsibility",
      "#",
    ],
    ["./imgs/photography.jpg", "Photography", "#"],
    ["./imgs/videography.jpg", "Videography", "#"],
    ["./imgs/content.jpg", "Content Creation ", "#"],
  ];
  return (
    <>
      <NavBar />
      <section className="relative">
        <div className="text-base grid mt-10 justify-center font-semibold md:text-2xl text-living-red">
          <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl text-living-red">
            The Services We Offer
          </h1>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 pb-16 gap-x-6 md:gap-x-16 gap-y-4 md:gap-y-10 px-6 text-xs pt-6 lg:text-xl">
          {services.map((tile, index) => (
            <Tile key={index} imgPath={tile[0]} alt={tile[1]} link={tile[2]} />
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}
export default Services;
